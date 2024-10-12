const mongoose = require("mongoose");

// Model (table) ve Columns

const PlatesSchema = new mongoose.Schema({
  plate_no: { type: String },
  entry_timestamp:{ type: Date,default:Date.now() 
  },
  highway_no:{ type: Number },
  city: {type:String},
  total_fee: {type:Number},

},


);
const Plates = mongoose.model("Plates", PlatesSchema);


module.exports=Plates;


