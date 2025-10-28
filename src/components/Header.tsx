import { motion } from 'framer-motion';
import { ChevronRight, Wallet, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { WalletModal } from './WalletModal';
import { useWallet } from '../hooks/use-wallet';

export const Header = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const {
    isConnected,
    formattedAddress,
    walletName,
    isConnecting,
    error,
    availableWallets,
    connect,
    disconnect,
    clearError,
  } = useWallet();

  const handleConnectClick = () => {
    clearError();
    setIsWalletModalOpen(true);
  };

  const handleWalletConnect = async (adapter: any) => {
    await connect(adapter);
    setIsWalletModalOpen(false);
  };

  const handleDisconnect = async () => {
    await disconnect();
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontStyle: 'italic' }}>
              XALEZ
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
              TECHNOLOGY
            </a>
            
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
              DEVELOPERS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
              ABOUT
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600 text-sm font-medium tracking-wide uppercase px-4 py-2 rounded-md"
            >
              DOCS
            </Button>
            
            {!isConnected ? (
              <Button 
                onClick={handleConnectClick}
                disabled={isConnecting}
                className="bg-white text-gray-900 hover:bg-gray-100 text-sm font-medium tracking-wide uppercase px-4 py-2 rounded-md flex items-center gap-2"
              >
                <Wallet className="h-4 w-4" />
                {isConnecting ? 'CONNECTING...' : 'CONNECT WALLET'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800 border border-gray-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-white font-mono">{formattedAddress}</span>
                  <span className="text-xs text-gray-400">{walletName}</span>
                </div>
                <Button
                  onClick={handleDisconnect}
                  variant="outline"
                  size="sm"
                  className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Wallet Connection Modal */}
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        availableWallets={availableWallets}
        onConnect={handleWalletConnect}
        isConnecting={isConnecting}
        error={error}
      />
    </>
  );
};
