import HeroImg from '../../assets/img/hero-image-01.png'
import Client1 from '../../assets/img/client1.webp'
import Client2 from '../../assets/img/client2.webp'
import Client3 from '../../assets/img/client3.webp'

export function Hero() {
    return (
      <div id="home" className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Encontre e Contrate<br />os Melhores Prestadores de Serviços
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                  Tasko facilita a contratação de serviços online, permitindo que você encontre e contrate prestadores de serviços de forma eficiente e segura. Gerencie transações, notificações e o histórico de serviços em um só lugar.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="https://spacema-dev.com/effortless-free-tailwind-css-website-template/"
                      className="inline-flex items-center border justify-center px-6 py-3 text-base font-medium text-center text-white hover:text-primary rounded-md bg-primary hover:bg-transparent hover:border-primary lg:px-7"
                    >
                      Comece Agora
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://spacema-dev.com/effortless-free-tailwind-css-website-template/"
                      className="inline-flex items-center justify-center py-3 px-5 text-center text-base font-medium text-[#464646] hover:text-primary"
                    >
                      <span className="mr-2">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                          <rect x="7.99893" y="14.979" width="8.18182" height="1.63636" fill="white" />
                          <rect x="11.2717" y="7.61523" width="1.63636" height="4.09091" fill="white" />
                          <path d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z" fill="white" />
                        </svg>
                      </span>
                      Baixar App
                    </a>
                  </li>
                </ul>
                <div className="clients pt-16">
                  <h6 className="flex items-center mb-6 text-md font-normal text-body-color">
                    Alguns dos Nossos Clientes
                    <span className="inline-block w-8 h-px ml-3 bg-body-color"></span>
                  </h6>
                  <div className="flex items-center">
                    <div className="block py-3 mr-4">
                      <img src={Client1} alt="cliente 1" />
                    </div>
                    <div className="block py-3 mr-4">
                      <img src={Client2} alt="cliente 2" />
                    </div>
                    <div className="block py-3">
                      <img src={Client3} alt="cliente 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img src={HeroImg} alt="imagem principal" className="max-w-full lg:ml-auto rounded-[10px] rounded-tl-[150px]" />
                  <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  