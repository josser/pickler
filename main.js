const electron = require('electron');

const {app, BrowserWindow} = electron;
// Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  if (process.env.NODE_ENV === 'development') {
    var windowOptions = {width: 817, height: 1050, x: 840, y: 0, 'titleBarStyle': 'hidden'};
  } else {
    windowOptions = {width: 1024, height: 768}
  }
  mainWindow = new BrowserWindow(windowOptions);


  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');



  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
