// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from './db/index.js'    

dotenv.config({
    path: './.env'
})


connectDB();




// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//         console.log("Connected to MongoDB successfully");
//     } catch (error) {
//         console.log("Error while connecting to mongoDB", error);
//         process.exit(1); 
//     }
// })();