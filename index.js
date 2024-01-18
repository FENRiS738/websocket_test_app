import express from "express";
import { WebSocketServer  } from "ws";

const app = express();
const PORT = 8080;

const server_instance = app.listen(PORT, ()=>{
    console.log("Server is running.....");
});

const wss = new WebSocketServer({ server: server_instance });

wss.on('connection', function(stream) {
    stream.on('message', function(data) {
        console.log('data from client: %s', data);
        stream.send('Thanks for the response');
    });
    stream.on('error', function(error) {
        console.log('We found an error: %s', error.message);
    });
});