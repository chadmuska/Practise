const TabGroup = require("electron-tabs");
let tabGroup = new TabGroup();

tabGroup.addTab({
    title: "Console",
    src: "./console.html",
    webviewAttributes: {
        'nodeintegration': true
    },
   closable:false
   

});

tabGroup.addTab({
    title: "Protocol",
    src: "./protocol.html",
    webviewAttributes: {
        'nodeintegration': true
    },
    closable:false,
    active:true,
});