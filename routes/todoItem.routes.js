const { Router } = require('express');
const { todoItemController } = require('../controllers');
const { celebrate } = require('celebrate');
const { todoValidation, opts } = require('../validations');

const router = Router({ mergeParams: true });

router.route('/')
    .post(celebrate(todoValidation.todoItemSchema, opts), todoItemController.createTodoItem)
    .get(todoItemController.getTodoItems)

router.route('/:id')
    .get(todoItemController.getTodoItem)
    .put(celebrate(todoValidation.todoItemSchema, opts), todoItemController.updateTodoItem)
    .delete(todoItemController.deleteTodoItem)

module.exports = router;