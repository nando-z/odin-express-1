import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 8000,
    HOST: process.env.HOST || "localhost",
    NODE_ENV: process.env.NODE_ENV || 'development'
};

if(process.env.NODE_ENV !== 'production'){
    console.log('Environment variables loaded:', config);
}



