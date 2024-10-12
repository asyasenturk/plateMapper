const {getAllCity,getByIdCity} = require("../services/city");
const fetchAllCity = async (req,res,next) => {
    const cities= await getAllCity();
    return res.status(200).json(cities);
}

module.exports={
    fetchAllCity
}
