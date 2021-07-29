import { useState, useEffect } from 'react';

//This will be shared by all the components where we use this hook
let globalState = {};
//Here both data and logic is shared by using this custom hook
let listeners = [];
let actions = {};

export const useStore = () => {
    const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    };

    useEffect(() => {
        listeners.push(setState);

        return () => {
            //During unmount of component we are removing the listener from the array
            listeners = listeners.filter(li => li !== setState);
        }
    }, []);

    //Kind of using "useReducer"
    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    action = { ...action, ...userActions };

};