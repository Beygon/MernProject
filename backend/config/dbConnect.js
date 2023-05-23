import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Connected successfuly");
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDb;
