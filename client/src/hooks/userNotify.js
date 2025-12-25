import { createContext, useContext } from "react";

export const NotificationContext = createContext(null);

export function useNotify() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotify must be used within NotificationProvider');
    }
    return context;
}