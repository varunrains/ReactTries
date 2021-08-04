import classes from './newsletter-registration.module.css';
import { useRef, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

const NewsletterRegistration = (props) => {
    const emailInputRef = useRef();
    const notificationCtx = useContext(NotificationContext);

    function registrationHandler(event) {

        event.preventDefault();
        const userEmailAddress = emailInputRef.current.value;

        notificationCtx.showNotification({
            title: 'Signing up',
            message: 'Registering the user',
            status:'pending'
        });
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
        fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({ email: userEmailAddress }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            }

           return resp.json().then(data => {
                throw new Error(data.message || 'Something went wrong');
            });
        }).
            then(data => 
                notificationCtx.showNotification({
                    title: 'Success',
                    message: 'Successfully registered for newsletter',
                    status: 'success'
                })
        ).catch(error => {
            notificationCtx.showNotification({
                title: 'Error',
                message: error.message || 'Something went wrong',
                status: 'error'
            });
        })
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
                      type='email'
                      id='email'
                      placeholder='Your email'
                      aria-label='Your email'
                      ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
