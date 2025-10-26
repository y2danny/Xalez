import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Loader2, CheckCircle2, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { PresaleConfig } from '../types';
import { simulateRaikuJob, formatTokenAmount, calculateProgress } from '../utils/raiku';

interface PresaleWidgetProps {
  config: PresaleConfig;
}

export const PresaleWidget = ({ config }: PresaleWidgetProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [txSuccess, setTxSuccess] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(config.endDate);
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeRemaining('Sale Ended');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [config.endDate]);

  const handleConnect = () => {
    setIsConnected(true);
    setWalletAddress('0x' + Math.random().toString(16).substr(2, 40));
  };

  const handleBuyTokens = async () => {
    if (!amount || parseFloat(amount) <= 0) return;

    setIsProcessing(true);
    setTxSuccess(false);

    try {
      await simulateRaikuJob(parseFloat(amount), walletAddress);
      setTxSuccess(true);
      setTimeout(() => {
        setTxSuccess(false);
        setAmount('');
      }, 5000);
    } catch (error) {
      console.error('Transaction failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const progress = calculateProgress(config.soldAmount, config.totalSupply);
  const tokensRemaining = config.totalSupply - config.soldAmount;

  return (
    <Card
      className="w-full max-w-md overflow-hidden border-white/10"
      style={{
        background: `linear-gradient(135deg, ${config.gradientFrom}, ${config.gradientTo})`,
      }}
    >
      <div className="glass-panel p-6">
        <div className="mb-6 flex items-center gap-3">
          {config.logoUrl && (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <img
                src={config.logoUrl}
                alt={config.tokenName}
                className="h-8 w-8 rounded-full"
              />
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold">{config.tokenName}</h2>
            <p className="text-sm text-white/70">{config.tokenSymbol} Token Sale</p>
          </div>
        </div>

        <div className="mb-6 rounded-lg bg-black/20 p-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-white/70">Sale Progress</span>
            <span className="font-semibold">{progress.toFixed(1)}%</span>
          </div>
          <Progress value={progress} className="mb-2 h-2" />
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>{formatTokenAmount(config.soldAmount)} sold</span>
            <span>{formatTokenAmount(tokensRemaining)} remaining</span>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-black/20 p-3">
            <p className="mb-1 text-xs text-white/70">Price per Token</p>
            <p className="text-lg font-bold">${config.pricePerToken}</p>
          </div>
          <div className="rounded-lg bg-black/20 p-3">
            <p className="mb-1 text-xs text-white/70">Time Remaining</p>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <p className="text-sm font-semibold">{timeRemaining}</p>
            </div>
          </div>
        </div>

        {!isConnected ? (
          <Button
            onClick={handleConnect}
            className="w-full bg-white text-black hover:bg-white/90"
            size="lg"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="rounded-lg bg-black/20 p-3">
              <p className="mb-1 text-xs text-white/70">Connected Wallet</p>
              <p className="font-mono text-sm">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Amount to Purchase</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 border-white/20 bg-black/20 text-white placeholder:text-white/40"
                  disabled={isProcessing}
                />
                <Button
                  onClick={handleBuyTokens}
                  disabled={isProcessing || !amount || parseFloat(amount) <= 0}
                  className="bg-white text-black hover:bg-white/90"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing
                    </>
                  ) : (
                    'Buy'
                  )}
                </Button>
              </div>
              {amount && parseFloat(amount) > 0 && (
                <p className="text-xs text-white/60">
                  Total: ${(parseFloat(amount) * config.pricePerToken).toFixed(2)}
                </p>
              )}
            </div>

            {txSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg border border-green-500/50 bg-green-500/10 p-4"
              >
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Raiku Job Scheduled!</p>
                    <p className="text-xs text-green-400/80">
                      Transaction will execute deterministically
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-3">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
              <span className="text-xs">⚡</span>
            </div>
            <div>
              <p className="text-xs font-semibold">Powered by Raiku Compute</p>
              <p className="text-xs text-white/60">
                Guaranteed execution with no MEV or front-running
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
