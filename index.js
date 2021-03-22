const app = require('express')(); //Initializes app
const http = require('http').createServer(app); //Creates http server with app
const io = require('socket.io')(http);


//Handles requests at server homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

// io.on('connection', (socket) => {

//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//     });
//     //console.log('User Connected.');
//     //socket.on('disconnect', () => {
//     //  console.log('User Disconnected.')
//     //});
// });

//Port used by the server.
http.listen(3000, () => {
    console.log('Listening on *:3000');
});