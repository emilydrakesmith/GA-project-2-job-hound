const router = require("express").Router();
const followsCtrl = require('../controllers/follows');

/* GET Requests */
router.get('/', followsCtrl.index);
router.get('/:id', followsCtrl.show);
router.get('/:id/update', followsCtrl.updateForm);


/* POST Requests */
router.post(('/'), followsCtrl.create);

/* PUT Requests */
router.put('/:id', followsCtrl.updateData);

/* DELETE Requests */
router.delete('/:id', followsCtrl.delete);

module.exports = router;