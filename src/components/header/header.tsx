import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="top-0 left-0 z-50 w-full sticky bg-white">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <Link to="/" className="block w-full py-5 font-extrabold text-3xl">
              TasKo
            </Link>
          </div>
          <div className="px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${navbarOpen ? 'navbarTogglerActive' : ''}`}
                id="navbarToggler"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
              </button>
              <nav
                className={`absolute right-4 top-full w-full max-w-[350px] rounded-lg bg-white py-5 px-6 lg:px-0 shadow transition-all lg:static lg:bg-transparent lg:block lg:w-full lg:max-w-full lg:shadow-none xl:ml-11 ${navbarOpen ? '' : 'hidden'}`}
                id="navbarCollapse"
              >
                <ul className="block lg:flex">
                  <li>
                    <Link to="/" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex">
                      Criar Conta
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
