const { connection } = require('../../db');
const roomRepository = require('./roomRepository');


exports.getAll = () => { 
    return roomRepository.getAll();
}

exports.get = (id) => roomRepository.get(id);