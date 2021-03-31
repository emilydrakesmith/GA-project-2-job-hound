const { application } = require('express');
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
    Application.find({addedBy: req.user._id})
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
 *      1. Call .findByID() on the database being referenced
 *            Single arg: id specified in the GET request router (ie: /applications/:id)
 *      2. Use .then() to make a callback function with the document returned by step 1
 *              1st arg: filepath to view inside 'views' directory
 *              2nd arg: data to feed into the specified view 
 */

function showApplication(req, res) {
    Application.findById(req.params.id)
        .then(application => res.render('applications/show', {
            title: 'Application Detail',
            application,
            user: req.user ? req.user : null
        }));
}

function updateForm(req, res){
    Application.findById(req.params.id)
        .then(console.log('hi there'))
        .then(application => res.render('applications/update', {
            title: 'Application Detail',
            application,
            user: req.user ? req.user : null
        }))
}

function createNewApp(req, res) {                                     // FUNCTION TO CREATE A NEW ENTRY IN 'APPLICATIONS' DATABASE
    req.body.addedBy = req.user.id;                                   // add user.id value to document to link document to a user
    const application = new Application(req.body);                    // create a new document with 'Application' schema, hold in variable 'application'
    application.save(err => err ? res.render('applications/new')      // save document to database; if error is returned, re-render app create form
                                : res.redirect('/applications')       // if no error redirect to the 'applications' route
    );
}

function updateApp(req, res) {
    const application = new Application(req.body);
    Application.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => res.redirect(`/applications/${req.params.id}`));
}

function deleteApp(req, res) {
    Application.findByIdAndDelete(req.params.id)
        .then(() => res.redirect(`/applications`));
}
/******* END: CONTROLLER FUNCTIONS *******/

module.exports = {
    index: getIndex,
    new: newAppForm,
    show: showApplication,
    updateForm,
    create: createNewApp,
    update: updateApp,
    delete: deleteApp
}