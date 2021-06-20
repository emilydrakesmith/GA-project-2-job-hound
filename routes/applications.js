/******* START: IMPORT STATEMENTS *******/
const router = require("express").Router();                         // import router functionality from express
const applicationsCtrl = require('../controllers/applications');    // import controller functions to attach to URL routes
/******* END: IMPORT STATEMENTS *******/

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

/******* START: GET REQUESTS *******/
router.get('/', isLoggedIn, applicationsCtrl.index);
router.get('/new', isLoggedIn, applicationsCtrl.new);
router.get('/:id', isLoggedIn, applicationsCtrl.show);
router.get('/:id/update', isLoggedIn, applicationsCtrl.updateForm);
router.get('/:id/new-follow-up', isLoggedIn, applicationsCtrl.newFollow);
/******* END: GET REQUESTS *******/


/******* START: POST REQUESTS *******/
router.post('/', isLoggedIn, applicationsCtrl.create);
/******* END: POST REQUESTS *******/


/******* START: PUT REQUESTS *******/
router.put('/:id', isLoggedIn, applicationsCtrl.update);
/******* END: PUT REQUESTS *******/


/******* START: DELETE REQUESTS *******/
router.delete('/:id', isLoggedIn, applicationsCtrl.delete);
/******* EMD: DELETE REQUESTS *******/


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;