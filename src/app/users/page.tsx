import AddUserForm from "@/components/AddUserForm";
import UserTable from "@/components/UserTable";
import { Home, UserCircle } from "lucide-react";
import Link from "next/link";

export default function Users() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="text-center">
        <UserCircle className="w-12 h-12 text-blue-400 mx-auto mb-3" />
        <h1 className="text-4xl font-bold text-white mb-2">Gerenciador de Usuários</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Gerencie seus usuários de forma simples e eficiente. As informações são armazenadas temporariamente via cache, garantindo uma navegação mais
          rápida e fluida. Adicione, visualize e remova usuários sem complicações ou necessidades adicionais de GETs para APIs.
        </p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-blue-700 transition">
          <Home className="w-5 h-5 inline-block mr-2" />
          Página Inicial
        </Link>
      </div>

      <div className="mt-8 w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Lista de Usuários</h2>
          <AddUserForm />
        </div>
        <UserTable />
      </div>
    </div>
  );
}
