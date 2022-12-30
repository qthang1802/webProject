const express = require('express');
const router = express.Router();


const roomController = require('../components/rooms/mainPageController');


router.get('/',roomController.getHomePage);

router.get('/shop', roomController.lists);
router.get('/:RoomID', roomController.details);

router.get('/:slug', roomController.link_to);

module.exports = router;