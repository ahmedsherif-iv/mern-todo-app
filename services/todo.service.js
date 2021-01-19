const { TodoList } = require('../models');

const getTodoLists = async (userId) => {
    const todoLists = await TodoList.find({ user: userId });
    return todoLists;
}

const getTodoListById = async (id) => {
    const todoList = await TodoList.findById(id);
    if (todoList) {
        return todoList;
    }
    throw new Error('to do list not found');
}

const getTodoListByOpts = async (opts) => {
    const todoList = await TodoList.findOne(opts);
    if (todoList) {
        return todoList;
    }
    throw new Error('to do list not found');
}

const createTodoList = async ({ name, userId }) => {
    const todoList = await TodoList.findOne({ name });
    if (todoList) {
        throw new Error('to do list already exists');
    }

    const newTodoList = await TodoList.create({ name: name, user: userId });
    return newTodoList;
}

const updateTodoListById = async (id, data) => {
    const todoList = await TodoList.findByIdAndUpdate(id, data);
    if (todoList) {
        return todoList;
    }
    throw new Error('to do list not found');
}

const deleteTodoListById = async (id) => {
    const todoList = await TodoList.findById(id);
    if (todoList) {
        await todoList.remove();
        return todoList;
    }
    throw new Error('to do list not found');
}

module.exports = {
    getTodoListById,
    getTodoListByOpts,
    getTodoLists,
    createTodoList,
    updateTodoListById,
    deleteTodoListById
}