const Post = require('../models/post');

module.exports = {
	async postIndex(req, res, next) {
		let posts = await Post.find({});
		res.render('posts/index', {
			posts: posts
		});
	},

	postNew(req, res, next) {
		res.render('posts/new');
	},

	//Posts Create
	async postCreate(req, res, next) {
		let post = await Post.create(req.body);
		res.redirect(`/posts/${post.id}`);
	},

	//Posts show

	async postShow(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/show', { post });
	},

	// Post edit

	async postEdit(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/edit', { post });
	},

	// Post update

	async postUpdate(req, res, next) {
		let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
		res.redirect(`/posts/${post.id}`);
	},

	/* Delete Post */

	async postDestroy(req, res, next) {
		await Post.findByIdAndRemove(req.params.id);
		res.redirect('/posts');
	}
};
