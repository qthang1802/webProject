const roomService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');


exports.link_to = (req, res) => {
  res.render('rooms/' + req.params.slug);
}
exports.getHomePage = (req, res) => {
  res.render('rooms/home-page');
}




exports.lists = async (req, res) =>{
  const {RoomName: nameFilter} = req.query;
  const {Category} = req.query;
  const {sortPrice} = req.query;

  let rooms = [];

  if(nameFilter){
    rooms = await roomService.search(nameFilter)
  }
  else if (Category){
    rooms= await roomService.filterByCategory(Category)
  }
  else{
  
  rooms = await roomService.getAll();
  
  }
  const {sort, ...withoutSort} = req.query;
  res.render('rooms/shop',{rooms, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}`});
  };

  function get_Category(list, id) {
    let arr = [];
    let i = 0;
    for (; i < list.length; i++) {
      if (list[i]['RoomID'] == id)
        break;
    }
    for (let j = 0; j<list.length;j++) {
      if (j!=i && list[i]['Category'] ==list[j]['Category'] ){
        arr.push(list[j]);
      }
    }
    return arr;
  }
  exports.details = async (req, res, next) => {
    const { RoomID } = req.params;
    let rooms = [];
    let arr = [];
    const room = await roomService.get(RoomID);
    rooms = await roomService.getAll();
    arr = get_Category(rooms,RoomID);
    console.log(arr);
    if (!room) return next(createError(404));
    res.render('rooms/shop-details', {room,arr});
  };