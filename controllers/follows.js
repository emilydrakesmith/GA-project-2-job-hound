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

module.exports = {
    index: getIndex,
}