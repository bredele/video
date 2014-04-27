var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var resolve = require('path').resolve;



app.use(express.static(resolve('.')));
app.use('/app', express.static(resolve('../..', 'build')));
server.listen(3000);




io
  .sockets
  .on('connection', function (socket) {
    socket.on('join', function(room) {
      var people = io.sockets.clients(room).length;
      socket.join(room);
      if(people) {
        console.log('people already create room');
        // on envoit signal slave connected
        socket.broadcast.emit('slave');
      } else {
        socket.emit('master');
        console.log('room created you are the master');
      }
    });

    socket.on('candidate', function(candidate) {
      socket.broadcast.emit('candidate', candidate);
    });

    socket.on('master offer', function(offer) {
      console.log('master offer and broadcast offer');
      socket.broadcast.emit('master offer', offer);
    });

    socket.on('slave offer', function(offer) {
      console.log('slave offer and broadcast offer', offer);
      socket.broadcast.emit('slave offer', offer);
    });

});