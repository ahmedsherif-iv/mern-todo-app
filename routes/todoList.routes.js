const { Router } = require('express');
const { todoListController } = require('../controllers');
const { celebrate } = require('celebrate');
const { todoValidation } = require('../validations');

const router = Router();

router.route('/')
    .post(celebrate(todoValidation.todoListSchema), todoListController.createTodoList)
    .get(todoListController.getTodoLists);

router.route('/confirmation/:token')
    .get(todoListController.acceptInvitation);

router.route('/:id')
    .get(todoListController.getTodoList)
    .put(celebrate(todoValidation.todoListSchema), todoListController.updateTodoList)
    .delete(todoListController.deleteTodoList);

router.route('/:id/invite')
    .post(todoListController.inviteToList);


module.exports = router;