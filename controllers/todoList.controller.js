const { todoListService, tokenService, userService } = require('../services');
const config = require('../config');

// @desc    Create a new todo list
// @route   POST /api/todo-lists
// @access  Private
module.exports.createTodoList = async (req, res) => {
    try {
        const { name } = req.body;
        const todoList = await todoListService.createTodoList({ name: name, userId: req.user.id });
        res.status(201).send(todoList);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Get todo lists
// @route GET /api/todo-lists
// @access Private
module.exports.getTodoLists = async (req, res) => {
    try {
        const todoLists = await todoListService.getTodoLists(req.user.id);
        res.status(200).send(todoLists);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Get todo list by id
// @route GET /api/todo-lists/:id
// @access Private
module.exports.getTodoList = async (req, res) => {
    try {
        const todoList = await todoListService.getTodoListById(req.params.id);
        res.status(200).send(todoList);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Update Todo List name
// @route PUT /api/todo-lists/:id
// @access Private
module.exports.updateTodoList = async (req, res) => {
    try {
        const todoList = await todoListService.updateTodoListById(req.params.id, req.body);
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Delete a Todo List
// @route DELETE /api/todo-lists/:id
// @access Private
module.exports.deleteTodoList = async (req, res) => {
    try {
        const todoList = await todoListService.deleteTodoListById(req.params.id);
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Invite a member to list
// @route POST /api/todo-lists/invite
// @access Private
module.exports.inviteToList = async (req, res) => {
    try {
        const { email } = req.body;

        const emailToken = tokenService.createToken({ listId: req.params.id, email: email }, config.jwt.JWT_EMAIL_SECRET, '6h');

        const baseUrl = req.protocol + "://" + req.get("host");
        const url = baseUrl + `/api/todo-lists/confirmation/${emailToken}`;
        mailerService.sendMail(req.user.email, 'Confirm Email', 'confirm-email', { url: url, name: req.user.firstName })

        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// @desc Accept invitation to shared list
// @route GET /api/todo-lists/confirmation/:token
// @access Private
module.exports.acceptInvitation = async (req, res) => {
    try {
        const { token } = req.params;
        const { listId, email } = tokenService.verifyToken(token, config.jwt.JWT_EMAIL_SECRET);

        const user = await userService.getUserByOpts({ email });
        await todoListService.updateTodoListById(listId, { shared: true });
        await todoListService.addMemberToList(listId, user.id);

        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}