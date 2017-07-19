const Gallery = require('../models/Gallery');

/**
 * GET /
 * Gallery Page.
 */

exports.getGallery = (req, res) => {
    Gallery
        .find().exec().then((galleries) => {
        res.render('gallery', {
            images: galleries
        });
        console.log(galleries);
    })
        .catch(
            (err) => {
                console.error(err);
                // res.status(500).json({error: 'No data available'});
            });
};

// exports.getGalleryID = (req, res) => {
//     res.render('gallery', {
//         title: 'Gallery'
//     });
// };
//
// exports.uploadGallery = (req, res, next) => {
//     res.render('galleryUpload', {
//         title: 'Gallery Upload'
//     });
// };
//
// exports.postGallery = (req, res) => {
//     res.render('gallery', {
//         title: 'Gallery'
//     });
// };
//
// exports.editGallery = (req, res) => {
//     res.render('gallery', {
//         title: 'Gallery'
//     });
// };
//
// exports.deleteGallery = (req, res) => {
//     res.render('gallery', {
//         title: 'Gallery'
//     });
// };


/**
 * Created by dainemarshall on 7/12/17.
 */
