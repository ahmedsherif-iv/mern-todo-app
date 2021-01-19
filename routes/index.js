const { Router } = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const todoListRoutes = require('./todoList.routes');
const todoItemRoutes = require('./todoItem.routes');
const { authMiddleware } = require('../middlewares');
const { requireAuth } = authMiddleware;

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/todo-lists', requireAuth, todoListRoutes);
router.use('/todo-lists/:todoListId/items', requireAuth, todoItemRoutes);

module.exports = router;