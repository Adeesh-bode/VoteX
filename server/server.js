// todo: make 3 roles in project , by auth admin  candidate , normal voter . Now only two
// however candidate role can be skipped if we provide feature to add candidate for election by himself 
and ( if the normal voter is candidate for this election he couldn't vote
// config-server.js , schema in models , routing in routes , controller not seperated
const express = require('express'); // web framework for Node.js
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

app.listen(PORT, () => { // when deployed have to remove this port configurations
    console.log(`Server is running on port: ${PORT}`);
});
