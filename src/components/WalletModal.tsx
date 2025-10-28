import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { WalletAdapter, getWalletInstallUrl } from '../utils/wallet';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableWallets: WalletAdapter[];
  onConnect: (adapter: WalletAdapter) => void;
  isConnecting: boolean;
  error: string | null;
}

export const WalletModal = ({
  isOpen,
  onClose,
  availableWallets,
  onConnect,
  isConnecting,
  error,
}: WalletModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-gray-900 p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Connect Wallet</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 p-3"
              >
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  <p className="text-sm">{error}</p>
                </div>
              </motion.div>
            )}

            {/* Wallet Options */}
            <div className="space-y-3">
              {availableWallets.length > 0 ? (
                availableWallets.map((wallet) => (
                  <Button
                    key={wallet.name}
                    onClick={() => onConnect(wallet)}
                    disabled={isConnecting}
                    className="w-full justify-start gap-3 bg-gray-800 p-4 text-left hover:bg-gray-700"
                    variant="ghost"
                  >
                    <span className="text-2xl">{wallet.icon}</span>
                    <div>
                      <p className="font-semibold text-white">{wallet.name}</p>
                      <p className="text-sm text-gray-400">
                        {isConnecting ? 'Connecting...' : 'Connect to your wallet'}
                      </p>
                    </div>
                  </Button>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-4">No wallets detected</p>
                  <p className="text-sm text-gray-500 mb-6">
                    Install a supported wallet to continue
                  </p>
                  
                  {/* Install Wallet Options */}
                  <div className="space-y-2">
                    <Button
                      onClick={() => window.open(getWalletInstallUrl('Phantom'), '_blank')}
                      className="w-full justify-between bg-purple-600 hover:bg-purple-700"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">👻</span>
                        <span>Install Phantom</span>
                      </div>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      onClick={() => window.open(getWalletInstallUrl('MetaMask'), '_blank')}
                      className="w-full justify-between bg-orange-600 hover:bg-orange-700"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🦊</span>
                        <span>Install MetaMask</span>
                      </div>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By connecting a wallet, you agree to our Terms of Service
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
