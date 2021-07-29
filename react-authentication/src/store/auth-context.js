import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => {}

});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

const retreivedStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if (remainingTime <= 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {

    const tokenData = retreivedStoredToken();
    let initialToken;
    if (tokenData) {
         initialToken = tokenData.token;
    }
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        //local storage is only capable to store primitive.
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        const remainingTime = calculateRemainingTime(expirationTime);

     logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    const logoutHandler = useCallback(() => {
        //set token is a state changing method so no need to add that in the dependency array
        //localStorage and clearTimeout are the browser inbuilt methods so need to add that too.
        setToken(null);
        localStorage.removeItem('token');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    },[]);

    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duratio);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }

    }, [tokendata, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>;


}

export default AuthContext;