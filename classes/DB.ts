import mysql, { Pool } from 'mysql2';
import util from 'util';
import { DB_CONFIG } from '../config/enviroments';

export default class DB{

    private DBNa: Pool;
    private static _instance: DB;

    constructor(){
        this.DBNa = mysql.createPool(DB_CONFIG);
        this.connection();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    private connection(){
        this.DBNa.getConnection((err) => {
            if(err) console.log(err);
        })
    }

    async executeQuery(sql: string, data:Array<any>){
        let query:any = await util.promisify(this.DBNa.query).bind(this.DBNa);
        return await query(sql, data);
    }

}