const { Router } = require('express');
const { todoListController } = require('../controllers');
const { celebrate } = require('celebrate');
const { todoValidation } = require('../validations');

const router = Router();

router.route('/')
    .post(celebrate(todoValidation.todoListSchema), todoListController.createTodoList)
    .get(todoListController.getTodoLists);

router.route('/:id')
    .get(todoListController.getTodoList)
    .put(celebrate(todoValidation.todoListSchema), todoListController.updateTodoList)
    .delete(todoListController.deleteTodoList);

module.exports = router;