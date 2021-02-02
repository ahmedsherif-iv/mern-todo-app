const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const config = require('./config');
const { validationMiddleware, rateLimiter } = require('./middlewares');

const routes = require('./routes');

// set up passport
require('./config/passport-config');

const app = express();


// middlewares
// set security HTTP headers
app.use(helmet());

// parse json request body and urlencoded request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// set static folders
app.use(express.static('public'));
app.use(express.static('templates'));

// initialize passport
app.use(passport.initialize());

// DB config
const db = config.mongo.url;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => console.log('mongodb connected'));

if (process.env.NODE_ENV === 'production') {
    // limit repeated failed requests to auth endpoints
    app.use('/api/auth', rateLimiter.authLimiter);

    // set static folder
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        console.log(path.resolve(__dirname, 'client', 'build', 'index.html'));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
else {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

// set up routes
app.use('/api', routes);

// handle celebrate errors and server errors
app.use(validationMiddleware.handleValidationError);

const PORT = config.PORT || 5000;
app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));