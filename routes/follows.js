const router = require("express").Router();
const followsCtrl = require('../controllers/follows');

/* GET Requests */
router.get('/', isLoggedIn, followsCtrl.index);
router.get('/:id', isLoggedIn, followsCtrl.show);
router.get('/:id/update', isLoggedIn, followsCtrl.updateForm);


/* POST Requests */
router.post('/', isLoggedIn, followsCtrl.create);

/* PUT Requests */
router.put('/:id', isLoggedIn, followsCtrl.updateData);

/* DELETE Requests */
router.delete('/:id', isLoggedIn, followsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;