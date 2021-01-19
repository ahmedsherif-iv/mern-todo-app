const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoListSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const TodoList = mongoose.model('TodoList', TodoListSchema);

module.exports = TodoList;