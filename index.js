const app = require('express')(); //Initializes app
const http = require('http').createServer(app); //Creates http server with app


//Handles requests at server homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


//Port used by the server.
http.listen(3000, () => {
    console.log('Listening on *:3000');
});