const Plates = require("../models/plates");
const getAllPlates = async () => {
  const plates = await Plates.find();
  return plates;
};
const getByIdPlates = async (id) => {
  const plates = await Plates.findById(id);
  return plates;
};

const createPlates = async (body) => {

    const yeniPlates= await Plates.create(body);
    return yeniPlates;
}
module.exports = {
    getAllPlates,
    getByIdPlates,
    createPlates
};
