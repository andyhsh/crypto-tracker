const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 4000;

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', client => {
  console.log('User connected');
  client.on('disconnect', () => {
    console.log('User disconnected');
  })
});

server.listen(port, () => console.log(`Listening on port ${port}`));