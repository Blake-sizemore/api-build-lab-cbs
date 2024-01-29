const express = require('express');
// pulls in expressJS - back end web application framework for building RESTful APIs with Node.js
// aka require = import/from 
const cors = require('cors')
// pulls in cors - Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.
const apiRouter = require('./routes');
// This sets "routes" into access
let app = express();

app.use(cors());
// This Enable All CORS Requests) 
app.use(express.json());
// It parses incoming requests with JSON payloads and is based on body-parser
app.use('/api',apiRouter);
// allows for access beyond /api if in the routes folder
app.listen(3000);
// Listen to the host/"Client"

// In the browser, JavaScript module execution depends upon import and export statements. These statements load and export ES modules, respectively. This is the standard and official way to reuse modules in JavaScript, and it’s what most web browsers natively support.

// Node.js, by default, supports the CommonJS module format, which loads modules using the require() function, and exports them with module.exports.