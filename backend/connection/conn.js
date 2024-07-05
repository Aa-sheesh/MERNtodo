import mongoose from "mongoose";

const conn = async (res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
      .then(() => {
          console.log("Connected to MongoDB");
    });
  } catch (error) {
    res.status(400).json({
      message:"Connection failed!"});
  }
};
conn();
