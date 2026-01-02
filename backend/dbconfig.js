import { MongoClient } from "mongodb";


const url = "mongodb://127.0.0.1:27017";
const dbName ="crud";
export const collectionName = "data";
const client = new MongoClient(url)
export const connection=async()=>{


    const connect =await client.connect();
    return await connect.db(dbName)
}