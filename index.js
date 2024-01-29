const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to MongoDB
const dbURI = 'mongodb+srv://arthurjuma:feXt3OOLiWRMuKgq@cluster0.ysltvni.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then((result) => app.listen(process.env.port || 4000))
    .catch((err) => console.log(err));

//listen to port
// app.listen(process.env.port || 4000, () => {
//     console.log('waiting for request');
// });

//middlewear

app.use(express.static('public'));

//initialize body-parser
app.use(bodyParser.json());

//initialize routes

app.use('/api', routes);

// or app.use('/api', require('./routes/api'))

