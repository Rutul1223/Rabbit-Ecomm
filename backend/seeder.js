const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

//Connect to mongoDB
mongoose.connect(process.env.MONGODB_URI);

// Function to seed the data

const seedData = async () => {
  try {
    // clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // create a default admin user
    const createdUSer = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "12345678",
      role: "admin",
    });

    // Assign The Default userID to each product
    const userID = createdUSer._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: userID,
      };
    });
    // Insert the products into the Database
    await Product.insertMany(sampleProducts);

    console.log("Product Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
