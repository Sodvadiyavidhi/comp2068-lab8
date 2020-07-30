const { new: _new, index, show, create, edit, update, delete: _delete } = require('../controllers/BlogsController');

module.exports = router => {
  router.get('/blogs', index);
  router.get('/blogs/new', _new);
  router.post('/blogs', create);
  router.post('/blogs/update', update);
  router.post('/blogs/delete', _delete);
  router.get('/blogs/:id/edit', edit);
  router.get('/blogs/:id', show);
};