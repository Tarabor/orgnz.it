const express = require('express');
const morgan = require('morgan');
const app = express();

const usersRoutes = require('./api/users');

app.use(morgan('dev'));
app.use('/users', usersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Pippo');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;