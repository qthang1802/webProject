const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('SELECT * FROM roomdetail;');
  return result[0];
}


// search 
exports.search = async(RoomName) => {
  const result = await db.connection.execute("select * from roomdetail where RoomName like ?", [`%${RoomName}%`]);
  return result[0];
}

//filter by category 
exports.filterByCategory = async(Category) => {
  const result = await db.connection.execute("select * from roomdetail where Category like ?",[Category]);
  return result[0];
}


//sort 
exports.sortByPriceAsc = async() => {
  const result = await db.connection.execute("select * from roomdetail order by Price asc");
  return result[0];
}


exports.sortByPriceDesc = async() => {
  const result = await db.connection.execute("select * from roomdetail order by Price desc");
  return result[0];

}

exports.get = async (id) => {
  const result =  await db.connection.execute("SELECT * FROM roomdetail where RoomID = ?", [id]);
  return result[0][0];
}










