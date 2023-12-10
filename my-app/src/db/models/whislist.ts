import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { listProduct } from "./product";


const databaseName = 'cOlx';

export const getDb = async () => {
    const client = await getMongoClientInstance()
    const db = client.db(databaseName)

    return db
}

export type userWhislist = {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export type mineWhislist = {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    wishlists: listProduct[]
}

type userAddWhislist = Omit<userWhislist, "_id">;
const WHISLIST = 'whislist'
export const getWhislists = async (userId: string ) => {
    const db = await getDb();

    const wishlists = await db
        .collection("users")
        .aggregate([
            {
                $match: {
                    _id: new ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: 'whislist',
                    localField: "_id",
                    foreignField: "userId",
                    as: "wishlists"
                }
            },
            {
                $unwind: { path: "$wishlists", preserveNullAndEmptyArrays: true },
            },
            {
                $lookup: {
                    from: "products",
                    let: { productId: "$wishlists.productId" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$productId"] }
                            }
                        },
                    ],
                    as: "wishlists"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    username: { $first: "$username" },
                    email: { $first: "$email" },
                    wishlists: { $addToSet: "$wishlists" },
                }
            },
            {
                $project: {
                    "_id": 1,
                    "username": 1,
                    "email": 1,
                    "createdAt": 1,
                    "updatedAt": 1,
                    "wishlists": {
                        $map: {
                            input: {
                                $ifNull: ["$wishlists", []]
                            },
                            as: "wishlist",
                            in: {
                                _id: { $arrayElemAt: ["$$wishlist._id", 0] },
                                name: { $arrayElemAt: ["$$wishlist.name", 0] },
                                price: { $arrayElemAt: ["$$wishlist.price", 0] },
                                slug: { $arrayElemAt: ["$$wishlist.slug", 0] },
                                description: { $arrayElemAt: ["$$wishlist.description", 0] },
                                excerpt: { $arrayElemAt: ["$$wishlist.excerpt", 0] },
                                tags: { $arrayElemAt: ["$$wishlist.tags", 0] },
                                thumbnail: { $arrayElemAt: ["$$wishlist.thumbnail", 0] },
                                images: { $arrayElemAt: ["$$wishlist.images", 0] },
                                createdAt: { $arrayElemAt: ["$$wishlist.createdAt", 0] },
                                updatedAt: { $arrayElemAt: ["$$wishlist.updatedAt", 0] }
                            }
                        }
                    }
                }
            },
        ])
        .toArray() as mineWhislist[];

    return wishlists[0];
};

export const addWhislist = async (userId: string, productId: string): Promise<userAddWhislist> => {
    const db = await getDb();
    let objUser = new ObjectId(userId)
    let objPost = new ObjectId(productId)
    const newWhislist: userAddWhislist = { userId: objUser, productId: objPost, createdAt: new Date(), updatedAt: new Date() };
    await db.collection(WHISLIST).insertOne(newWhislist);


    return newWhislist
}

export const getUserWishlist = async (userId: string) => {
    const db = await getDb();
    const wishlists = await db
        .collection(WHISLIST)
        .aggregate([
            {
                $match: {
                    userId: new ObjectId(userId)
                }
            },
        ])
        .toArray() as userWhislist[];

    return wishlists;
};

export const deleteWhislist = async (userId: string, productId: string) => {
    const db = await getDb();
    const deleteWish = await db.collection(WHISLIST).deleteOne({
        $and: [{ userId: new ObjectId(userId) }, { productId: new ObjectId(productId) }]
    })

    return deleteWish

}
