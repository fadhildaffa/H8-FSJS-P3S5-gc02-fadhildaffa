if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
  }

const { MongoClient } = require("mongodb");


const uri = process.env.MONGO_URI;

let client: typeof MongoClient

export const getMongoClientInstance = async () => {
  if(!client){
    client = new MongoClient(uri);
    await client.connect()
  }  

  return client
  
 }  
