const { follow } = require('express');
const Follow = require('../models/follow');

function getIndex(req, res) {
    Follow.find({})
        .then(follows => res.render('follows/index', {
            title: 'All Follow-Ups',
            user: req.user ? req.user : null,
            follows
        }))
}

function createNewFollow(req, res) {
    console.log('create new follow triggered')
    console.log(`req.params.id: ${req.user.id}`)
    req.body.follow_addedBy = req.user.id;
    const follow = new Follow(req.body);
    follow.save(err => err ? res.redirect('`/applications')
                           : res.redirect('/applications'));
}

module.exports = {
    index: getIndex,
    create: createNewFollow,
}