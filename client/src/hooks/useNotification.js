// hooks/useNotification.js
import { useState, useCallback, useEffect } from 'react';

const generateId = () => Math.random().toString(36).substring(2, 15);

export function useNotification(defaultDuration = 5000) {
    const [notifications, setNotifications] = useState([]);

    // Auto-remove notifications after their duration
    useEffect(() => {
        if (notifications.length === 0) return;

        const timers = notifications.map((notif) => {
            // duration: 0 or undefined = never auto-dismiss
            if (!notif.duration) return null;

            return setTimeout(() => {
                setNotifications((prev) => prev.filter((n) => n.id !== notif.id));
            }, notif.duration);
        });

        return () => {
            timers.forEach((timer) => timer && clearTimeout(timer));
        };
    }, [notifications]);

    // Add a new notification
    const addNotification = useCallback(
        ({ type = 'info', message, description, duration = defaultDuration, dismissible = true }) => {
            const newNotif = {
                id: generateId(),
                type,
                message,
                description,
                duration,
                dismissible,
            };

            setNotifications((prev) => [...prev, newNotif]);
        },
        [defaultDuration]
    );

    // Remove a specific notification by id
    const removeNotification = useCallback((id) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    // Clear all notifications
    const clearAll = useCallback(() => {
        setNotifications([]);
    }, []);

    return {
        notifications,
        addNotification,
        removeNotification,
        clearAll,
    };
}