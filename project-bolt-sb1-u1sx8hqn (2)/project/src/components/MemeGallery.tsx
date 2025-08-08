import React from 'react';
import { Upload, Trophy, Star } from 'lucide-react';

const MemeGallery = () => {
  const memes = [
    { id: 1, emoji: "🐸", text: "HODL THE FROG" },
    { id: 2, emoji: "🚀", text: "TO THE SWAMP" },
    { id: 3, emoji: "💎", text: "DIAMOND HANDS" },
    { id: 4, emoji: "🌙", text: "PEPUMP MOON" },
    { id: 5, emoji: "🔥", text: "THIS IS FINE" },
    { id: 6, emoji: "⚡", text: "FROG ENERGY" },
    { id: 7, emoji: "🎯", text: "BULLSEYE PUMP" },
    { id: 8, emoji: "🎪", text: "CIRCUS MODE" },
  ];

  const handleMemeSubmit = () => {
    // Show submission instructions and open Telegram
    const confirmed = confirm(
      "🐸 Ready to submit your epic meme? 🐸\n\n" +
      "Click OK to join our Telegram channel where you can:\n" +
      "• Share your $PEPUMP memes\n" +
      "• Enter the meme contest\n" +
      "• Win 1000 tokens for the best meme!\n\n" +
      "Let's make some frog magic! 🎨✨"
    );
    
    if (confirmed) {
      window.open('https://t.me/+zptz_W7FjWE1NWE0', '_blank');
    }
  };

  const handleMemeClick = (meme: any) => {
    // Create a more interactive meme response
    const responses = [
      "This meme is absolutely BASED! 🔥",
      "Peak frog energy detected! ⚡",
      "Meme level: LEGENDARY! 🏆",
      "This one's going straight to the moon! 🚀",
      "Pure degen art! 🎨",
      "Frog approved! ✅"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    alert(`${meme.emoji} ${meme.text} ${meme.emoji}\n\n${randomResponse}\n\nShare this energy in our Telegram! 🐸`);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-800 mb-3 sm:mb-4">
          Meme Gallery 🎨
        </h2>
        
        <p className="text-lg sm:text-xl text-green-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Check out the most ribbit-ing memes from our frog community!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {memes.map((meme) => (
            <div
              key={meme.id}
              onClick={() => handleMemeClick(meme)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <div className="p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl text-center mb-3 sm:mb-4 animate-bounce">
                  {meme.emoji}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">{meme.text}</h3>
                <p className="text-green-600 text-xs sm:text-sm">Click to interact! 🐸</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={handleMemeSubmit}
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Upload size={20} />
            Submit Your Meme 📸
          </button>
        </div>
        
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-6 rounded-xl text-center shadow-xl">
          <div className="flex justify-center mb-2">
            <Trophy className="text-yellow-300" size={24} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">🏆 Meme Contest Active!</h3>
          <p className="text-green-100 text-sm sm:text-base">
            Best $PEPUMP meme wins 1000 tokens! Submit your creation to our Telegram.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemeGallery;