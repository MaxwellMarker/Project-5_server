const express = require('express');
const router = express.Router();
const Request = require('../models/request');

router.get('/', (req, res) => {
    Request.find({}, (error, requests) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(requests);
        }
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    Request.create(req.body, (error, request) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(request);
        }
    })
})

module.exports = router;