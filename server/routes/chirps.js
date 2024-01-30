const express = require('express');
// pulls in express JS - rquire acts  like import/form
const chirpStore = require('../chirpstore');
// adds `GET`, `POST`, `PUT`, `DELETE` methods on a router that is created in `chirps.js`.

let router = express.Router();
// let id = req.params.id; REQ is not definesd this way

router.get("/:id?", (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpStore.GetChirp(id));
        res.send('chirps if echo, id =' + id);
    } else {
        res.send(chirpStore.GetChirps());
        res.send('api/chirps else echo has no id');
    }
});
// Working so far
router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    res.json(chirpStore.UpdateChirp(id,req.body));
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    res.json(chirpStore.UpdateChirp(id,req.body));
    res.sendStatus(200);
});

router.delete('/:id?',(req,res)=>{
    let id = req.params.id;
    res.json(chirpStore.DeleteChirp(id));
    res.sendStatus(200);
})

// router.delete('/:id?', (req, res) => {
//     chirpStore.DeleteChirp(id);
//     res.sendStatus(200);
// });


module.exports = router;
