const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    addedBy: {type: String, required: true},
    company: {type: String, required: true},
    jobTitle: {type: String, required: true},
    jobId: String,
    appl_follows: []
},{
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);