const cartService = require('../favoriteService');

exports.add = (req, res) => {
  const { roomId } = req.body;
  // validate valid productId
  // ...


  if (!req.session.cart)
    req.session.cart = cartService.initCart();
  cartService.add(roomId, req.session.cart);
  res.redirect('/home-page/shop');
};

exports.cartDetail = async (req, res) => {
    let list_rooms = await cartService.cartDetails(req.session.cart);
    let Price = 0;
    if (list_rooms.rooms) {
      for (let i = 0; i < list_rooms.rooms.length; i++) {
        Price += list_rooms.rooms[i].price;
      }
    }
    console.log(list_rooms);
    res.render('rooms/shopping-cart', { list_rooms, Price });
}


// Controller API favorites 
exports.manage_button = async (req, res) => {
    const { close } = req.body;
    if (close) {
  
      for (let i = 0; i < req.session.cart.rooms.length; i++) {
  
        if (req.session.cart.rooms[i].id === close) {
  
          req.session.cart.rooms.splice(i, 1);
          break;
        }
      }
    }
    res.redirect('/home-page/shop/shopping-cart');
  }