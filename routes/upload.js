const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");



router.route("/").post(upload.array('gorunmedı',5),async (req, res, next) => {
    
    res.json(true)
});

module.exports = router;