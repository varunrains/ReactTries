//Catch ALL for NextAuth.js
//So this should be dynamic as NextAuth provides different routes
//To handle

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

//This is a function that will return a handler
//We can pass the configuration object to this
//Please refer the official documentation
export default NextAuth({
    //Tells the NextAuth that we should send a JWT token
    session: {jwt:true},
    providers: [
        Providers.Credentials({
          async  authorize(credentials) {
                const client = await connectToDatabase();
                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({ email: credentials.email });

                if (!user) {
                    client.close();
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    client.close();
                    throw new Error('Could not log you in!');
                }

                //Once you reach here then nextAuth knows that the 
                //validation is succeeded and it will encode the 
                //email into the token
                return {
                    email: user.email
                };

                client.close();
            }
        })
    ]
});