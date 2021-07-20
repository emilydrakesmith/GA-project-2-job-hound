/******* START: IMPORT STATEMENTS *******/
const Application = require('../models/application');   // import the Application data model
const Follow = require('../models/follow');             // import the Follow data model
/******* END: IMPORT STATEMENTS *******/

function getIndex(req, res) {
    Application.find({appl_addedBy: req.user._id})
        .then(applications => res.render('applications/index', {
            title: 'Applications',
            user: req.user ? req.user : null,
            applications
        }))
}

function newAppForm(req, res) {
    res.render('applications/new', { title: "Log New Application", user: req.user ? req.user : null });
}

function showApplication(req, res) {
    Application.findById(req.params.id)
        .populate('appl_follows')
        .then(application => res.render('applications/show', {
            title: 'Application Detail',
            application,
            user: req.user ? req.user : null
        }));
}

function updateForm(req, res){
    Application.findById(req.params.id)
        .then(application => res.render('applications/update', {
            title: 'Application Detail',
            application,
            user: req.user ? req.user : null
        }))
}

function newFollowForm(req, res) {
    res.render('applications/new-follow', {
        title: "Create New Application",
        user: req.user ? req.user : null,
        jobApplicationId: req.params.id
    });
}

function createNewApp(req, res) {
    req.body.appl_addedBy = req.user.id;
    const application = new Application(req.body);
    application.save(err => err ? res.redirect('/applications/new')
                                : res.redirect('/applications')
    );
}

function updateApp(req, res) {
    Application.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(res.redirect(`/applications/${req.params.id}`));
}

function deleteApp(req, res) {
    Application.findByIdAndDelete(req.params.id)
        //.then(result => result.appl_follows.forEach(obj => Follow.findByIdAndDelete(obj._id)))
        .then(() => res.redirect(`/applications`));
}

/******* END: CONTROLLER FUNCTIONS *******/

module.exports = {
    index: getIndex,
    new: newAppForm,
    show: showApplication,
    updateForm,
    newFollow: newFollowForm,
    create: createNewApp,
    update: updateApp,
    delete: deleteApp
}