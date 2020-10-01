const express = require('express');
const { get } = require('mongoose');
const router = express.router();
const Review = require('../models/review');

router.get('/all/:gameid', (req, res) => {
    Review.find({gameId: req.params.gameId}, (error, reviews) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(reviews);
        }
    })
})


module.exports = router;