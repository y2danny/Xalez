import { useState, useEffect, useCallback } from 'react';
import { WalletAdapter, WalletState, getInstalledWallets, formatWalletAddress } from '../utils/wallet';

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    walletName: null,
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get available wallets
  const availableWallets = getInstalledWallets();

  // Connect to a specific wallet
  const connect = useCallback(async (adapter: WalletAdapter) => {
    setIsConnecting(true);
    setError(null);

    try {
      const address = await adapter.connect();
      setWalletState({
        isConnected: true,
        address,
        walletName: adapter.name,
      });
      
      // Store in localStorage for persistence
      localStorage.setItem('wallet_connection', JSON.stringify({
        address,
        walletName: adapter.name,
      }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to connect wallet';
      setError(errorMessage);
      console.error('Wallet connection error:', err);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  // Disconnect wallet
  const disconnect = useCallback(async () => {
    try {
      // Find the current wallet adapter and disconnect
      const currentAdapter = availableWallets.find(
        adapter => adapter.name === walletState.walletName
      );
      
      if (currentAdapter) {
        await currentAdapter.disconnect();
      }
      
      setWalletState({
        isConnected: false,
        address: null,
        walletName: null,
      });
      
      // Clear from localStorage
      localStorage.removeItem('wallet_connection');
    } catch (err) {
      console.error('Wallet disconnect error:', err);
    }
  }, [walletState.walletName, availableWallets]);

  // Auto-connect on page load if previously connected
  useEffect(() => {
    const savedConnection = localStorage.getItem('wallet_connection');
    if (savedConnection) {
      try {
        const { address, walletName } = JSON.parse(savedConnection);
        const adapter = availableWallets.find(w => w.name === walletName);
        
        if (adapter && adapter.isInstalled()) {
          setWalletState({
            isConnected: true,
            address,
            walletName,
          });
        } else {
          // Clean up invalid saved connection
          localStorage.removeItem('wallet_connection');
        }
      } catch (err) {
        console.error('Error restoring wallet connection:', err);
        localStorage.removeItem('wallet_connection');
      }
    }
  }, [availableWallets]);

  // Format address for display
  const formattedAddress = walletState.address ? formatWalletAddress(walletState.address) : null;

  return {
    // State
    isConnected: walletState.isConnected,
    address: walletState.address,
    walletName: walletState.walletName,
    formattedAddress,
    isConnecting,
    error,
    availableWallets,
    
    // Actions
    connect,
    disconnect,
    
    // Clear error
    clearError: () => setError(null),
  };
};
