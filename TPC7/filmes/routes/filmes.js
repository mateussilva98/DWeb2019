var express = require('express');

const {
  getMovies,
  getMovie,
  getAdd,
  createMovie,
  updateMovie,
  getUpdate,
  deleteMovie
} = require('../controllers/filmes');

const router = express.Router();

router
  .route('/')
  .get(getMovies)
  .post(createMovie);

router
  .route('/:id')
  .get(getMovie)
  .put(updateMovie)
  .delete(deleteMovie);

router.route('/update').get(getUpdate);

router.route('/add').get(getAdd);

module.exports = router;
