import React from 'react';
import { PieChart, Lock, Zap } from 'lucide-react';

const Tokenomics = () => {
  return (
    <section className="py-20 bg-green-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Tokenomics 📊
          </h2>
          
          <div className="bg-green-700 p-8 rounded-2xl shadow-2xl">
            <div className="flex justify-center mb-6">
              <PieChart size={64} className="text-yellow-300 animate-pulse" />
            </div>
            
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Coming Soon™
            </h3>
            
            <p className="text-green-100 text-lg mb-8">
              Our tokenomics are being crafted with maximum frog precision. Get ready for:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-600 p-6 rounded-xl">
                <Lock size={32} className="text-yellow-300 mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">Locked Liquidity</h4>
                <p className="text-green-200 text-sm">LP tokens locked for community safety</p>
              </div>
              
              <div className="bg-green-600 p-6 rounded-xl">
                <Zap size={32} className="text-yellow-300 mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">Low Tax</h4>
                <p className="text-green-200 text-sm">Minimal fees for maximum gains</p>
              </div>
              
              <div className="bg-green-600 p-6 rounded-xl">
                <PieChart size={32} className="text-yellow-300 mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">Fair Launch</h4>
                <p className="text-green-200 text-sm">No presale, no team allocation</p>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-400 p-4 rounded-xl">
              <p className="text-green-800 font-bold">
                📈 Full tokenomics reveal coming with launch announcement!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;