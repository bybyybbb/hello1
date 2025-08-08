import React from 'react';
import { Clock, Zap } from 'lucide-react';
import WalletConnect from './WalletConnect';

const HowToBuy = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Connect Wallet",
      description: "Connect your Phantom or Solflare wallet"
    },
    {
      number: "2️⃣", 
      title: "Swap SOL",
      description: "Exchange SOL for $PEPUMP tokens"
    },
    {
      number: "3️⃣",
      title: "Join the Swamp",
      description: "Welcome to the frog army! 🐸"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-800 mb-3 sm:mb-4">
          How to Buy 💸
        </h2>
        
        <p className="text-lg sm:text-xl text-green-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Ready to join the frog army? Here's how to get your $PEPUMP tokens!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-transparent hover:border-green-200"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">{step.title}</h3>
              <p className="text-green-600 text-xs sm:text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-green-100 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">🚨 Important Notice</h3>
            <p className="text-green-700 mb-3 sm:mb-4 text-sm sm:text-base">
              $PEPUMP is launching soon! Get ready to hop into the most exciting meme coin adventure.
            </p>
            <button
              onClick={() => {
                const email = prompt('🐸 Enter your email to get notified when $PEPUMP launches!');
                if (email && email.includes('@')) {
                  alert(`Thanks for joining the frog army! 🐸\n\nWe'll notify ${email} as soon as $PEPUMP is live!\n\nMake sure to join our Telegram for instant updates! 📱`);
                } else if (email) {
                  alert("Please enter a valid email address! 📧");
                }
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <Zap size={20} />
              Get Launch Alert 🚀
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <WalletConnect />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;