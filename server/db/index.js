import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `\nConnected to DB | ${connectionInstance.connection.db.databaseName} \n`
    );
  } catch (error) {
    console.log("Error in connecting to DB", error);
    throw new Error(error);
  }
}
