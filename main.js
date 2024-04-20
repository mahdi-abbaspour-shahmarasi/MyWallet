const {app, BrowserWindow, Menu} = require('electron') 

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.db');

db.serialize(() => {
    //db.run("CREATE TABLE Users (name, lastName)");
    db.run("INSERT INTO Users VALUES (?, ?)", ['foo', 'bar']);
  });

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
        icon: __dirname+'/assets/img/wallet.png',
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
    Menu.setApplicationMenu(myMenu);

}
app.on('ready', createWindow);