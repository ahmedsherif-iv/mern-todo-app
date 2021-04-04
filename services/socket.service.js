const socketIo = require('socket.io');

class SocketService {
    constructor(server) {
        this.io = socketIo(server);
        this.io.on('connection', socket => {
            this.#setupConnection(socket);
        });
    }

    async #setupConnection(socket) {
        
        socket.on("disconnect", async (reason) => {
        });
    }

    emiter(to, event, body) {
        if (body)
            this.io.to(to).emit(event, body);
    }
}

module.exports = SocketService;