// Wallet connection utilities for Phantom and other wallets

export interface WalletAdapter {
  name: string;
  icon: string;
  connect: () => Promise<string>;
  disconnect: () => Promise<void>;
  isInstalled: () => boolean;
}

// Phantom Wallet Adapter
export const phantomAdapter: WalletAdapter = {
  name: 'Phantom',
  icon: '👻',
  
  isInstalled(): boolean {
    return typeof window !== 'undefined' && 'solana' in window && !!window.solana?.isPhantom;
  },
  
  async connect(): Promise<string> {
    if (!this.isInstalled()) {
      throw new Error('Phantom wallet is not installed');
    }
    
    try {
      if (!window.solana) {
        throw new Error('Phantom wallet not found');
      }
      const response = await window.solana.connect();
      return response.publicKey.toString();
    } catch (error) {
      throw new Error('Failed to connect to Phantom wallet');
    }
  },
  
  async disconnect(): Promise<void> {
    if (window.solana) {
      await window.solana.disconnect();
    }
  }
};

// MetaMask Adapter (for Ethereum)
export const metamaskAdapter: WalletAdapter = {
  name: 'MetaMask',
  icon: '🦊',
  
  isInstalled(): boolean {
    return typeof window !== 'undefined' && 'ethereum' in window && !!window.ethereum?.isMetaMask;
  },
  
  async connect(): Promise<string> {
    if (!this.isInstalled()) {
      throw new Error('MetaMask is not installed');
    }
    
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask not found');
      }
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    } catch (error) {
      throw new Error('Failed to connect to MetaMask');
    }
  },
  
  async disconnect(): Promise<void> {
    // MetaMask doesn't have a programmatic disconnect
    // Users need to disconnect manually from the extension
  }
};

// Available wallet adapters
export const walletAdapters = [phantomAdapter, metamaskAdapter];

// Get installed wallets
export const getInstalledWallets = (): WalletAdapter[] => {
  return walletAdapters.filter(adapter => adapter.isInstalled());
};

// Get wallet installation URLs
export const getWalletInstallUrl = (walletName: string): string => {
  const urls: Record<string, string> = {
    'Phantom': 'https://phantom.app/',
    'MetaMask': 'https://metamask.io/',
  };
  return urls[walletName] || '#';
};

// Wallet connection state management
export interface WalletState {
  isConnected: boolean;
  address: string | null;
  walletName: string | null;
}

// Format wallet address for display
export const formatWalletAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

// Validate wallet address formats
export const isValidSolanaAddress = (address: string): boolean => {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
};

export const isValidEthereumAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// Type declarations for window objects
declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<{ publicKey: { toString: () => string } }>;
      disconnect: () => Promise<void>;
    };
    ethereum?: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
    };
  }
}
