const { todoService } = require('../services');
const config = require('../config');

// @desc    Create a new todo list
// @route   POST /api/todo-lists
// @access  Private
module.exports.createTodoList = async (req, res) => {
    try {
        const { name } = req.body;
        const todoList = await todoService.createTodoList({ name: name, userId: req.user.id });
        res.status(201).send(todoList);
    } catch (error) {
        res.status(400).send({ messsage: error.message });
    }
}

// @desc Get todo lists
// @route GET /api/todo-lists
// @access Private
module.exports.getTodoLists = async (req, res) => {
    try {
        const todoLists = await todoService.getTodoLists(req.user.id);
        res.status(200).send(todoLists);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// @desc Get todo list by id
// @route GET /api/todo-lists/:todoListId
// @access Private
module.exports.getTodoList = async (req, res) => {
    try {
        const todoList = await todoService.getTodoListById(req.params.todoListId);
        res.status(200).send(todoList);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// @desc Update Todo List name
// @route PUT /api/todo-lists/:todoListId
// @access Private
module.exports.updateTodoList = async (req, res) => {
    try {
        const todoList = await todoService.updateTodoListById(req.params.todoListId, req.body);
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Delete a Todo List
// @route DELETE /api/todo-lists/:todoListId
// @access Private
module.exports.DeleteTodoList = async (req, res) => {
    try {
        const todoList = await todoService.deleteTodoListById(req.params.todoListId);
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}