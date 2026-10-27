// Gardien de la Lanterne — version de bureau (Electron).
// Le jeu est exactement la page web (HTML Canvas + JavaScript), servie depuis les fichiers de l'application
// par une adresse interne « app://gardien/ » : la sauvegarde (localStorage) reste stable d'une version à l'autre.
const { app, BrowserWindow, protocol, net, Menu, shell, dialog } = require('electron');
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
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, backgroundThrottling: false, spellcheck: false }
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
   Au lancement : vérifie s'il existe une version plus récente, la télécharge en arrière-plan,
   puis propose de redémarrer. Si le joueur refuse, elle s'installe toute seule à la fermeture du jeu.
   La sauvegarde n'est jamais touchée (elle est dans le dossier utilisateur, pas dans le jeu). */
function setupUpdates(){
  if (!app.isPackaged) return;                                         // pas de mise à jour pendant les essais
  let autoUpdater;
  try { ({ autoUpdater } = require('electron-updater')); } catch (e){ return; }
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on('error', () => {});                                    // hors ligne ou serveur absent : on joue quand même
  autoUpdater.on('update-downloaded', async (info) => {
    if (!win) return;
    const r = await dialog.showMessageBox(win, {
      type: 'info', buttons: ['Redémarrer maintenant', 'Plus tard'], defaultId: 0, cancelId: 1,
      title: 'Mise à jour prête', message: 'La version ' + info.version + ' de Gardien de la Lanterne est prête.',
      detail: 'Redémarre pour l’installer, ou elle s’installera quand tu fermeras le jeu. Ta sauvegarde est conservée.'
    });
    if (r.response === 0) setImmediate(() => autoUpdater.quitAndInstall(true, true));
  });
  autoUpdater.checkForUpdates().catch(() => {});
  setInterval(() => autoUpdater.checkForUpdates().catch(() => {}), 2*60*60*1000);   // et toutes les 2 h si le jeu reste ouvert
}

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
