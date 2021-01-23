const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    contactType: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = contact = mongoose.model('Contact', Contact);