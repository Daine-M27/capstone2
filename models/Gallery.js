const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    imagetitle: {type: String, required: true},
    filename: {type:String, required: true},
    description: String,
    created: {type: Date, default: Date.now}
});

gallerySchema.methods.apiRepr = function() {

    return {
        id: this._id,
        imagetitle: this.imagetitle,
        description: this.description,
        filename: this.filename,
        created: this.created
    };
}

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;

