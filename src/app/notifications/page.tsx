"use client";

import { useState } from "react";
import { Bell, Trash2, CheckCircle, Eye, X, AlertCircle, Info, Check, XCircle, PlusCircle, Home } from "lucide-react";
import Link from "next/link";

type NotificationType = "success" | "error" | "warning" | "info";

type Notification = {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  const getNotificationStyle = (type: NotificationType) => {
    switch (type) {
      case "success":
        return { icon: <Check className="text-green-500 w-6 h-6" />, border: "border-green-500", shadow: "shadow-green-500" };
      case "error":
        return { icon: <XCircle className="text-red-500 w-6 h-6" />, border: "border-red-500", shadow: "shadow-red-500" };
      case "warning":
        return { icon: <AlertCircle className="text-yellow-500 w-6 h-6" />, border: "border-yellow-500", shadow: "shadow-yellow-500" };
      case "info":
      default:
        return { icon: <Info className="text-blue-500 w-6 h-6" />, border: "border-blue-500", shadow: "shadow-blue-500" };
    }
  };

  const addNotification = () => {
    const types: NotificationType[] = ["success", "error", "warning", "info"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const newNotification: Notification = {
      id: Date.now(),
      title: `Nova Notificação (${randomType.toUpperCase()})`,
      message: "Essa é uma notificação de teste gerada automaticamente e aleatóriamente. Tente novamente para outras mensagens",
      type: randomType,
      read: false,
    };

    setNotifications((prev) => [...prev, newNotification]);
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)));
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="text-center">
        <Bell className="w-12 h-12 text-blue-400 mx-auto mb-3 animate-bounce" />
        <h1 className="text-4xl font-bold text-white mb-2">Notificações</h1>
        <p className="text-gray-400 max-w-lg">Veja alertas, atualizações e eventos importantes do sistema.</p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-blue-700 transition">
          <Home className="w-5 h-5 inline-block mr-2" />
          Página Inicial
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          onClick={addNotification}
          className="flex cursor-pointer items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition transform hover:scale-105"
        >
          <PlusCircle className="w-5 h-5" />
          Lançar Notificação
        </button>

        {notifications.length > 0 && (
          <button
            onClick={clearAllNotifications}
            className="flex items-center cursor-pointer gap-2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition transform hover:scale-105"
          >
            <Trash2 className="w-5 h-5" />
            Limpar Todas
          </button>
        )}
      </div>

      <div className="mt-6 w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-md">
        {notifications.length === 0 ? (
          <p className="text-gray-400 text-center py-6 animate-pulse">Nenhuma notificação disponível.</p>
        ) : (
          <ul className="divide-y divide-gray-700">
            {notifications.map((notification) => {
              const { icon, border } = getNotificationStyle(notification.type);

              return (
                <li
                  key={notification.id}
                  className={`flex justify-between items-center py-4 border-l-4 ${border} pl-4 transition-opacity duration-500 ${
                    notification.read ? "opacity-50 blur-sm" : "opacity-100"
                  } animate-fadeIn`}
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <div>
                      <h3 className="text-lg font-semibold text-white">{notification.title}</h3>
                      <p className={`text-gray-400 mt-1`}>{notification.read ? "Lida ✅" : notification.message}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedNotification(notification)}
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-110 cursor-pointer"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="bg-green-500 text-white cursor-pointer px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition transform hover:scale-110"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                    )}

                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-red-600 transition transform hover:scale-110 cursor-pointer"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {selectedNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-md z-50 animate-fadeIn">
          <div
            className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-gray-200 border-t-4 ${
              getNotificationStyle(selectedNotification.type).border
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedNotification.title}</h2>
              <button onClick={() => setSelectedNotification(null)} className="text-gray-400 hover:text-gray-200 cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-400">{selectedNotification.message}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedNotification(null)}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105 cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
