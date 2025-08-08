import React, { useState, useEffect } from 'react';
import { Wallet, CheckCircle, AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<{ publicKey: { toString: () => string } }>;
      disconnect: () => Promise<void>;
      publicKey?: { toString: () => string };
      isConnected?: boolean;
    };
  }
}

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Check if wallet is already connected
    if (window.solana?.isConnected && window.solana?.publicKey) {
      setIsConnected(true);
      setWalletAddress(window.solana.publicKey.toString());
    }
  }, []);

  const connectWallet = async () => {
    if (!window.solana) {
      // Check if we're on mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Try to open Phantom app directly, fallback to app store
        const phantomDeepLink = 'https://phantom.app/ul/browse/https%3A//euphonious-rolypoly-062114.netlify.app?ref=https%3A//euphonious-rolypoly-062114.netlify.app';
        window.location.href = phantomDeepLink;
        
        // Show user-friendly message
        setTimeout(() => {
          setError('Opening Phantom app... If it doesn\'t open, please install Phantom from your app store.');
        }, 1000);
      } else {
        setError('Phantom wallet not found! Please install Phantom wallet.');
        window.open('https://phantom.app/', '_blank');
      }
      return;
    }

    try {
      setIsConnecting(true);
      setError('');
      
      const response = await window.solana.connect();
      const address = response.publicKey.toString();
      
      setIsConnected(true);
      setWalletAddress(address);
      
      // Show success message
      alert(`🐸 Welcome to the swamp, frog! 🐸\n\nWallet connected: ${address.slice(0, 4)}...${address.slice(-4)}`);
      
    } catch (err) {
      let errorMessage = 'Failed to connect wallet. Please try again.';
      
      if (err instanceof Error) {
        if (err.message.includes('User rejected')) {
          errorMessage = 'Connection cancelled. Please try again when ready to connect.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
      console.error('Wallet connection error:', err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect();
      }
      setIsConnected(false);
      setWalletAddress('');
      setError('');
    } catch (err) {
      console.error('Wallet disconnect error:', err);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-green-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Connect Your Wallet 🔗
        </h2>
        <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Ready to hop into the PEPUMP ecosystem? Connect your Phantom wallet!
        </p>
        
        <div className="bg-green-700 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 max-w-md mx-auto">
          <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">👛</div>
          {walletAddress ? (
            <div>
              <p className="text-green-100 mb-3 sm:mb-4 text-sm sm:text-base">Connected! 🎉</p>
              <p className="text-xs sm:text-sm text-green-200 mb-3 sm:mb-4 font-mono break-all">
                {walletAddress}
              </p>
              <button
                onClick={disconnectWallet}
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 text-sm sm:text-base active:scale-95"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <div>
              <p className="text-green-100 mb-3 sm:mb-4 text-sm sm:text-base">No wallet connected</p>
              <button
                onClick={connectWallet}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Connect Phantom 👻
              </button>
            </div>
          )}
          
          {error && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-400 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                <p className="text-red-100 text-xs sm:text-sm">{error}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-green-100">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-2">🔒</div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Secure</h3>
            <p className="text-xs sm:text-sm">Your wallet, your keys</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-2">⚡</div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Fast</h3>
            <p className="text-xs sm:text-sm">Lightning quick transactions</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-2">🌍</div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Global</h3>
            <p className="text-xs sm:text-sm">Trade from anywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
};