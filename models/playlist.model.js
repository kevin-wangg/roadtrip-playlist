const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: { type: String, required: true},
    artist: { type: String, required: true},
    location: {type: String, required: true},
    preview: { type: String, required: true}
}, {
    timestamps: true
});

const playlistSchema = new Schema({
    playlistName: { type: String, required: true },
    startCity: { type: String, required: true },
    destination: { type: String, required: true},
    songs: [songSchema]
}, {
    timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;