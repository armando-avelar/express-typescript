import Server from './classes/Server';
import cors from 'cors';
import { PORT } from './config/enviroments';
import routes from './routes/index';
import bodyParser from 'body-parser';
import express from 'express';
import fileUpload from 'express-fileupload';

const server = Server.instance;

server.app.use(cors());

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

server.app.use(fileUpload());

server.app.use(express.static('public'));

server.app.use('/', routes);

server.start(() => {
    console.log('servidor corriendo en ' + PORT);
})



