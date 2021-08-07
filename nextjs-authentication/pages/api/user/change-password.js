import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword, hashPassword } from '../../../lib/auth';

async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return;
    }

    const session = await getSession({ req: req });

    if (!session) {
        //KEY CHECK for authentication
        //If the request is validated or not!!
        res.status(401).json({ message: "Not Authenticated!!" });
        return;
    }

    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const user = await usersCollection.findOne({ email: userEmail });

    if (!user) {
        res.status(404).json({ message: 'User not found!' });
        client.close();
        return;
    }

    const currentPassword = user.password;

    const passwordsAreEqual = verifyPassword(oldPassword, currentPassword);
    if (!passwordsAreEqual) {
        res.status(403).json({ message: 'Invalid Password' });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(newPassword);

    const result = await usersCollection.updateOne({ email: userEmail }, { $set: { password: hashedPassword } });

    client.close();
    res.status(200).json({ message: 'Password changed!' });

}

export default handler;