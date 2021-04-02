const router = require("express").Router();
const applicationsCtrl = require('../controllers/applications');

/**     Router for directory '/applications'
*       All routes will assume to already have /applications
*       Eg:  route specified as '/bananas' will be processed as '/applications/bananas'
*/

/**     Function Structure Guide
 * 
 *          eg: router.get('/', todosCtrl.getIndex);
 * 
 *          router                          built-in feature of express, imported above
 *          .get                            HTTP method specified in the request
 *          '/'                             first arg, specifies filepath inside /applications
 *.         applicationsCtrl.Index          second arg, function to execute on the filepath
 */

/**     URL Routing Guide
 *          
 *          Route Used      Actual Route               Purpose
 *          /               /applications/             index
 *          /new            /applications/new          create a new todo
 *          /:id            /applications/:id          retrieve a particular applications by id
 */

/* GET Requests */
router.get('/', isLoggedIn, applicationsCtrl.index);
router.get('/new', isLoggedIn, applicationsCtrl.new);
router.get('/:id', isLoggedIn, applicationsCtrl.show);
router.get('/:id/update', isLoggedIn, applicationsCtrl.updateForm);
router.get('/:id/new-follow-up', isLoggedIn, applicationsCtrl.newFollow);

/* POST Requests */
router.post('/', isLoggedIn, applicationsCtrl.create);

/* PUT Requests */
router.put('/:id', isLoggedIn, applicationsCtrl.update);

/* DELETE Requests */
router.delete('/:id', isLoggedIn, applicationsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;