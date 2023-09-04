const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Enable Cross-Origin Resource Sharing
const Characters = require('../data/Characters.cjs')
const URI = process.env.MONGODB_URI

require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// app.get('/getCharacters', (req, res) => {
//   Characters.find()
//   .then(chars => res.json(chars))
//   .catch(err => res.json(err))
// })



app.get('/getCharacters', (req, res) => {
  console.log('GET request received at /getCharacters');
  
  Characters.find()
    .then(chars => {
      console.log('Data fetched successfully:', chars);
      res.json(chars);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});