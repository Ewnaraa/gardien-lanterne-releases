// Pont minimal entre le jeu (page web, isolée) et l'application de bureau : version et mises à jour seulement.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('gardienApp', {
  version: () => ipcRenderer.invoke('app-version'),
  checkUpdate: () => ipcRenderer.invoke('upd-check'),
  installUpdate: () => ipcRenderer.invoke('upd-install'),
  onUpdate: (cb) => { ipcRenderer.on('upd', (_e, s) => cb(s)); ipcRenderer.send('upd-hello'); }   // et on redemande l'état actuel
});
