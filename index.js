const app = require('express')(); //Initializes app
const http = require('http').createServer(app); //Creates http server with app
const io = require('socket.io')(http);


//Handles requests at server homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    console.log('User Connected.');
    socket.on('disconnect', () => {
        console.log('User Disconnected.')
    });
});

//Port used by the server.
http.listen(3000, () => {
    console.log('Listening on *:3000');
});