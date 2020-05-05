const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/build')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose database connection established sucessfully!');
})

// Testing
let Playlist = require('./models/playlist.model');
app.get('/', (req, res) => { 
    const playlistName = 'Summer';
    const startCity = 'Toronto';
    const destination = 'Orlando';
    const songs = [{title: 'hello', artist: 'adele', location: 'london', preview: 'hello.mp3'}]
    const newPlaylist = new Playlist({playlistName, startCity, destination, songs});
    newPlaylist.save()
        .then(() => res.json('Playlist added!'))
        .catch(err => res.status.bind(400).json('Error' + err));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
