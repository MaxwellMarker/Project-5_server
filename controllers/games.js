const express = require('express');
const router = express.Router()
const Game = require('../models/game');

// Get all games
router.get('/', (req, res) => {
    Game.find({}, (error, games) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(games);
        }
    })
})

// Get one game
router.get('/:id', (req, res) => {
    Game.findById(req.params.id, (error, game) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(game);
        }
    })
})

// Update rating
router.put('/:id', (req, res) => {
    console.log(req.body)
    Game.findByIdAndUpdate(req.params.id, {rating: req.body.rating}, (error, game) => {
        if(error){
            console.log(error)
        }else{
            console.log(game);
        }
    })
})
// Make a game
router.post('/', (req, res) => {
    console.log(req.body);
    Game.create(req.body, (error, game) => {
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(game);
        }
    })
})
module.exports = router;