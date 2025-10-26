export interface PresaleConfig {
  tokenName: string;
  tokenSymbol: string;
  logoUrl: string;
  pricePerToken: number;
  totalSupply: number;
  soldAmount: number;
  endDate: Date;
  primaryColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface RaikuJob {
  id: string;
  status: 'pending' | 'scheduled' | 'completed' | 'failed';
  txHash?: string;
  timestamp: Date;
}
