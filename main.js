const {app, BrowserWindow} = require('electron') 
const createWindow=()=>
{
    let win= new BrowserWindow({
        width: 800, 
        height: 600,
        title:'مدیریت کیف پول من'
    })   
    win.loadFile('index.html');
    win.webContents.openDevTools();
}
app.on('ready', createWindow);