import app from './app.js';
import dotenv from 'dotenv';
import { connectionDb } from './config/db.js';

dotenv.config();
const PORT = process.env.PORT;

connectionDb();
const server = app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});

export default server;