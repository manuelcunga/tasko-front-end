import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../../components/header/header';

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  hired: boolean; 
}

export function Jobs() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get<Service[]>('http://localhost:9000/api/v1/services');
        setServices(response.data.map(service => ({ ...service, hired: false }))); 
        setLoading(false);
      } catch (err) {
        setError('Ocorreu um erro ao buscar os serviços.');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleHire = async (serviceId: number) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('ops, não autenticado. Por favor, faça login novamente.');
        return;
      }

      await axios.post(
        'http://localhost:9000/api/v1/contract-service/create',
        { serviceId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setServices(services.map(service => 
        service.id === serviceId ? { ...service, hired: true } : service
      ));

      toast.success('Serviço contratado com sucesso!');
    } catch (err) {
      toast.error('Erro ao contratar o serviço. Por favor, tente novamente.');
    }
  };

  return (
    <>
    <Header/>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <ToastContainer /> 
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark mb-3">Lista de Serviços</h2>
          <p className="text-body-color text-base">Escolha um serviço e contrate facilmente.</p>
        </div>
        {loading ? (
          <div className="text-center">Carregando...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-body-color mb-4">{service.description}</p>
                <p className="text-primary font-bold mb-4">Preço: {service.price} kz</p>
                <button
                  onClick={() => handleHire(service.id)}
                  className={`py-2 px-4 ${service.hired ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white'} font-semibold rounded-md shadow-sm hover:${service.hired ? '' : 'bg-primary-dark'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                  disabled={service.hired}
                >
                  {service.hired ? 'Contratado' : 'Contratar'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
