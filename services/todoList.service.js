const { TodoList, SharedTodoList } = require('../models');

const getTodoLists = async (userId) => {
    const todoLists = await TodoList.find({ createdBy: userId });
    const sharedLists = await SharedTodoList.find({ user: userId }).populate('todoList');
    const lists = sharedLists.map(({ todoList }) => {
        return todoList;
    })
    return todoLists.concat(lists);
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

const createTodoList = async ({ name, color, userId }) => {
    const newTodoList = await TodoList.create({ name: name, color: color, createdBy: userId });
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

const addMemberToList = async (todoListId, userId) => {
    const member = await SharedTodoList.findOne({ todoList: todoListId, user: userId });
    if (member) {
        throw new Error('already a member of the shared list');
    }

    const result = await SharedTodoList.create({ todoList: todoListId, user: userId });
    return result;
}

module.exports = {
    getTodoListById,
    getTodoListByOpts,
    getTodoLists,
    createTodoList,
    updateTodoListById,
    deleteTodoListById,
    addMemberToList,
}