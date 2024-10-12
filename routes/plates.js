const express = require("express");
const router = express.Router();
const {
  fetchAllPlates,
  fetchByIdPlates,
  insertPlates,
  updatePlates,
 removePlates, 
} = require("../controllers/plates");

 router.route('/').get(fetchAllPlates);
router.route('/:plate_no').get(fetchByIdPlates);
// router.route('/').post(validate(newPlatesValidation), insertPlates);

router.route('/:id').put(updatePlates);
router.route('/:id').delete(removePlates);

module.exports = router;
