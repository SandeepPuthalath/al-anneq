// components/NotificationProvider.jsx
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useNotification } from '../../hooks/useNotification';
import { NotificationContext } from '../../hooks/userNotify';

export function NotificationProvider({ children }) {
  const { notifications, removeNotification, addNotification } = useNotification(5000);

  return (
    <NotificationContext.Provider value={{ notifications, removeNotification, addNotification }}>
      {children}

      {/* Notification toast stack - top-right */}
      <div className="fixed top-5 right-5 z-100 flex flex-col gap-3 max-w-[420px] w-full pointer-events-auto">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`
              flex items-start gap-3 p-4 pr-10 rounded-xl shadow-xl border-l-4 transform transition-all duration-300 ease-out
              ${notif.type === 'success'
                ? 'bg-green-50/95 border-green-500 text-green-900 backdrop-blur-sm'
                : notif.type === 'error'
                ? 'bg-red-50/95 border-red-500 text-red-900 backdrop-blur-sm'
                : notif.type === 'warning'
                ? 'bg-amber-50/95 border-amber-500 text-amber-900 backdrop-blur-sm'
                : 'bg-blue-50/95 border-blue-500 text-blue-900 backdrop-blur-sm'}
              animate-in slide-in-from-right-5 fade-in duration-300
            `}
          >
            {/* Icon */}
            <div className="shrink-0 mt-0.5">
              {notif.type === 'success' && <CheckCircle className="w-6 h-6 text-green-600" />}
              {notif.type === 'error' && <AlertCircle className="w-6 h-6 text-red-600" />}
              {notif.type === 'warning' && <AlertTriangle className="w-6 h-6 text-amber-600" />}
              {notif.type === 'info' && <Info className="w-6 h-6 text-blue-600" />}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-base leading-tight">{notif.message}</p>
              {notif.description && (
                <p className="text-sm opacity-90 mt-1.5 leading-relaxed">{notif.description}</p>
              )}
            </div>

            {/* Close button */}
            {notif.dismissible !== false && (
              <button
                onClick={() => removeNotification(notif.id)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-black/5"
                aria-label="Dismiss notification"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

NotificationProvider.displayName = 'NotificationProvider';