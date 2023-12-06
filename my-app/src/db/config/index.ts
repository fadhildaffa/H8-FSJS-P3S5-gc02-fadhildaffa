if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
  }

const { MongoClient } = require("mongodb");


const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function connect() {
  try {
    const database = client.db('cOlx');

    return database
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
