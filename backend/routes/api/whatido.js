const express = require('express');
const router = express.Router();
const WhatIDo  =  require('./../../models/whatido');

router.get('/posts', async(req, res) => {
    try {
        WhatIDo.find({}).then((posts) => {
            res.send(posts);
        },
        ).catch((e) => {
            res.send({error: 'Unable to fetch posts'});
        });
    } catch (error) {
        console.log(error);
        res.send({error: 'Server error'});
    }
});

// helper route to add content 
router.post('/posts', async(req, res) => {
    try {
        const whatido = new WhatIDo({
            name: req.body.name,
            domain: req.body.domain,
            link: req.body.link,
            imageUrl: req.body.imageUrl,
            description: req.body.imageUrl,
            tags: req.body.tags
        });
        whatido.save().then((doc) => {
            res.send(doc);
        })
        
    } catch (error) {
        console.log(error);
        res.send({error: 'Server error'});
    }
});

module.exports = router;