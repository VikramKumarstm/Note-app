import express from 'express';
import 'dotenv/config'
import { connectDatabase } from './config/databaseConfig.js';

const app = express();

const PORT = process.env.PORT || 3000

//database connection
connectDatabase();

app.listen(PORT, () => {
    console.log(`server is listening at localhost:${PORT}`);
})