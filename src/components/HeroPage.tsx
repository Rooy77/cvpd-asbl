// src/App.tsx

import React from 'react';
import Header from './header';
import { ArrowUpRight } from 'lucide-react';  

const App: React.FC = () => {
  return (
    <div className="bg-none font-sans">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center pt-16" 
        style={{ backgroundImage: "url('/img/back.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 "></div>
        <div className="relative text-white p-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Coalition des <span className='text-orange-200'>Volontaires</span> pour la Paix et le Développement
            </h1>
            <div className="flex space-x-2 mb-6 items-center">
                <div className='w-[2px] h-[2.5rem] bg-orange-200 mt-1'></div>
                <p className="text-sm font-light max-w-2xl">
                  Dans le nord du Darfour, la localité de Tawila est devenue l&apos;épicentre d&apos;une crise humanitaire d&apos;une ampleur vertigineuse. 
                </p>
            </div>
            <button className="bg-transparent flex gap-4 border-1 border-orange-200 text-orange-200 text-sm items-center cursor-pointer font-regular py-3 px-6 rounded-full hover:bg-orange-200/20 hover:text-orange-200 transition-colors">
                <span>REGARDER LE REPORTAGE</span> <ArrowUpRight />
            </button>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative -mt-16 z-10 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Stats */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 p-8">
            <div className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105 border-r-2 border-[#017dbf]/10 pl-4">
              <div className="text-4xl font-bold text-[#017dbf]">18M</div>
              <p className="text-sm text-gray-600 mt-2">De bénéficiaires</p>
            </div>
            <div className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105 border-r-2 border-[#017dbf]/10 pl-4">
              <div className="text-4xl font-bold text-[#017dbf]">52</div>
              <p className="text-sm text-gray-600 mt-2">Projets en cours</p>
            </div>
            <div className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#017dbf]">14</div>
              <p className="text-sm text-gray-600 mt-2">Pays d&apos;intervention</p>
            </div>
          </div>
          
          {/* Operations Button */}
          <a href="#" className="bg-[#017dbf] text-white p-8 flex items-center justify-center transition-colors duration-300 hover:bg-[#0070ad]">
            <div className="block text-left justify-start">
              <p className="font-semibold text-lg mb-2">Découvrir <br /> nos opérations</p>
              <span className="text-orange-200"><ArrowUpRight /></span>
            </div>
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;