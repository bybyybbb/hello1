import React, { useState, useEffect } from 'react';
import { Wallet, CheckCircle, AlertCircle, Zap, Sparkles } from 'lucide-react';

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
  const [showSuccess, setShowSuccess] = useState(false);

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
        // Create a proper deep link for Phantom with connection request
        const currentUrl = encodeURIComponent(window.location.href);
        const appName = encodeURIComponent('PEPUMP');
        
        // Use Phantom's universal link format for connection
        const phantomConnectLink = `https://phantom.app/ul/v1/connect?app_url=${currentUrl}&cluster=mainnet-beta&redirect_link=${currentUrl}`;
        
        setIsConnecting(true);
        setError('');
        
        // Open Phantom with connection request
        window.location.href = phantomConnectLink;
        
        // Set a timeout to check connection status
        setTimeout(() => {
          if (window.solana?.isConnected) {
            setIsConnected(true);
            setWalletAddress(window.solana.publicKey?.toString() || '');
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
          } else {
            setError('Connection timeout. Please try again or install Phantom wallet.');
          }
          setIsConnecting(false);
        }, 5000);
        
        return;
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
      setShowSuccess(true);
      
      // Show success message
      setTimeout(() => {
        alert(`🐸 Welcome to the swamp, frog! 🐸\n\nWallet connected: ${address.slice(0, 4)}...${address.slice(-4)}`);
        setShowSuccess(false);
      }, 1000);
      
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-green-800 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full opacity-25 animate-pulse"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 animate-bounce">
          <Sparkles className="w-16 h-16 mx-auto text-yellow-300 animate-pulse" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-4 sm:mb-6 animate-pulse">
          Connect Your Wallet 🔗
        </h2>
        <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 animate-fade-in">
          Ready to hop into the PEPUMP ecosystem? Connect your Phantom wallet and join the revolution!
        </p>
        
        <div className="bg-gradient-to-br from-green-700/80 to-purple-700/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 max-w-md mx-auto border border-green-400/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105">
          <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-wiggle">
            {isConnected ? '🎉' : '👛'}
          </div>
          
          {showSuccess && (
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center animate-pulse">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-white mx-auto mb-4 animate-bounce" />
                <p className="text-white font-bold text-xl">Connected! 🐸</p>
              </div>
            </div>
          )}
          
          {walletAddress ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 animate-pulse" />
                <p className="text-green-100 font-bold text-sm sm:text-base">Wallet Connected! 🎉</p>
              </div>
              <div className="bg-black/30 rounded-xl p-4 border border-green-400/50">
                <p className="text-xs sm:text-sm text-green-200 mb-2 font-mono break-all">
                  {formatAddress(walletAddress)}
                </p>
                <div className="flex items-center justify-center space-x-2 text-green-300">
                  <Zap className="w-4 h-4 animate-pulse" />
                  <span className="text-xs">Ready to trade!</span>
                </div>
              </div>
              <button
                onClick={disconnectWallet}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/30"
              >
                Disconnect Wallet
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-green-100 mb-4 text-sm sm:text-base">
                {isConnecting ? 'Connecting to Phantom...' : 'No wallet connected'}
              </p>
              
              {isConnecting && (
                <div className="flex justify-center mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
                </div>
              )}
              
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <span>Connect Phantom</span>
                  <span className="text-2xl animate-bounce">👻</span>
                </div>
              </button>
              
              <p className="text-xs text-purple-200 opacity-75">
                On mobile? Tap to open Phantom app and connect!
              </p>
            </div>
          )}
          
          {error && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-400 rounded-lg backdrop-blur-sm animate-shake">
              <div className="flex items-center">
                <AlertCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 animate-pulse" />
                <p className="text-red-100 text-xs sm:text-sm">{error}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-green-100">
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl mb-2 group-hover:animate-bounce">🔒</div>
            <h3 className="font-bold mb-2 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Secure</h3>
            <p className="text-xs sm:text-sm opacity-80">Your wallet, your keys</p>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl mb-2 group-hover:animate-pulse">⚡</div>
            <h3 className="font-bold mb-2 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Fast</h3>
            <p className="text-xs sm:text-sm opacity-80">Lightning quick transactions</p>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl mb-2 group-hover:animate-spin">🌍</div>
            <h3 className="font-bold mb-2 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Global</h3>
            <p className="text-xs sm:text-sm opacity-80">Trade from anywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
};