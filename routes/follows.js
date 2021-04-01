const router = require("express").Router();
const followsCtrl = require('../controllers/follows');

/* GET Requests */
router.get(('/'), followsCtrl.index);
router.get('/:id', followsCtrl.show);

/* POST Requests */
router.post(('/'), followsCtrl.create);

module.exports = router;