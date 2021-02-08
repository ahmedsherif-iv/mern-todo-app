const { Joi, Segments } = require('celebrate');

const todoListSchema = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        color: Joi.string(),
    }),
}

const todoItemSchema = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        note: Joi.string(),
        dueDate: Joi.date(),
    }),
}

module.exports = {
    todoListSchema,
    todoItemSchema,
}