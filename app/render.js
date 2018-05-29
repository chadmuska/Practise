

window.$ = window.jQuery = require('./public/js/jquery.min.js');
let serialport = require('serialport');
let port = null;
serialport.list((err, ports) => {

    for (let item of ports) {
       
        $('.com').append(`<option>${item.comName}</option>`)

    }
    console.log(ports);
});


$('.btn-submit').click((data) => {
    
    let COM = $('#disabledSelect option:selected').text();
    let BaudRate = $('#BaudRate').val();
   
    console.log(COM);
    console.log(BaudRate);
    port = new serialport(COM, {
        baudRate: parseInt(BaudRate)
    });
    
    $('.receive-windows').text(`open port: ${COM}, BaudRate: ${BaudRate}`);
    $('.receive-windows').append('<br/>=======================================<br/>');
    const Readline = serialport.parsers.Readline
    const parser = new Readline('\n');
    port.pipe(parser);
    parser.on('data', data => {
        
        console.log(`DATA: ${data}`);
        
        $('.receive-windows').append(data.toString().replace(/(\[\d*m)/g,'')+'<br/>');
       
    });
});
$('.btn-close').click(()=>{
    $('.receive-windows').append('<br/>=======================================<br/>');
    $('.receive-windows').append('console close<br/>');
    port.close()
})
// MSG SEND
$('.btn-send').click(() => {
    var sendData = $('.input-send-data').val();
    if (port != {} && port != null) {
        console.log(`SendData: ${sendData}`);
        port.write(sendData);
    }
})
// CLEAR MSG
$('.btn-reset').click(() => {
    $('.input-send-data').val('');
})





require('./src/js/tab.js');require('./protocol.js');
