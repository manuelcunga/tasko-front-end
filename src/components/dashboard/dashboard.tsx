import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function Dashboard() {
  // Dados de exemplo para o histórico de transações
  const transactions = [
    { id: 1, type: 'Recebido', amount: 150, date: '2024-07-30' },
    { id: 2, type: 'Pago', amount: 50, date: '2024-07-29' },
    { id: 3, type: 'Recebido', amount: 200, date: '2024-07-28' },
  ];

  return (
   <>
   <Header/>
     <section id="dashboard" className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full -mx-4 mb-8">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-dark mb-4 text-xl font-semibold">Saldo da Carteira</h3>
              <p className="text-3xl font-bold text-primary">1.200,00 KZ</p>
            </div>
          </div>
        </div>

        {/* Histórico de Transações */}
        <div className="flex items-center justify-center w-full -mx-4">
          <div className="w-full px-4 md:w-2/3 lg:w-2/3">
            <div className="rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-dark mb-4 text-xl font-semibold">Histórico de Transações</h3>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                    <div className="text-sm font-medium text-gray-700">
                      {transaction.type}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      R$ {transaction.amount.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.date}
                    </div>
                  </div>
                ))}
                {transactions.length === 0 && (
                  <p className="text-center text-gray-500">Nenhuma transação registrada.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
   </>
  );
}
