const express = require('express');
// pulls in express JS - rquire acts  like import/form
const chirpStore = require('../chirpstore');
// adds `GET`, `POST`, `PUT`, `DELETE` methods on a router that is created in `chirps.js`.

let router = express.Router();

router.get("/",(req,res)=>{
    res.send('chirp res');
});

router.post('/',(req,res)=>{
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

module.exports = router;
