const { getAllPlates, getByIdPlates, createPlates } = require("../services/plates");

const fetchAllPlates = async (req, res, next) => {
  try {
    const plates = await getAllPlates();
    res.status(200).json(plates);
  } catch (error) {
    next(error); // Handle errors properly
  }
};

const fetchByIdPlates = async (req, res, next) => {
  try {
    const id = req.params.plate_no;
    const plates = await getByIdPlates(id);
    res.status(200).json(plates);
  } catch (error) {
    next(error); // Handle errors properly
  }
};

const insertPlates = async (req, res, next) => {
  try {
    const body = req.body;
    const yeniPlates = await createPlates(body);
    res.status(201).json(yeniPlates); // 201 is the proper status for resource creation
  } catch (error) {
    next(error); // Handle errors properly
  }
};

module.exports = {
  fetchAllPlates,
  fetchByIdPlates,
  insertPlates
};
