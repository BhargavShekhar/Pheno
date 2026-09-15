import mongoose from "mongoose";

const dbConnection = async () => {
    const dbUrl=process.env.DB_URL;

    if (!dbUrl) {
        throw new Error("Db url not defined");
    }

    await mongoose.connect(dbUrl);
    
}