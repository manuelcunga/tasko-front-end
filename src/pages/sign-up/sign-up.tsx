import React, { useState } from 'react';

export function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nif, setNif] = useState('');
  const [phone, setPhone] = useState('');
  const [addressID, setAddressID] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('NIF:', nif);
    console.log('Phone:', phone);
    console.log('Address ID:', addressID);
    console.log('Role:', role);
  };

  return (
    <section id="create-account" className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Crie Sua Conta
              </span>
              <h2 className="text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                Cadastro Seguro
              </h2>
              <p className="text-body-color text-base">
                Preencha os dados abaixo para criar sua conta e começar a usar nossos serviços.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen -mx-4">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>
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
                <div className="mb-6">
                  <label htmlFor="nif" className="block text-sm font-medium text-gray-700">
                    NIF
                  </label>
                  <input
                    type="text"
                    id="nif"
                    value={nif}
                    onChange={(e) => setNif(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    placeholder="Digite seu NIF"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    placeholder="Digite seu telefone"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="addressID" className="block text-sm font-medium text-gray-700">
                    ID de Endereço
                  </label>
                  <input
                    type="text"
                    id="addressID"
                    value={addressID}
                    onChange={(e) => setAddressID(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    placeholder="Digite seu ID de endereço"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Papel
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    required
                  >
                    <option value="" disabled>Selecione o papel</option>
                    <option value="USER">Usuário</option>
                    <option value="ADMIN">Administrador</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Criar Conta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
