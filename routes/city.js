const express = require("express");
const router = express.Router();
const {fetchAllCity} = require("../controllers/city");
const City = require("../models/city");

router.route('/').get(fetchAllCity);

router.route('/').post(async (req, res, next) => {
    const { plate_no, city_name, plate_code } = req.body;
  
    const city = await City.create({
        plate_no:  plate_no,
        city_name,
        plate_code,
    });
    return res.status(201).json(city);
  })



  router.route('/:id').get(
    async (req, res, next) => {
        const { id } = req.params;
        const city = await City.findById(id);
        return res.status(200).json(city);
      }
  )


  router.route('/:id').put( async (req, res, next) => {
    const { id } = req.params;
    const {plate_no,city_name,plate_code} = req.body
  
    const city = await City.findByIdAndUpdate(id,{
      plate_no : plate_no,
      city_name,
      plate_code,
    },{new:true});
    return res.status(200).json(city);
  })

  router.route('/:id').delete(async (req, res, next) => {
    const { id } = req.params;
  
    const city= await City.findByIdAndDelete(id);
    return res.status(200).json(city);
  })

  module.exports = router;