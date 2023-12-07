import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPassword } from "../helpers/bcrypt";

const databaseName = 'cOlx';

export const getDb = async () => {
    const client = await getMongoClientInstance()
    const db = client.db(databaseName)

    return db
}

export type userModel = {
    _id : ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
}

export type userAddModel = {
    name: string;
    username: string;
    email: string;
    password: string;
}

export const Register = async () => {
    const db = await getDb()
    const regist = (await db.collection('users').insertOne({
        name: "",

    }))
}