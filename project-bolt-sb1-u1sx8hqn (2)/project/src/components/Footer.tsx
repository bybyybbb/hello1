import React from 'react';
import { MessageCircle, Twitter, Users, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🐸</div>
                <h3 className="text-2xl font-black text-yellow-300">$PEPUMP</h3>
              </div>
              <p className="text-green-200 mb-4">
                The peppiest memecoin in the swamp. Join the frog revolution and hop to the moon!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://x.com/PepePumpGod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://discord.gg/8KJgbDz3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  <Users size={24} />
                </a>
                <a
                  href="https://t.me/+zptz_W7FjWE1NWE0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-yellow-300 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-green-200 hover:text-white transition-colors">About</a></li>
                <li><a href="#roadmap" className="text-green-200 hover:text-white transition-colors">Frogmap</a></li>
                <li><a href="#community" className="text-green-200 hover:text-white transition-colors">Community</a></li>
                <li><a href="#memes" className="text-green-200 hover:text-white transition-colors">Memes</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="font-bold text-yellow-300 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><span className="text-green-400">Whitepaper</span> <span className="text-yellow-300 text-sm">(Soon)</span></li>
                <li><span className="text-green-400">Contract</span> <span className="text-yellow-300 text-sm">(Soon)</span></li>
                <li><span className="text-green-400">Audit</span> <span className="text-yellow-300 text-sm">(Soon)</span></li>
                <li><span className="text-green-400">DEX Tools</span> <span className="text-yellow-300 text-sm">(Soon)</span></li>
              </ul>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <div className="bg-green-800 p-4 rounded-xl mb-4">
              <p className="text-yellow-300 font-bold mb-2">⚠️ IMPORTANT DISCLAIMER ⚠️</p>
              <p className="text-green-200 text-sm">
                $PEPUMP is a meme token created for entertainment purposes. Not financial advice. 
                Just frogs having fun. DYOR and never invest more than you can afford to lose. 
                Remember: We're all just frogs in a pond. 🐸
              </p>
            </div>
            
            <div className="text-green-400 text-sm">
              <p>&copy; 2025 $PEPUMP. All rights reserved to the swamp.</p>
              <p className="mt-2">Built with 💚 by the frog community</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;