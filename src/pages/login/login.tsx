import React from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export function Login() {
  const { email, setEmail, password, setPassword } = useAuthForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  console.log("Dados do form", handleSubmit)

  return (
    <section id="login" className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
      <div className="flex items-center mb-8">
          <Link to="/" className="text-primary flex items-center">
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Faça Login na Sua Conta
              </span>
              <h2 className="text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                Acesso Seguro
              </h2>
              <p className="text-body-color text-base">
                Entre na sua conta para acessar suas funcionalidades personalizadas e gerenciar suas informações de forma segura.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-100 -mx-4">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-2xl md:px-7 xl:px-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    placeholder="Digite sua senha"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Entrar
                </button>

                <div className="mt-4 text-center">
                  <Link 
                    to="/sign-up" 
                    className="text-base font-medium text-dark hover:text-primary"
                  >
                    Criar Conta
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
