const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');

//  recherche dans le .env pour la connection à la base donnée
require('dotenv').config({path: './config/.env'});
//    recherche de l' adresse et la configuration dans db.js
require('./config/db');

const { checkUser, requireAuth } = require('./middlewares/auth.middleware');
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

// routes
app.use('/api/user', userRoutes);

// server connection à la base de donnée 
app.listen(process.env.PORT, () =>{
    console.log(`Listennig on port ${process.env.PORT}`);
});

