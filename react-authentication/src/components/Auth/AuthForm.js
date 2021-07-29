import { useState, useRef, useContext } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const API_KEY = "AIzaSyDLsOT7ncpxzqU0Xy48K3wMcqb7f5hVP8E";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext);
    const history = useHistory();
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        //Optional: add validation
        let url;
        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
        } else {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
        }
        //Same body for logging in and signup --
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(data => {
                    let errorMessage = "Authentication failed!";
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    alert(errorMessage);
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            // data.expiresIn will be in seconds and it will be in string.
            const expirationTime = new Date((new Date().getTime() + (+data.expiresIn * 1000)))
            authCtx.login(data.idToken, expirationTime.toString());
            history.replace('/'); //Redirect without the back buttonform
        }).catch((err) => {
            alert(err.message);
        });

    };

  return (
    <section className={classes.auth}>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
                  <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
                  <label htmlFor='password'>Your Password</label>
                  <input type='password' id='password' required ref={passwordInputRef} />
        </div>
              <div className={classes.actions}>
                  {!isLoading && < button > {isLogin ? 'Login' : 'Create Account'}</button>}
                  {isLoading && <p style={{ 'color': 'white' }}>Sending request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
