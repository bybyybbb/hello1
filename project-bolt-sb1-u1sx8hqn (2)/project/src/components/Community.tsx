import React from 'react';
import { MessageCircle, Twitter, Users } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Join the Frog Army 🐸
          </h2>
          
          <p className="text-green-200 text-xl mb-12">
            Connect with fellow frogs, share memes, and stay updated on the latest $PEPUMP news
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://x.com/PepePumpGod"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <Twitter size={48} className="text-white mx-auto mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-2">Twitter</h3>
              <p className="text-gray-300">Follow for daily memes and updates</p>
              <div className="mt-4 text-blue-400 font-semibold">@PepePumpGod</div>
            </a>
            
            <a
              href="https://discord.gg/8KJgbDz3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <Users size={48} className="text-white mx-auto mb-4 group-hover:text-indigo-200 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-2">Discord</h3>
              <p className="text-indigo-200">Chat with the community 24/7</p>
              <div className="mt-4 text-indigo-200 font-semibold">Join Server</div>
            </a>
            
            <a
              href="https://t.me/+zptz_W7FjWE1NWE0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <MessageCircle size={48} className="text-white mx-auto mb-4 group-hover:text-blue-200 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-2">Telegram</h3>
              <p className="text-blue-200">Get instant notifications</p>
              <div className="mt-4 text-blue-200 font-semibold">Join Channel</div>
            </a>
          </div>
          
          <div className="mt-12 bg-green-700 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">Community Stats 📊</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-green-200">Frogs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-green-200">Daily Memes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-green-200">Based Energy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;