const { todoItemService } = require('../services');

// @desc    Create a new todo item
// @route   POST /api/todo-lists/:todoItemId/items
// @access  Private
module.exports.createTodoItem = async (req, res) => {
    try {
        req.body.todoList = req.params.todoListId;
        const todoItem = await todoItemService.createTodoItem(req.body);
        res.status(201).send(todoItem);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Get todo items
// @route GET /api/todo-lists/:todoListId/items
// @access Private
module.exports.getTodoItems = async (req, res) => {
    try {
        console.log(req.params.todoListId)
        const todoItems = await todoItemService.getTodoItems(req.params.todoListId);
        res.status(200).send(todoItems);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// @desc Get todo item by id
// @route GET /api/todo-lists/:todoListId/items/:id
// @access Private
module.exports.getTodoItem = async (req, res) => {
    try {
        const todoItem = await todoItemService.getTodoItemById(req.params.id);
        res.status(200).send(todoItem);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// @desc Update todo item
// @route PUT /api/todo-lists/:todoListId/items/:id
// @access Private
module.exports.updateTodoItem = async (req, res) => {
    try {
        const todoItem = await todoItemService.updateTodoItemById(req.params.id, req.body);
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Delete a todo item
// @route DELETE /api/todo-lists/:todoListId/items/:id
// @access Private
module.exports.deleteTodoItem = async (req, res) => {
    try {
        const todoItem = await todoItemService.deleteTodoItemById(req.params.id);
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}