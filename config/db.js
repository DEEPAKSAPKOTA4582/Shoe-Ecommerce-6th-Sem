const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MongoDB connection starting...");

    // Use an environment variable for the connection string
    const mongoURI = "mongodb+srv://test:test@cluster0.vdqhc9k.mongodb.net/ecommerce"

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
