


import mongoose from "mongoose";
// track the connection
let isConnected = false;
const connectMongoDb = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        console.log("DB connected already");
        return;
    }
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nextjs-crud', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('DB connected successfully...');
    } catch (error) {
        console.log(error);
    }
};

// connectMongoDb()
export default connectMongoDb;