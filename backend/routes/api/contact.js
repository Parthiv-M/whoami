const express = require('express');
const router = express.Router();
const Contact  =  require('./../../models/contact');

router.get('/contact', async(req, res) => {
    try {
        Contact.find({}).then((contact) => {
            res.send(contact);
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