const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const config = require('./config');
const { SocketService } = require('./services');
const { validationMiddleware, rateLimiter } = require('./middlewares');

const routes = require('./routes');

// set up passport
require('./config/passport-config');

const app = express();


// middlewares
// set security HTTP headers
// app.use(helmet());

// parse json request body and urlencoded request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// gzip compression
// app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

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

// set up routes
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    // limit repeated failed requests to auth endpoints
    app.use('/api/auth', rateLimiter.authLimiter);

    // set static folder
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
else {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

// handle celebrate errors and server errors
app.use(validationMiddleware.handleValidationError);

const PORT = config.PORT || 5000;
const server = app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));

app.set('socketService', new SocketService(server));