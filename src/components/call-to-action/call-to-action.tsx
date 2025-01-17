export function CallToAction() {
  return (
    <>
      <section id="getstarted" className="bg-white">
        <div className="container mx-auto">
          <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <span className="block mb-4 text-base font-medium text-white">
                  Encontre Seu Provedor de Serviços Ideal
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                  <span className="xs:block">Comece com</span>
                  <span>nossa versão gratuita</span>
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end">
                  <a href="/" className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md text-primary border border-white hover:bg-transparent hover:text-white hover:border-white px-7">
                    Atualize para a Versão Pro
                  </a>
                  <a href="/" className="inline-flex py-3 my-1 text-base font-medium text-white border border-white transition rounded-md bg-primary hover:bg-white hover:text-primary px-7 hover:bg-opacity-90">
                    Inicie Seu Período de Teste Gratuito
                  </a>
                </div>
              </div>
            </div>
            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg width="189" height="162" viewBox="0 0 189 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="16" cy="-16.5" rx="173" ry="178.5" transform="rotate(180 16 -16.5)" fill="url(#paint0_linear)"></ellipse>
                  <defs>
                    <linearGradient id="paint0_linear" x1="-157" y1="-107.754" x2="98.5011" y2="-106.425" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.07"></stop>
                      <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg width="191" height="208" viewBox="0 0 191 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="173" cy="178.5" rx="173" ry="178.5" fill="url(#paint0_linear)"></ellipse>
                  <defs>
                    <linearGradient id="paint0_linear" x1="-3.27832e-05" y1="87.2457" x2="255.501" y2="88.5747" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.07"></stop>
                      <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
