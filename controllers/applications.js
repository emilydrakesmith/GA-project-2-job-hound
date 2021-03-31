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


function getIndex(req, res) {
    Application.find({})
        .then(applications => res.render('applications/index', {
            title: 'Applications',
            user: req.user ? req.user : null,
            applications
        }))
}

function newAppForm(req, res) {
    res.render('applications/new', { title: "Create New Application", user: req.user ? req.user : null });
    //console.log(req.user);
}

/** SHOW Function Construction
 *      
 *      Call .findByID() on the database being referenced
 *      
 *          1st arg: id specified in the GET request router (ie: /applications/:id) 
 *          2nd arg: callback with two arguments
 *                  1st arg: error (if an error is returned)
 *                  2nd arg: document from database where document ID === req.params.id
 * 
 *       Then call res.render() inside callback with two args
 *          
 *          1st arg: specify the view to use
 *          2nd arg: data to be passed to view
 */

function showApplication(req, res) {
    Application.findById(req.params.id, (err, application) => {
        console.log(`req.params.id: ${req.params.id}`)
        res.render('applications/show', {title: 'Application Detail', application, user: req.user ? req.user : null});
    })
    //res.render('applications/')
}

function createNewApp(req, res) {
    //console.log(req.body);
    //console.log(`req.user on form input: ${typeof req.user.id}`)
    req.body.addedBy = req.user.id;
    console.log(req.body);
    const application = new Application(req.body);
    application.save(function(err) {
        if (err) return res.render('applications/new');
        //console.log(application);
        res.redirect('/applications');
    });
}
/******* END: CONTROLLER FUNCTIONS *******/

module.exports = {
    index: getIndex,
    new: newAppForm,
    show: showApplication,
    create: createNewApp
}