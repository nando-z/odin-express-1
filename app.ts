import express from 'express';
import dotenv from 'dotenv';
import router from './core/routes/route';

// Core Setting
const app = express();
const env = dotenv.config();
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || "localhost";

if(process.env.NODE_ENV  !== 'production'){
    env;
}


app.use('/', router);


// Server Run
app.listen(PORT,
    ()=>console.dir(`Server Start at https://${HOST}:${PORT}`)
);

