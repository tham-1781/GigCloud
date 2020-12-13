const express = require('express');
const gigsController = require('../controllers/gigs');
const homeController = require('../controllers/home');
const commentController = require('../controllers/comments');
const userGigsController = require('../controllers/users/gigs');
const gigValidators = require('../validators/gig');
const commentValidators = require('../validators/comment');
const isAuth = require('../middlewares/isAuth');
const router = express.Router();

router.get('/', homeController.getUpcommingGigs);
router.get('/add-a-gig', isAuth, gigsController.getAddGig);
router.post('/add-a-gig', isAuth, gigValidators, gigsController.postAddGig);
router.post('/going-a-gig', isAuth, homeController.postGoingGig);
router.post('/follow-gig', isAuth, homeController.postFollowGig);
router.get('/gigs/:slug', gigsController.getGigDetail);
router.post('/add-comment', isAuth, commentValidators, commentController.postAddComment);

router.get('/my-gigs', isAuth, userGigsController.getMyGigs);
router.get('/my-gigs/:slug/edit', isAuth, userGigsController.getEditGig);
router.post('/my-gigs/edit', isAuth, userGigsController.postEditGig);

module.exports = router;
