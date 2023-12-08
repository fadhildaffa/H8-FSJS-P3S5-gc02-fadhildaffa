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
    createdAt: string;
    updatedAt: string;
}


export const getProducts = async (limit: string) => {
    const db = await getDb();
    const products = (await db.collection('products').aggregate([
        {
            $limit: Number(limit)
        }
    ]).toArray()) as listProduct[]

    return products
}

export const getProductSlug = async (slug: string) => {
    const db = await getDb();
    const products = (await db.collection('products').findOne({
        slug: slug
    })) as listProduct

    return products
}