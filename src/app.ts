import express, { type NextFunction, type Request, type Response } from 'express';
import { config } from './config/app.config';
import router from './routes/route';
import middelware from './middelware/user.middelware';

// Core Setting
const app = express();

app.use('/', router);

app.use(middelware);

// Middleware Setting
app.use(express.json());

// Server Run
app.listen(config.PORT, () =>{
    console.dir(`\nServer Start at [http://${config.HOST}:${config.PORT}]`)
});
