import 'dotenv/config'

import { MongoClient } from "mongodb"


const uri = process.env.MONGO_URI;
if(!uri) throw new Error("Mongo uri is not defined")

let client: MongoClient

export const getMongoClientInstance = async () => {
  if(!client){
    client = new MongoClient(uri);
    await client.connect()
  }  

  return client
  
 }  
