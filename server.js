require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');

// Database
const MONGO_URI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on("open", () => {
    console.log('connected to mongo')
})

// Middleware
app.use(cors());
app.use(express.json());

// Controllers
app.use('/games', require('./controllers/games'));

app.use('/reviews', require('./controllers/reviews'));

// Listener
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})