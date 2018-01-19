const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

const server = http.createServer(app);

var io = socketIO(server);

io.on('connection',(socket)=>{
   console.log('new user connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected from server' );
    });
});


server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
