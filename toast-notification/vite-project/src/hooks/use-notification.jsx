import { useState } from "react";
import Notification from "../components/notification";


const useNotification = (position = "top-right") => {
    const [notification, setNotification] = useState(null);

    const triggerNotification = (notificationProps) => {
        setNotification(notificationProps);
        setTimeout(() => {
            setNotification(null)
        }, notificationProps.duration);
    }

    const NotificationComponent = notification ? (
        <div>
            <Notification {...notification} />
        </div>
    ) : null

    return { NotificationComponent, triggerNotification }
};

export default useNotification;