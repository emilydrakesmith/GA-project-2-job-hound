const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    appl_addedBy: {type: String, required: true},
    appl_company: {type: String, required: true},
    appl_jobTitle: {type: String, required: true},
    appl_jobId: String,
    appl_follows: Array
},{
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);