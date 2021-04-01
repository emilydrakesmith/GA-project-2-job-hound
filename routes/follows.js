const router = require("express").Router();
const followsCtrl = require('../controllers/follows');

/* GET Requests */
router.get(('/'), followsCtrl.index);

module.exports = router;