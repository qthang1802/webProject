const express = require('express');
const router = express.Router();


const roomController = require('../components/rooms/mainPageController');
const cartApiController = require('../components/favorite/api/favoriteApiController');

router.get('/',roomController.getHomePage);

router.get('/shop', roomController.lists);
router.get('/shopping-cart', cartApiController.cartDetail);
router.get('/:RoomID', roomController.details);

router.get('/:slug', roomController.link_to);



router.post('/', cartApiController.add);



module.exports = router;