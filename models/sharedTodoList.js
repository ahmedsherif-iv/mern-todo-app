const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SharedTodoListSchema = Schema({
    todoList: {
        type: Schema.Types.ObjectId,
        ref: 'TodoList',
        required: true,
    },
    sharedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const SharedTodoList = mongoose.model('SharedTodoList', SharedTodoListSchema);

module.exports = SharedTodoList;