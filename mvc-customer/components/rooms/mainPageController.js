const roomService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');





exports.lists = async (req, res) =>{
  let rooms = [];
  rooms = await roomService.getAll();
  const {sort, ...withoutSort} = req.query;
  res.render('rooms/shop',{rooms, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}`});
  }


