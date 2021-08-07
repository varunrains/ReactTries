import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useSession, getSession } from 'next-auth/client';
import { useState, useEffect } from 'react';

async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
        method: 'PATCH',
        body: JSON.stringify(passwordData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}


function UserProfile() {
   // const [isLoading, setIsLoading] = useState(true);
   //// const [loadedSession, setLoadedSession] = useState(true);
   // //const [session, loading] = useSession();

   // useEffect(() => {
   //     getSession().then(session => {
   //        // setLoadedSession(session);
          
   //         if (!session) {
   //             window.location.href = '/auth';
   //         } else {
   //             setIsLoading(false);
   //         }
   //     });
   // }, []);


   // if (isLoading) {
   //     return <p className={classes.profile}>Loading....</p>
   // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
          <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
