const { Router } = require('express');
const { todoController } = require('../controllers');
const { celebrate } = require('celebrate');
const { opts, todoValidation } = require('../validations');

const router = Router();

router.route('/')
    .post(celebrate(todoValidation.todoListSchema), todoController.createTodoList)
    .get(todoController.getTodoLists);

router.route('/:todoListId')
    .get(todoController.getTodoList)
    .put(celebrate(todoValidation.todoListSchema), todoController.updateTodoList)
    .delete(todoController.DeleteTodoList);

// router.route('/:todoListId/items')
//     .get()

module.exports = router;