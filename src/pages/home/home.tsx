import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/header/header';

interface Transaction {
  id: number;
  amount: number;
  date: string;
  description: string;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Ops, usuário não autenticado. Por favor, faça login novamente.');
          return;
        }

        const transactionsResponse = await axios.get<Transaction[]>('http://localhost:9000/api/v1/transaction-user-history', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setTransactions(transactionsResponse.data);
      } catch (err) {
        setError('Ocorreu um erro ao buscar os dados.');
        console.error('Erro ao buscar dados:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Saldo Disponível</h2>
              <p className="text-3xl font-bold text-gray-900 mt-2">
              20.000,45 kz
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v6.29a3.5 3.5 0 0 1 1.45 2.12L17.8 12 21 15.65l-1.43 1.43-4.35-3.09L12 14.86l-2.22-2.22a1.4 1.4 0 0 1-.17-1.91V3h3z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-semibold mb-6 text-gray-800">Histórico de Transações</h1>
          {loading ? (
            <div className="text-center text-gray-600">Carregando...</div>
          ) : error ? (
            <div className="text-center text-red-600 font-medium">{error}</div>
          ) : transactions.length === 0 ? (
            <div className="text-center text-gray-600">Sem transações para mostrar.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-700">ID</th>
                    <th className="py-3 px-4 text-left text-gray-700">Descrição</th>
                    <th className="py-3 px-4 text-left text-gray-700">Valor</th>
                    <th className="py-3 px-4 text-left text-gray-700">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="py-2 px-4 text-gray-600">{transaction.id}</td>
                      <td className="py-2 px-4 text-gray-600">{transaction.description}</td>
                      <td className="py-2 px-4 text-gray-600">{transaction.amount}</td>
                      <td className="py-2 px-4 text-gray-600">{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
