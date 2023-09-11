// // const express = require('express');
// const mongoose = require('mongoose');
// // const cors = require('cors');
// // const Character = require('./models/Character'); // Assuming your Character model is in a separate file
// require('dotenv').config();

// const URI = process.env.MONGODB_URI;

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const Characters = mongoose.model("Characters", {
//   _id: String,
//   character_id: String,
//   name: String,
//   element: String,
//   rarity: String,
//   avatarUrl: String,
//   weapon: String,
// });

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const getCharacters = async () => {
//   const chars = await Characters.find();

//   return chars;
// };

// // module.exports = getCharacters;
// export default getCharacters;

// // app.get('/getCharacters', async (req, res) => {
// //   console.log('GET request received at /getCharacters');
// //   try {
// //     const chars = await Character.find();
// //     console.log('Data fetched successfully:', chars);
// //     res.json(chars);
// //   } catch (err) {
// //     console.error('Error fetching data:', err);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });

// // const PORT = process.env.PORT || 3001;

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
