const express = require('express');
const router = express.Router();
const WhatIDo  =  require('./../../models/whatido');

router.get('/posts', async(req, res) => {
    try {
        WhatIDo.find({}).then((post) => {
            res.send({post});
        },
        ).catch((e) => {
            res.send({error: 'Unable to fetch posts'});
        });
    } catch (error) {
        console.log(error);
        res.send({error: 'Server error'});
    }
});

module.exports = router;