const { imgSrc } = require('./data');

exports.getAll = () => {
  return imgSrc;
};

exports.getByPage = (page) => {
  return imgSrc.find((img_src) => img_src.page === page);
};
