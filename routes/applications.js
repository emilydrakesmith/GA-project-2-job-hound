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
router.get('/', applicationsCtrl.index);
router.get('/new', applicationsCtrl.new);
router.get('/:id', applicationsCtrl.show);
router.get('/:id/update', applicationsCtrl.updateForm);
router.get('/:id/new-follow-up', applicationsCtrl.newFollow);

/* POST Requests */
router.post('/', applicationsCtrl.create);

/* PUT Requests */
router.put('/:id', applicationsCtrl.update);

/* DELETE Requests */
router.delete('/:id', applicationsCtrl.delete);

module.exports = router;