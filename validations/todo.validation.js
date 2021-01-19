const { Joi, Segments } = require('celebrate');

const todoListSchema = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
    }),
}

module.exports = {
    todoListSchema,
}