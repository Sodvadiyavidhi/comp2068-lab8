const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Image', ImageSchema);