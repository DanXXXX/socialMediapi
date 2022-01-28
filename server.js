const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes')
//  recherche dans le .env pour la connection à la base donnée
require('dotenv').config({path: './config/.env'});
//    recherche de l' adresse et la configuration dans db.js
require('./config/db');
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));

// routes
app.use('/api/user', userRoutes);

// server connection à la base de donnée 
app.listen(process.env.PORT, () =>{
    console.log(`Listennig on port ${process.env.PORT}`);
});

