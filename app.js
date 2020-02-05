"use strict";
const http = require('http');
 
function createServer () {
	return http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('OK\n');
    }).listen(8080);
    
}
 
let server = createServer();
 
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if (server) {
		server.close();
		server = null;
		res.end('Shutting down...\n');
	} else {
		server = createServer();
		res.end('Starting up...\n');
	}
}).listen(8081);


// "use strict"

// const express = require('express');  
// const uuid = require('uuid');  
// const os = require('os');

// let app = express();

// let hostname = os.hostname();

// let state = {
//     generateFailure: false
// };

// app.get("/guid", (req, res) => {
//     if(state.generateFailure) {
//         return res.status(500).end();
//     }
//     res.json({ "guid": uuid.v4(), "container": hostname });
// });

// app.post("/toggle.failure", (req, res) => {
//     state.generateFailure = !state.generateFailure;  
//     res.status(200).end();
// });

// app.listen(9000, () => {  
//     console.log("listening on port 9000");
// });