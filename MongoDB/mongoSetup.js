/* eslint-env node */

import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const conn = await mongoose.connect(process.env.MONGO_KEY, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectToDatabase;
