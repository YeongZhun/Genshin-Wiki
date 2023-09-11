// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const app = express();
const port = 5000; // Choose a port for your server
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

//For limiting of comments section post
const rateLimit = require("express-rate-limit");

// Create a rate limiter middleware
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 2, // Max 10 requests per minute
    message: "Too many comments from this IP, please try again later.",
});

// Apply the rate limiter to the comment endpoint
app.use("/api/comments", limiter);



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
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
    elementUrl: String,
    weapon: String,
    splash_art: String,
    character_representation: String,
    hp: String,
    attack: String,
    defence: String,
    elemental_mastery: String,
    voice: String,
    birthday: String,
    constellation_name: String,
    description: String,
    constellation: [
        {
            level: String,
            name: String,
            description: String,
        },
    ],
    talents: [
        {
            category: String,
            name: String,
            description: String,
        },
    ],
    comments: [
        {
            _id: { type: String, default: uuidv4 },
            user: String,
            text: String,
            dateTime: String,
            ipAddress: String,
        },
    ],
});

const Data = mongoose.model("Characters", dataSchema, "Characters");

// Define your API routes
app.get("/api/data", async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
        console.log(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post("/api/comments", async (req, res) => {
    try {
        const { char_id, user, text, dateTime, ipAddress } = req.body;
        

        const newComment = {
            user,
            text,
            dateTime,
            ipAddress,
        };
        console.log(char_id);
        console.log(user);
        console.log(dateTime);
        console.log(ipAddress);
        console.log("text sent to server: ", text);
        const character = await Data.findOne({ _id: char_id });

        if (!character) {
            return res.status(404).json({ message: "Character not found" });
        }

        character.comments.push(newComment);

        await character.save();
        res.status(201).json(character);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.delete('/api/deletecomment/:commentId/:commentIpAddress', async (req, res) => {
  try {
    const { commentId, commentIpAddress } = req.params;

    // Use findOneAndUpdate to remove the comment from the array
    const result = await Data.findOneAndUpdate(
      { 'comments._id': commentId, 'comments.ipAddress': commentIpAddress },
      { $pull: { 'comments': { _id: commentId } } },
      { new: true } // To get the updated document after the comment is removed
    );

    if (!result) {
      return res.status(404).json({ error: 'Comment not found or unauthorized'});
    }

    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error'});
  }
});

app.get("/api/getcomments/:_id", async (req, res) => {
    try {
        const char_name = req.params._id;

        const character = await Data.findOne({ _id: char_name });
        if (!character) {
            return res.status(404).json({ message: "Character not found" });
        }

        const comments = character.comments;
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
