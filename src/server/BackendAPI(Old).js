// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Enable Cross-Origin Resource Sharing
// const app = express();

// require('dotenv').config();


// // Middleware
// app.use(cors());
// app.use(express.json());

// Connect to MongoDB (replace 'mongodb://localhost:27017/yourdb' with your MongoDB connection string)
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a Character schema
// const characterSchema = new mongoose.Schema({
//   name: String,
//   element: String,
//   rarity: String,
//   // Add other character attributes as needed
// });

// // Define a Character model
// const Character = mongoose.model('Character', characterSchema);

// // API route to fetch character data
// app.get('/api/characters', async (req, res) => {
//   try {
//     const characters = await Character.find();
//     res.json(characters);
//   } catch (error) {
//     console.error('Error fetching characters:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
