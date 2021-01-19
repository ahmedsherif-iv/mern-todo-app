const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoListSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    shared: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    sharedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, { timestamps: true });

const TodoList = mongoose.model('TodoList', TodoListSchema);

module.exports = TodoList;