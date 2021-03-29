const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    company: String,
    jobTitle: String,
    jobId: String,
    jobListingUrl: String,
    applicationSubmitted: Boolean,
    applicationPostDate: String,
    ApplicationSubmitDate: String
},{
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);