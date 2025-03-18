import Link from "next/link";
import { Code, BarChart3, User, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MyDNA Digital",
    description: "Homepage para Geração de Demos, contatos e direcionamento para plataforma",
    url: "https://mydnadigital.com/",
  },
  { id: 2, title: "Assectra", description: "Homepage", url: "https://assectra.com.br" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Gustavo Magina</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Desenvolvedor Front-End especializado em <strong>React, Next.js, TypeScript e Tailwind</strong>. Apaixonado por criar interfaces modernas,
          dinâmicas e otimizadas para a melhor experiência do usuário.
        </p>
      </div>

      <div className="mt-10 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all transform hover:scale-105">
          <Code className="w-10 h-10 text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Next.js & React</h3>
          <p className="text-gray-400 mt-3">Criação de aplicações performáticas e escaláveis.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all transform hover:scale-105">
          <BarChart3 className="w-10 h-10 text-green-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Gerenciamento de Estado</h3>
          <p className="text-gray-400 mt-3">Utilizando Zustand e React Query para otimizar performance.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all transform hover:scale-105">
          <User className="w-10 h-10 text-purple-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
          <p className="text-gray-400 mt-3">Interfaces intuitivas utilizando TailwindCSS e animações suaves.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-white">Funcionalidades</h2>
        <p className="text-gray-400 mb-6">Explore as principais funcionalidades desenvolvidas.</p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/users" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Gerenciamento de Usuários
          </Link>
          <Link href="/analytics" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Análises e Relatórios
          </Link>
          <Link href="/notifications" className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
            Notificações
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-white">Projetos</h2>
        <p className="text-gray-400 mb-6">Confira alguns dos sites que desenvolvi.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all transform hover:scale-105 flex flex-col items-center"
            >
              <Globe className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-3">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
