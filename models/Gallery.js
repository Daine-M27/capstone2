const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    imagetitle: {type: String, required: true},
    filename: {type:String, required: true},
    description: String,
    created: {type: Date, default: Date.now}
});



const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;

