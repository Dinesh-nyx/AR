// unitSchema.js
const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    unitName: { type: String, required: true },
    videos: [
        {
            title: { type: String, required: true },
            youtubeLink: { type: String, required: true },
            notesLink: { type: String, required: true },
        },
    ],
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
