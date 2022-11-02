const express = require('express');
const blogController = require('../controllers/blogControllers');

const router = express.Router();

// Blog Routes

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id',  blogController.blog_details);


// Request Post that creates a new blog post and then redirects to the /blogs to see all blogs

// router.get('/create', (req, res) => {
//     res.render('create', { title: 'Create a new blog' }) //, { title: 'Create a new blog' });

//   //res.render('create', { title: 'Create a new blog' });
// });

module.exports = router;