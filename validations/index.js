const userValidation = require('./user.validation');
const todoValidation = require('./todo.validation');

// celebration options
const opts = {
    abortEarly: false,
    errors: {
        wrap: { label: '' },
    },
};
module.exports = {
    userValidation,
    todoValidation,
    opts,
}