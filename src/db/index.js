import mongoose, { mongo } from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    //connection. = response.
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `\n MongoDB connected :: DB HOST : ${connectionInstance.connection.host}`
    ); // to check that where i am connect.
    // run to get info about this -- TODO
  } catch (error) {
    console.log("error in db/index.js", error);
    process.exit(1); //explore it.
    //throw error; -- is used for exit but here we will use proccess, provided by node.
  }
};

export default connectDB;
