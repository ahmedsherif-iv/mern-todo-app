const { Router } = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const todoRoutes = require('./todo.routes');
const { authMiddleware } = require('../middlewares');
const { requireAuth } = authMiddleware;

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/todo-lists', requireAuth, todoRoutes);

module.exports = router;