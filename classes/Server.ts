import express, { Application } from 'express';
import { PORT } from '../config/enviroments';

export default class Server {

    public static _instance: Server;
    public app: Application;
    public port: number;

    constructor(){
        this.port = PORT;
        this.app = express();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    start(callback: Function){
        this.app.listen(this.port, callback());
    }




}