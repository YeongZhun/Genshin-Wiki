// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000; // Choose a port for your server
require('dotenv').config()

app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
});

// Create a schema and model for your data
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  _id: String,
  character_id: String,
  name: String,
  element: String,
  rarity: String,
  avatarUrl: String,
  weapon: String,
});

const Data = mongoose.model("Characters", dataSchema, "Characters");

// Define your API routes
app.get('/api/data', async (req, res) => {
  try {
    
    const data = await Data.find();
    res.json(data);
    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
