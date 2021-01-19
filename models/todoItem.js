const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoItemSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        default: ''
    },
    dueDate: {
        type: Date,
    },
    todoList: {
        type: Schema.Types.ObjectId,
        ref: 'TodoList',
        required: true,
    },
}, { timestamps: true });

const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

module.exports = TodoItem;