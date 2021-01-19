const { TodoItem } = require('../models');

const getTodoItems = async (todoListId) => {
    const todoItems = await TodoItem.find({ todoList: todoListId });
    return todoItems;
}

const getTodoItemById = async (id) => {
    const todoItem = await TodoItem.findById(id);
    if (todoItem) {
        return todoItem;
    }
    throw new Error('to do item not found');
}

const getTodoItemByOpts = async (opts) => {
    const todoItem = await TodoItem.findOne(opts);
    if (todoItem) {
        return todoItem;
    }
    throw new Error('to do item not found');
}

const createTodoItem = async (todoItemData) => {
    const newTodoItem = await TodoItem.create(todoItemData);
    return newTodoItem;
}

const updateTodoItemById = async (id, data) => {
    const todoItem = await TodoItem.findByIdAndUpdate(id, data);
    if (todoItem) {
        return todoItem;
    }
    throw new Error('to do item not found');
}

const deleteTodoItemById = async (id) => {
    const todoItem = await TodoItem.findById(id);
    if (todoItem) {
        await todoItem.remove();
        return todoItem;
    }
    throw new Error('to do item not found');
}

module.exports = {
    getTodoItemById,
    getTodoItemByOpts,
    getTodoItems,
    createTodoItem,
    updateTodoItemById,
    deleteTodoItemById
}