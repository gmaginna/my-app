"use client";

import { useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { UserPlus, X, Loader2 } from "lucide-react";

export default function AddUserModal() {
  const { addUser } = useUserStore();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !username) return;

    setLoading(true);
    await addUser({ name, email, username });
    setLoading(false);
    setIsOpen(false);
    setName("");
    setUsername("");
    setEmail("");
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-green-600 transition cursor-pointer"
      >
        <UserPlus className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-md z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Novo Usuário</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-200 cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-700 text-white border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 text-white border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 text-white border border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="flex items-center cursor-pointer justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <UserPlus className="w-5 h-5" />}
                {loading ? "Adicionando..." : "Adicionar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
