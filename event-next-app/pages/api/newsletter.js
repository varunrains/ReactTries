import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler (req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        //Validation should be done in server side also
        //Very important
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }

        //You can give any database name, you no need to create the DB in the mongo DB UI
        //If you give the name here it will start pushing the data to it
        //CONNECTION _STRING :: mongodb+srv://dbuser:<password>@cluster0.hsnje.mongodb.net/<dbName>?retryWrites=true&w=majority
        let client;
        try {
            client = await connectDatabase();
        }
        catch (error) {
            res.status(500).json({ message: 'Connecting to the database failed!' });
            return;
        }
        try {
            await insertDocument(client,'newsletter' , { email: userEmail });
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed!' });
            return;
        }
       res.status(200).json({ message:'Signed UP!' })
    }
};

export default handler;