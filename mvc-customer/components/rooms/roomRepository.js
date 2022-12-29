const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('SELECT * FROM room;');
  return result[0];
}