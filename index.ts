import express from 'express';
import dotenv from 'dotenv';
import router from './core/routes/index';
const app = express();

if(process.env.NODE_ENV  !== 'production'){
    dotenv.config();
}

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || "localhost";
app.use('/', router);

// Server Run
app.listen(PORT, HOST, () => {
    console.dir("Server Run in http://"+HOST+":"+PORT+"/");
});

