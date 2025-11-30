import express from 'express';
import 'dotenv/config'
import { connectDatabase } from './config/databaseConfig.js';
import userRoute from './routes/userRoute.js';

const app = express();

const PORT = process.env.PORT || 3000

//http://localhost:8080/user/register
app.use('/user', userRoute)

app.listen(PORT, () => {
    //database connection
    connectDatabase();  
    console.log(`server is listening at localhost:${PORT}`);
})