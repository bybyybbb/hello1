import React from 'react';

const Roadmap = () => {
  const roadmapItems = [
    { phase: "Swamp Birth", emoji: "🥚", description: "Project conception and initial memes", status: "complete" },
    { phase: "Meme Takeover", emoji: "🐸", description: "Community building and viral marketing", status: "current" },
    { phase: "Token Launch", emoji: "🚀", description: "Official $PEPUMP token deployment", status: "upcoming" },
    { phase: "CEX Listings", emoji: "📈", description: "Major exchange partnerships", status: "upcoming" },
    { phase: "NFT Drops", emoji: "🎨", description: "Exclusive Pepe NFT collection", status: "upcoming" },
    { phase: "Global Frog Domination", emoji: "🌍", description: "World conquest through memes", status: "upcoming" }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-green-800 mb-12">
            Frogmap 🗺️
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  item.status === 'complete' ? 'bg-green-500 text-white' :
                  item.status === 'current' ? 'bg-yellow-400 text-green-800' :
                  'bg-white border-2 border-green-300 text-green-800'
                }`}
              >
                <div className="text-4xl mb-4 text-center">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{item.phase}</h3>
                <p className={`text-center ${
                  item.status === 'complete' ? 'text-green-100' :
                  item.status === 'current' ? 'text-green-700' :
                  'text-gray-600'
                }`}>
                  {item.description}
                </p>
                
                {item.status === 'complete' && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
                    ✅
                  </div>
                )}
                
                {item.status === 'current' && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    🔥
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;