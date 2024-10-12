const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plateSchema = new Schema({
    countryCode: String,
    countryName: String,
    cityCode: String,
    cityName: String,
    licensePlate: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('Plate', plateSchema);
