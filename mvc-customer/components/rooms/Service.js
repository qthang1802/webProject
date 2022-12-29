const { connection } = require('../../db');
const roomRepository = require('./roomRepository');


exports.getAll = () => { 
    return roomRepository.getAll();
}

exports.get = (id) => roomRepository.get(id);

exports.search =(RoomName)=>{
    return roomRepository.search(RoomName);
}


exports.filterByCategory = (category) =>{
    return roomRepository.filterByCategory(category);
}

exports.sortByPriceAsc =()=>{
    return roomRepository.sortByPriceAsc();
}

exports.sortByPriceDesc =()=>{
    return roomRepository.sortByPriceDesc();
}