import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPassword } from "../helpers/bcrypt";
import exp from "constants";


const databaseName = 'cOlx';

export const getDb = async () => {
    const client = await getMongoClientInstance()
    const db = client.db(databaseName)

    return db
}

export type userModel = {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
}

export type userAddModel = Omit<userModel, "_id">;
const COLLECTION_USER = 'users';

export const Register = async (user: userAddModel) => {
    const changeUser: userAddModel = {
        ...user,
        password: hashPassword(user.password)
    }
    const db = await getDb();
    const result = await db.collection(COLLECTION_USER).insertOne(changeUser);

    return result
}

export const getByEmailAndUsername = async (email: string, username: string) => {
    const db = await getDb();
    const user = (await db.collection(COLLECTION_USER).find({
        $or: [{ email },
        { username }]
    }).toArray()) as userModel[];

    // const userUsername = (await db.collection(COLLECTION_USER).findOne({
    //     username: username
    // })) as userModel;

    return user
}

export const getByEmail= async (email: string) => {
    const db = await getDb();
    const result = (await db.collection(COLLECTION_USER).findOne({
        email
    })) as userModel;

    return result;
}

