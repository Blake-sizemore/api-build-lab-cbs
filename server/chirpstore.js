const fs = require('fs');
// brings in file store for nodeJS
let chirps = { nextid: 0 };
// ID key for the eventual array full of objects that will be chirps

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
}
// function that edits the file in question

if (fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}
// checks to see if the "folder" already has an the file


let getChirps = () => {
    return Object.assign({}, chirps);
}

let getChirp = () => {
    return Object.assign({}, chirps[id]);
}

let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
}

let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
}


module.exports = {
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp,
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp
}