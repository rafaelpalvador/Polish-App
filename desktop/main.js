const { app, BrowserWindow, session, shell } = require('electron');
const path = require('path');

// Linux: o Chromium só usa as vozes do sistema (speech-dispatcher) com esta opção
app.commandLine.appendSwitch('enable-speech-dispatcher');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100, height: 840, minWidth: 380, minHeight: 500,
    title: 'Polski, powoli', autoHideMenuBar: true, backgroundColor: '#15161a',
    webPreferences: { contextIsolation: true, sandbox: true },
  });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}

app.whenReady().then(() => {
  // microfone para o Whisper e o ditado
  session.defaultSession.setPermissionRequestHandler((wc, perm, cb) => cb(perm === 'media' || perm === 'microphone'));
  session.defaultSession.setPermissionCheckHandler((wc, perm) => perm === 'media' || perm === 'microphone');
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
