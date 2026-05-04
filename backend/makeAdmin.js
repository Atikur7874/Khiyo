const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user");

dotenv.config();

const makeAdmin = async () => {
  const email = process.argv[2];

  if (!email) {
    console.error("Usage: node makeAdmin.js <email>");
    process.exit(1);
  }

  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        process.env.MONGODB_URI ||
        "mongodb://127.0.0.1:27017/terrarium"
    );

    const user = await User.findOne({ email });
    if (!user) {
      console.error(`User not found: ${email}`);
      process.exit(1);
    }

    user.role = "admin";
    await user.save();

    console.log(`User promoted to admin: ${email}`);
    process.exit(0);
  } catch (error) {
    console.error("Failed to promote user:", error.message);
    process.exit(1);
  }
};

makeAdmin();
