const Image = require('../models/image');
const viewPath = 'images';

exports.index = async (req, res) => {
  const images = await Image.find();

  res.render(`${viewPath}/index`, {
    pageTitle: 'Images',
    images
  });
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Image'
  });
};

exports.create = async (req, res) => {
  const encoded = req.file.buffer.toString('base64');

  await Image.create({
    fileName: req.file.originalname,
    data: encoded,
    mimeType: req.file.mimetype
  });

  res.redirect('/images');
};