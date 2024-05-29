const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// dotenv is a popular npm package that loads environment variables from a .env file into process.env in Nodejs applications.

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
