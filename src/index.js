// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from './db/index.js'    

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.on('error', (err) => {
        console.log("SERVER ERROR OCCURRED", err);
    });
    
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at PORT ${process.env.PORT || 3000}`);
    });
})
.catch((err) => {
    console.log("DB CONNECTION FAILED", err);
});




// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//         console.log("Connected to MongoDB successfully");
//     } catch (error) {
//         console.log("Error while connecting to mongoDB", error);
//         process.exit(1); 
//     }
// })();