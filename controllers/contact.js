const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContact = (req, res) => {
  console.log(req.body);
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('message', 'Message cannot be blank').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/#contact');
  }

  const mailOptions = {
    to: 'dainemarshall@gmail.com',
    from: req.body.name + req.body.email,
    subject: 'Contact Form | The Indigo Pearl',
    text: req.body.name + ' ' + req.body.email + ' ' + req.body.message
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      req.flash('errors', { msg: err.message });
      return res.redirect('/#contact');
    }
    req.flash('success', { msg: 'Email has been sent successfully!' });
    res.redirect('/#contact');
  });
};
