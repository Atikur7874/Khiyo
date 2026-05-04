const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/user");
const Cart = require("./models/Cart");
const products = require("./data/products");

dotenv.config();

//Connect to mongoose
mongoose.connect(process.env.MONGO_URL);

//Function to seed data

const seedData = async () => {
  try {
    //clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    //Create a default admin user
    const createdUser = await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: "123456",
      role: "admin",
    });

    //Assign the default Id
    const userID = createdUser._id;

    const sampleProduct = products.map((product) => {
      return { ...product, user: userID };
    });

    //insert the data into the database
    await Product.insertMany(sampleProduct);

    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data:", error);
    process.exit(1);
  }
};

seedData();
