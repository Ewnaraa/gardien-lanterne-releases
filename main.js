// Gardien de la Lanterne — version de bureau (Electron).
// Le jeu est exactement la page web (HTML Canvas + JavaScript), servie depuis les fichiers de l'application
// par une adresse interne « app://gardien/ » : la sauvegarde (localStorage) reste stable d'une version à l'autre.
const { app, BrowserWindow, protocol, net, Menu, shell, dialog, ipcMain } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }]);
app.commandLine.appendSwitch('enable-gpu-rasterization');          // dessin Canvas par la carte graphique
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');   // musique dès le menu

if (!app.requestSingleInstanceLock()) app.quit();

const ROOT = path.join(__dirname, 'app');
let win = null;

function createWindow(){
  win = new BrowserWindow({
    width: 1600, height: 900, minWidth: 960, minHeight: 600,
    backgroundColor: '#050605', title: 'Gardien de la Lanterne', show: false,
    autoHideMenuBar: true,
    icon: path.join(ROOT, 'icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, backgroundThrottling: false, spellcheck: false, preload: path.join(__dirname, 'preload.js') }
  });
  Menu.setApplicationMenu(null);
  win.once('ready-to-show', () => { win.maximize(); win.show(); });
  // F11 : plein écran ; Alt+Entrée aussi (habitude des jeux PC)
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11' || (input.alt && input.key === 'Enter')){ win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
  // les liens externes s'ouvrent dans le navigateur, jamais dans la fenêtre du jeu
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.loadURL('app://gardien/index.html');
}

/* ---------- Mises à jour automatiques (versions publiées sur GitHub) ----------
   Au lancement (puis toutes les 2 h) : cherche une version plus récente et la télécharge en arrière-plan.
   Le jeu AFFICHE l'avancement (« Mise à jour 0.35.0 : 42 % ») et propose « Redémarrer et installer » quand elle est prête.
   Si le joueur ne redémarre pas, elle s'installe toute seule à la fermeture. La sauvegarde n'est jamais touchée. */
let UPD = {s:'idle'};
const sendUpd = (st) => { UPD = st; if (win && !win.isDestroyed()) win.webContents.send('upd', st); };
ipcMain.handle('app-version', () => app.getVersion());
function setupUpdates(){
  let autoUpdater = null;
  if (app.isPackaged){ try { ({ autoUpdater } = require('electron-updater')); } catch (e){ autoUpdater = null; } }
  ipcMain.handle('upd-check', async () => {
    if (!autoUpdater){ sendUpd({s:'dev'}); return UPD; }
    if (UPD.s === 'progress' || UPD.s === 'ready') { sendUpd(UPD); return UPD; }
    try { await autoUpdater.checkForUpdates(); } catch (e){ sendUpd({s:'error', msg:String(e && e.message || e).slice(0, 160)}); }
    return UPD;
  });
  ipcMain.handle('upd-install', () => { if (autoUpdater && UPD.s === 'ready') setImmediate(() => autoUpdater.quitAndInstall(true, true)); });
  if (!autoUpdater) return;
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on('checking-for-update', () => sendUpd({s:'checking'}));
  autoUpdater.on('update-not-available', (i) => sendUpd({s:'none', v:i && i.version}));
  autoUpdater.on('update-available', (i) => sendUpd({s:'progress', v:i.version, p:0}));
  autoUpdater.on('download-progress', (p) => sendUpd({s:'progress', v:UPD.v, p:Math.round(p.percent || 0), mbps:+((p.bytesPerSecond || 0)/1e6).toFixed(1)}));
  autoUpdater.on('update-downloaded', (i) => sendUpd({s:'ready', v:i.version}));
  autoUpdater.on('error', (e) => sendUpd({s:'error', msg:String(e && e.message || e).slice(0, 160)}));   // hors ligne : on joue quand même
  autoUpdater.checkForUpdates().catch(() => {});
  setInterval(() => { if (UPD.s !== 'progress' && UPD.s !== 'ready') autoUpdater.checkForUpdates().catch(() => {}); }, 2*60*60*1000);
}
// le jeu redemande l'état quand sa page est prête (il a pu manquer les premiers messages)
ipcMain.on('upd-hello', () => sendUpd(UPD));

app.whenReady().then(() => {
  protocol.handle('app', (req) => {
    const u = new URL(req.url);
    const p = path.normalize(path.join(ROOT, decodeURIComponent(u.pathname)));
    if (!p.startsWith(ROOT)) return new Response('Interdit', { status: 403 });
    return net.fetch(pathToFileURL(p).toString());
  });
  createWindow();
  setupUpdates();
});
app.on('second-instance', () => { if (win){ if (win.isMinimized()) win.restore(); win.focus(); } });
app.on('window-all-closed', () => app.quit());
