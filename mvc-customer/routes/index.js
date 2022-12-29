const express = require('express');
const router = express.Router();


const roomController = require('../components/rooms/mainPageController');




router.get('/', roomController.lists);
module.exports = router;