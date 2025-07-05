// as soon as possible it is required to get dot in all file.
//require("dotenv").config(); --> but this degrades the code consistency.
import dotenv from "dotenv";
// SECOND APPROACH OF DB HADNLING WITH DB FILE.
// import express from "express";
import connectDB from "./db/index.js";
import app from "./app.js";

//dotenv config.
dotenv.config({
  // will use it as experimental feature in dev-scripts.
  //-r dotenv/config --experimental-json-modules in package.json

  path: "../env",
});

connectDB()
.then(()=>{
  app.on("ERROR",(error)=>{
    console.log(`Error in root folder index.js :: ${error}`);
    throw error
    
  })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at PORT ::${process.env.PORT}`);
    
  })//if port is not availabel then use 8000.
})
.catch((err)=>{
  console.log("MONGO db connection failed ::",err);
  
})
//const app = express();

//listeners of express.
//FROM HERE
// app.on("ERROR", (error) => {
//   console.log("error in db/index.js", error);
// });
// // listening
// //app.listen(where, message)
// app.listen(process.env.PORT, () => {
//   console.log(`App is listening on PORT : ${process.env.PORT}`);
//   throw error;
// });
// TO HERE

//.......... THIS IS THE FIRST APPROACH TO HANDLE DB in index.js...................

// //mangoose is used connect the database.
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
// import express from "express";

// //instance of the express.
// const app = express()(
//   /*
// --> basic way to connect db
//     function connectDB(){}

//     connectDB();
// */

//   // --> making it more professional
//   // with IFFI concept to call it immediatly.

//   //information about this connection making is in Notes.md to learn this.
//   async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
//       // connection URL and DB name.

//       //listener - express.(to access events.)
//       // FROM HERE
//       app.on("error", (error) => {
//         console.log("ERROR in dbconnection", error);
//         throw error;
//       });
//       // if we are able to talk to db then.
//       app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//       });
//       // TO HERE.

//     } catch (error) {
//       console.log("ERROR in DBConnection.", error);
//       throw err;
//     }
//   }
// )();
