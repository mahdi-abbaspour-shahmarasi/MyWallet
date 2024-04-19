const {app, BrowserWindow, Menu} = require('electron') 
const createWindow=()=>
{
    let win= new BrowserWindow({
        width: 900, 
        height: 700,
        title:'مدیریت کیف پول من',
        //frame:false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
          },
    })   
    win.loadFile('index.html');
    //win.webContents.openDevTools();

    const template=[
        {
            label: 'فایل',
            submenu:[
                {label:'ساخت فایل پایگاه داده جدید',},    
                {label:'بازکردن فایل پایگاه داده',},                
                {
                    label:'فعال سازی حالت برنامه نویسی',
                    click()
                    {
                        win.webContents.openDevTools();
                    }
                },
                {label:'خروج',},
            ]
        }
    ];
    const myMenu=Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(null);

}
app.on('ready', createWindow);