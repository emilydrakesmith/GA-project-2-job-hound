const { follow } = require('express');
const Application = require('../models/application');
const Follow = require('../models/follow');

function getIndex(req, res) {
    Follow.find({follow_addedBy: req.user._id})
        .then(follows => {
            res.render('follows/index', {
                title: 'All Follow-Ups',
                user: req.user ? req.user : null,
                follows
            })
        })
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
    follow.save(err => err ? res.redirect('`/applications')
                           : res.redirect('/applications'));
}



module.exports = {
    index: getIndex,
    show: showFollow,
    create: createNewFollow,
}