const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const Review = require('../models/review');

router.get('/', (req, res) => {
    Review.find({}, (error, reviews) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(reviews);
        }
    })
})

router.get('/:gameId', (req, res) => {
    Review.find({gameId: `${req.params.gameId}`}, (error, reviews) => {
        if(error){
            res.status(500).json(error)
        }else{
            reviews.sort((a, b) => {return Date.parse(b.createdAt) - Date.parse(a.createdAt)})
            res.status(200).json(reviews);
        }
    })
})

router.post('/', (req, res) => {
    Review.create(req.body, (error, review) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(review);
        }
    })
})

module.exports = router;