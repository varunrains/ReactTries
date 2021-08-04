import { connectDatabase, insertDocument, getAllDocuments } from '../../../helpers/db-util';

async function handler  (req, res) {
    const eventId = req.query.eventId;

    let client;

    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'connecting to db failed' });
        return;
    }
    
    if (req.method === 'POST') {
        const {email, name, text } = req.body;

        //server side validation
        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(222).json({ message: 'Invalid input.' });
            client.close();
            return;
        }
        
        const newComment = {
            //id: new Date().toISOString(),
            email,
            name,
            text,
            eventId
        }

        let result;
        try {
            result = await insertDocument(client, 'comments', newComment);
            newComment._id = result.insertedId;
            res.status(200).json({ message: 'Added comment', comment: newComment });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'INserting comment failed' });
        }

    }
    if (req.method === 'GET') {
        const client = await connectDatabase();
        let documents;
        try {
            documents  = await getAllDocuments(client, 'comments', { _id: -1 });
        }
        catch (error) {
            res.status(500).json({ message: 'Getting all documents failed' });
        }
        res.status(200).json({ comments: documents });
    }

    client.close();
};

export default handler;