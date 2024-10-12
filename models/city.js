const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  plate_no: { type: String },
  city_name: { type: String },
  plate_code: { type: Number },
});

const City = mongoose.model("City", CitySchema);


module.exports=City;