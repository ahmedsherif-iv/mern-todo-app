const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SocketSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    socket: {
        type: String,
        unique: true,
        required: true,
    },
});

const Socket = mongoose.model('Socket', SocketSchema);

module.exports = Socket;