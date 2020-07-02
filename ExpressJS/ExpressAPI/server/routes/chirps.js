const chirpStore = require('../chirpstore')
const express = require('express');

let chirpRouter = express.Router();

chirpRouter.get('/:id?', (req,res)=>{
    let id = req.params.id;
    if(id){
        res.json(chirpStore.GetChirp(id));
    }
    else{
        res.send(chirpStore.GetChirps());
    }
});

chirpRouter.post('/', (req,res)=>{
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

chirpRouter.put('/:id', (req,res)=>{
    chirpStore.UpdateChirp(req.params.id, req.body);
    res.sendStatus(200);
});

chirpRouter.delete('/:id', (req,res)=>{
    chirpStore.DeleteChirp(req.params.id);
    res.sendStatus(200);
});

module.exports = chirpRouter;

