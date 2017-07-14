const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: {type: String, required: true},
    imagepath: {type:String, required: true},
    description: String,
    created: {type: Date, default: Date.now}
});



const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
/**
 * Created by dainemarshall on 7/13/17.
 */
