import {MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://dbuser:dbuser@cluster0.hsnje.mongodb.net/next-auth?retryWrites=true&w=majority')
    return client;
}


