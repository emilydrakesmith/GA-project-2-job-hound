const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followSchema = new Schema({
    follow_addedBy: {type: String, required: true},
    follow_title: {type: String, required: true},
    follow_scheduled_date: {type: Date, required: true},
    follow_priority: {type: String, required: true},
    follow_detail: String,
    follow_done: {type: Boolean, default: false},
    follow_assoc_appl: {type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('Follow', followSchema);