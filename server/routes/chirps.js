const express = require('express');
// pulls in express JS - rquire acts  like import/form
const chirpStore = require('../chirpstore');
// adds `GET`, `POST`, `PUT`, `DELETE` methods on a router that is created in `chirps.js`.

let router = express.Router();
// let id = req.params.id; REQ is not definesd this way

router.get("/:id?", (req, res) => {
    let id = req.params.id;
    if (id) {
        res.status(200).json({
            data: chirpStore.GetChirp(id),
            message: 'chirps if echo, id =' + id 
        });
    } else {
        res.status(200).json({
            data: chirpStore.GetChirps(),
            message: 'api/chirps else echo has no id' 
        });
    }
});
// Working so far
router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.status(200).json({message: 'posted a new new chirp!'})
});

router.put('/:id?', (req, res) => {
    let id = Number(req.params.id);
    // DATA VALIDATION
    if(!id || id < 1){
        res.status(400).json({ message: ' Error Id code is not acceptable'})
        return
    }

    res.status(200).json(chirpStore.UpdateChirp(id,req.body));
    // res.sendStatus(200); - ready build int
});

router.delete('/:id?',(req,res)=>{
    let id = req.params.id;
    res.status(200).json(chirpStore.DeleteChirp(id));
    // res.sendStatus(200);
    // already built into the res.json, you will only need it 
})

module.exports = router;

// res.json
// res.send
// res,sendStatus