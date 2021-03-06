const express = require('express');
const commentController = require('../controllers/api/comments');
const notificationsController = require('../controllers/api/notifications');
const isAuthApi = require('../middlewares/isAuthApi');
const commentValidators = require('../validators/comment');
const router = express.Router();

router.post('/api/reply', isAuthApi, commentValidators, commentController.postReply);
router.get('/api/gigs/:gigId/comments/:commentId', isAuthApi, commentController.getGigComment);

router.put('/api/gigs/:gigId/comments/:commentId', isAuthApi, commentController.putGigComment);

router.get('/api/notifications', isAuthApi, notificationsController.getNotifications);

module.exports = router;
