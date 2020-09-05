const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: { type: String, required: true},
    artist: { type: String, required: true},
    spotify_id: {type: String, required: true},
    preview_url: {type: String, required: true},
}, {
    timestamps: true
});

module.export = songSchema;

