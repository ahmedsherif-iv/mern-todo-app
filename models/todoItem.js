const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoItemSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    todoList: {
        type: Schema.Types.ObjectId,
        ref: 'TodoList',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

module.exports = TodoItem;