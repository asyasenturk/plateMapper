const City = require("../models/city");
const getAllCity = async () => {
  const cities= await City.find();
  return cities;
};
const getByIdCity = async (id) => {
  const city = await City.findById(id);
  return city;
};
module.exports = {
  getAllCity,
  getByIdCity,
};
