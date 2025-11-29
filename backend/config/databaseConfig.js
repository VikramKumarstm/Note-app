import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

export const connectDatabase = async () => {
    try {

        const conn = await mongoose.connect(`${MONGO_URI}/note-app`)
        console.log(`Database connected to ${conn.connection.host}`);
        
    
    } catch (error) {
        console.error("error :", error);
        process.exit(1);
        
    }
}