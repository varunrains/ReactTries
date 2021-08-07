import UserProfile from '../components/profile/user-profile';
//getSession can be used in the server side also
import {  getSession } from 'next-auth/client';

function ProfilePage() {
  return <UserProfile />;
}


export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    //The Profile Page will only be loaded if the user is logged in

    if (!session) {
        return {

            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }

}

export default ProfilePage;
