const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var createError = require('http-errors');


const mongoose = require('mongoose');
require('dotenv').config({path: './config/.env'});
require('./config/db');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/productRoutes')
const userRouter = require('./routes/userRoutes');

const server = express();

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/users', usersRouter);
server.use('/api/products', productRouter);
server.use('/api/users', userRouter);

module.exports = server;
