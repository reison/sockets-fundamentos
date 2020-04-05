    var socket = io();

    socket.on('connect', function() {
        console.log("conectado al servidor");
    });

    // escuchar
    socket.on('disconnect', function() {
        console.log("perdimos coneccion con el servidor");
    });

    // enviar informacion
    socket.emit('enviarMensaje', {
        usuario: 'reison',
        mensaje: 'hola mundo'
    }, function(resp) {
        console.log('respuesta server: ', resp);
    });

    socket.on('enviarMensaje', function(mensaje) {
        console.log('servidor:', mensaje);
    });