import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import dns  from 'dns';
import { fileURLToPath } from 'url';

const __filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path:path.resolve(__dirname,"../../.env")});

const mongoUrl =process.env.MONGO_URL;
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
]);

if(!mongoUrl){
    console.error("MONGO_URL is not Defined in your .env");
    process.exit(1);
}

export const connectionDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connection Successful");
    }catch(err){
        console.error("Database Connection Error ",err);
        process.exit(1);

    }
}