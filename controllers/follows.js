const Application = require('../models/application');
const Follow = require('../models/follow');

function getIndex(req, res) {
    Follow.find({follow_addedBy: req.user._id})
        .then(follows => res.render('follows/index', {
                title: 'All Follow-Ups',
                user: req.user ? req.user : null,
                follows
            }))
}

function showFollow(req, res) {
    Follow.findById(req.params.id)
    .then(follow => res.render('follows/show', {
        title: 'Application Detail',
        user: req.user ? req.user : null,
        follow
    }));
}

function createNewFollow(req, res) {
    req.body.follow_addedBy = req.user.id;
    const follow = new Follow(req.body);
    follow.save((err, result) => {
        if (err) console.log(`error: ${error}`);
        if (result) addFollowReferenceToAppl(req, res, result);
    });
}

function addFollowReferenceToAppl(req, res, banana) {
    Application.findById(req.body.follow_assoc_appl)
        .then(appl => {
            appl.appl_follows.push( { _id: banana._id, ref: 'Follow' } );
            appl.save()
            .then(res.redirect(`/applications/${appl._id}`));
        })   
}

function updateFollowForm(req, res) {
    Follow.findById(req.params.id)
        .then(follow => res.render('follows/update', {
            title: 'Follow Edit',
            follow,
            user: req.user ? req.user : null
        }))
}

function updateFollowData(req, res) {
    Follow.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => res.redirect(`/follows/${req.params.id}`));
}


module.exports = {
    index: getIndex,
    show: showFollow,
    create: createNewFollow,
    updateForm: updateFollowForm,
    updateData: updateFollowData
}