import mongoose from "mongoose";

async function connect() {
  const url = process.env.MONGO_URI;
  await mongoose.connect(url);
  console.log("MongoDB Successfully connected");
}

export default connect;
