import { createContext,useState, useEffect } from "react";


export const NotificationContext = createContext({
    notification: null, //{title, message, status}
    showNotification: (notificationData) => { },
    hideNotification: () => { }

});

export const NotificationContextProvider = (props) => {
    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000);

            return () => {
                clearTimeout(timer);
            }
        }
    }, [activeNotification]);

    const showNotificationHandler = notificationData => {
        setActiveNotification(notificationData);
    }

    const hideNotificationHandler = () => {
        setActiveNotification(null);
    }

    const context = {
        notifications: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
        );

};

export default NotificationContext;