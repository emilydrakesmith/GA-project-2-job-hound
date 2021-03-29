const Application = require('../models/application');

/**   All render() functions take two arguments:
 *      1. First argument finds a view in the 'views' directory to render
 *      2. Second argument feeds data to be used by EJS in the view
 *    
 *    Important!  To see the data being passed to a view, insert
 *            <%= JSON.stringify(data); %>
 *      inside the view.  It'll render the object as text inside
 *      the rendered webpage.  Then it's easy to parse the correct
 *      data into the HTML with EJS.
 */

/******* START: CONTROLLER FUNCTIONS *******/
function getIndex(req, res) {
    res.render('applications/index', { title: "Applications", user: req.user ? req.user : null })
}

function newAppForm(req, res) {
    res.render('applications/new', { title: "Create New Application", user: req.user ? req.user : null });
    console.log(req);
}

function createNewApp(req, res) {
    console.log(req.body);
    res.redirect('/applications/new')
}
/******* START: CONTROLLER FUNCTIONS *******/

module.exports = {
    index: getIndex,
    new: newAppForm,
    create: createNewApp
}