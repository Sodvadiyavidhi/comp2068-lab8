const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // This must exist
  },
  content: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PUBLISHED'],
    default: 'DRAFT'
  }
}, {
  timestamps: true
});

// Query Helpers
BlogSchema.query.drafts = function () {
  return this.where({
    status: 'DRAFT'
  })
};

BlogSchema.query.published = function () {
  return this.where({
    status: 'PUBLISHED'
  })
};

BlogSchema.virtual('synopsis')
.get(function () {
  const post = this.content;
  return post
    .replace(/(<([^>]+)>)/ig,"")
    .substring(0, 250);
});

module.exports = mongoose.model('Blog', BlogSchema);



<!-- <form action="/superheroes", method="POST">
      <div class="form-group">
        <label for="name">Superhero Name</label>
        <input type="text" name="name" class="form-control">
      </div>

      <div class="form-group">
        <label for="power">Powers</label>
        <input type="text" name="power" class="form-control"></textarea>
      </div>

      <div class="form-group">
        <label for="year">Release Year</label>
        <input type="number" name="year" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="actor">Actor</label>
        <input type="text" name="Actor" class="form-control">
      </div>

      <div class="form-group">
        <button class="btn btn-dark">Submit</button>
      </div>
    </form> -->