const socketIo = require('socket.io');
const { Socket } = require('../models');
const tokenService = require('./token.service');
class SocketService {
    constructor(server) {
        this.io = socketIo(server, {
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST"],
                credentials: true,
            }
        });
        this.io.on('connection', socket => {
            this.#setupConnection(socket);
        });
    }

    async #setupConnection(socket) {
        const token = socket.handshake.auth.token;
        if (token) {
            const { id } = tokenService.verifyToken(token);
            console.log('made socket connection', id);
            console.log('socket-Id:', socket.id);

            await Socket.create({ user: id, socket: socket.id });
        }

        socket.on("disconnect", async (reason) => {
            const connection = await Socket.findOne({ socket: socket.id });
            if (connection) {
                await connection.remove();
            }
        });
    }

    emiter(to, event, body) {
        if (body)
            this.io.to(to).emit(event, body);
    }
}

module.exports = SocketService;