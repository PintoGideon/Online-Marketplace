const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
	postIndex,
	postNew,
	postCreate,
	postShow,
	postEdit,
	postUpdate,
	postDestroy
} = require('../controllers/posts');
/* GET posts 
/posts*/

router.get('/', asyncErrorHandler(postIndex));

/* Get posts /posts/new
 */

router.get('/new', postNew);

/* Post posts /posts/create
 */
router.post('/', asyncErrorHandler(postCreate));

/* Get posts /posts/:id
 */

router.get('/:id', asyncErrorHandler(postShow));

/* Get posts edit /posts/:id/edit */

router.get('/:id/edit', asyncErrorHandler(postEdit));

/* Put posts update /posts/:id */

router.put('/:id', asyncErrorHandler(postUpdate));

/* Delete posts destroy /posts/:id */

router.delete('/:id', asyncErrorHandler(postDestroy));

module.exports = router;
