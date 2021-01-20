const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WhatIDo = new Schema({
    name: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true 
    },
    tags: {
        type: [{
            type: String
        }]
    }
});

module.exports = whatIDo = mongoose.model('WhatIDo', WhatIDo);