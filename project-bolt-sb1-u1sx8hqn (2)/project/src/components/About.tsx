import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-green-800 mb-8">
            About $PEPUMP 🐸
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                In the depths of the digital swamp, a legend was born. $PEPUMP isn't just another memecoin – it's the ultimate fusion of Pepe power and crypto chaos.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission? To dominate the memecoin space with unmatched frog energy, community-driven memes, and enough hopium to reach the moon. 🌙
              </p>
              
              <div className="bg-green-100 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">Our Vision:</h3>
                <p className="text-green-700">
                  Building the most based frog community in crypto while bringing maximum meme power to the masses. We're not just pumping tokens – we're pumping dreams.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-6xl animate-bounce">
                  🚀
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-2xl animate-pulse">
                  🔥
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;