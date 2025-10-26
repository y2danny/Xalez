import { RaikuJob } from '../types';

export const simulateRaikuJob = async (
  _tokenAmount: number,
  _walletAddress: string
): Promise<RaikuJob> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const job: RaikuJob = {
        id: `raiku_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        status: 'scheduled',
        txHash: `0x${Math.random().toString(16).substr(2, 64)}`,
        timestamp: new Date(),
      };
      resolve(job);
    }, 1500);
  });
};

export const formatTokenAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const calculateProgress = (sold: number, total: number): number => {
  return Math.min((sold / total) * 100, 100);
};
