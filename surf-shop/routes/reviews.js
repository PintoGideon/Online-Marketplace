const express = require('express');
const router = express.Router({
	mergeParams: true
});

/* GET reviews 
/posts/:id/reviews*/
router.get('/', function(req, res, next) {
	res.send('INDEX /posts/:id/reviews');
});

/* review reviews create/posts/:id/reviews/
 */
router.post('/', function(req, res, next) {
	res.send('CREATE posts/:id/reviews');
});

/* Get reviews edit /reviews/:review_review_id/edit */

router.get('/:review_id/edit', function(req, res, next) {
	res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* Put reviews update /reviews/:review_id */

router.put('/:review_id', function(req, res, next) {
	res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* Delete reviews destroy /reviews/:review_id */

router.delete('/:review_id', function(req, res, next) {
	res.send('DELETE posts/:id/reviews/:review_id');
});

module.exports = router;
