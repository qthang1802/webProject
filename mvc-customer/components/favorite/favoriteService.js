const roomService = require('../rooms/Service');

exports.add = (roomId, cart) => {
  const foundRoom = cart.rooms.find(room => room.id === roomId);
  if (foundRoom)
    foundRoom.quantity = foundRoom.quantity + 1;
  else {
    cart.rooms.push({ id: roomId, quantity: 1 });
  }
};

exports.cartDetails = async (cart) => {
  const cartDetails = { ...cart };
  cartDetails.rooms = await Promise.all(cartDetails.rooms.map(async room => {
    const roomInfo = await roomService.get(room.id);
    return {
      ...room, name: roomInfo.RoomName, price: roomInfo.Price, img: roomInfo.ImageMain2
    };
  }));
  return cartDetails;
};

exports.initCart = () => ({
  rooms: [],
});

