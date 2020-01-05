const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3300 });
 
wss.on('connection', function connection(ws) {
 
    ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 

  //while(1==1){

    ws.send('o małpa');

  //}

  
});