const mongoose = require('mongoose');

// Define a Character schema
const characterSchema = new mongoose.Schema({
  _id: String,
  character_id: String,
  name: String,
  element: String,
  rarity: String,
  avatarUrl: String,
  weapon: String,

  // Add other character attributes as needed
});

// Define a Character model
const Character = mongoose.model('Characters', characterSchema);
// export default Character
module.exports = Character