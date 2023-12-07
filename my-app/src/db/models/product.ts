import { getMongoClientInstance } from "../config";
import { ObjectId } from "mongodb";

const databaseName = 'cOlx';

export const getDb = async () => {
    const client = await getMongoClientInstance()
    const db = client.db(databaseName)

    return db
}

export type listProduct = {
    _id : ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string
}

export const getProducts7 = async () => {
    const db = await getDb();
    const products = (await db.collection('products').aggregate([
        {
            $limit: 7
        }
    ]).toArray()) as listProduct[]

    return products
}