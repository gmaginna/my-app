"use client";

import Link from "next/link";
import { BarChart3, PieChart, LineChart, Home } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart as LineChartRecharts,
  Pie,
  PieChart as PieChartRecharts,
  Cell,
} from "recharts";

const userDistributionData = [
  { name: "Ativos", value: 60 },
  { name: "Inativos", value: 30 },
  { name: "Novos", value: 10 },
];

const activityData = [
  { month: "Jan", atividade: 50 },
  { month: "Fev", atividade: 80 },
  { month: "Mar", atividade: 90 },
  { month: "Abr", atividade: 120 },
  { month: "Mai", atividade: 100 },
  { month: "Jun", atividade: 150 },
];

const performanceData = [
  { name: "Semana 1", desempenho: 70 },
  { name: "Semana 2", desempenho: 85 },
  { name: "Semana 3", desempenho: 95 },
  { name: "Semana 4", desempenho: 110 },
];

const hourlyActivityData = [
  { hour: "00h", logins: 5 },
  { hour: "06h", logins: 20 },
  { hour: "12h", logins: 50 },
  { hour: "18h", logins: 100 },
  { hour: "21h", logins: 150 },
];

const retentionData = [
  { name: "Usuários Retidos", value: 70 },
  { name: "Usuários Perdidos", value: 30 },
];

const growthRateData = [
  { month: "Jan", growth: 5 },
  { month: "Fev", growth: 10 },
  { month: "Mar", growth: 12 },
  { month: "Abr", growth: 20 },
  { month: "Mai", growth: 25 },
  { month: "Jun", growth: 30 },
];

const futureGrowthData = [
  { month: "Jul", growth: 35 },
  { month: "Ago", growth: 40 },
  { month: "Set", growth: 50 },
  { month: "Out", growth: 60 },
  { month: "Nov", growth: 70 },
  { month: "Dez", growth: 85 },
];

const COLORS = ["#4CAF50", "#FF9800", "#2196F3"];

export default function Analytics() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="text-center">
        <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-3" />
        <h1 className="text-4xl font-bold text-white mb-2">Relatórios e Análises</h1>
        <p className="text-gray-400 max-w-lg">
          Acompanhe métricas importantes e visualize insights detalhados sobre o desempenho dos usuários e atividades na plataforma.
        </p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-blue-700 transition">
          <Home className="w-5 h-5 inline-block mr-2" />
          Página Inicial
        </Link>
      </div>

      <div className="mt-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all">
          <PieChart className="w-10 h-10 text-green-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Distribuição de Usuários</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChartRecharts>
              <Pie data={userDistributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {userDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChartRecharts>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all">
          <LineChart className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Atividade Mensal</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChartRecharts data={activityData}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="atividade" stroke="#FFD700" strokeWidth={2} />
            </LineChartRecharts>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all">
          <BarChart3 className="w-10 h-10 text-purple-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Desempenho Geral</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={performanceData}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="desempenho" fill="#8A2BE2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-12 w-full max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-white">Insights Avançados</h2>
        <p className="text-gray-400 mb-6">Mais gráficos e estatísticas serão adicionados futuramente.</p>
        <div className="mt-5">
          <div>Gráfico de Usuários Ativos por Horário</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={hourlyActivityData}>
              <XAxis dataKey="hour" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="logins" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all">
          <LineChart className="w-10 h-10 text-green-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Taxa de Crescimento de Usuários</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChartRecharts data={growthRateData}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="growth" stroke="#4CAF50" strokeWidth={2} />
            </LineChartRecharts>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all">
          <PieChart className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Retenção de Usuários</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChartRecharts>
              <Pie data={retentionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {retentionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChartRecharts>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all">
          <LineChart className="w-10 h-10 text-purple-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white">Previsão de Crescimento (IA)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChartRecharts data={futureGrowthData}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="growth" stroke="#8A2BE2" strokeWidth={2} />
            </LineChartRecharts>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
