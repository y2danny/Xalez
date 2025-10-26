import { motion } from 'framer-motion';
import { Settings, Palette, Image, Rocket, CheckCircle2, DollarSign, Calendar } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PresaleConfig } from '../types';
import { useState } from 'react';

interface CustomizerProps {
  config: PresaleConfig;
  onConfigChange: (config: PresaleConfig) => void;
}

export const Customizer = ({ config, onConfigChange }: CustomizerProps) => {
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);

  const handleChange = (field: keyof PresaleConfig, value: string | number | Date) => {
    onConfigChange({
      ...config,
      [field]: value,
    });
  };

  const handleDeploy = async () => {
    setIsDeploying(true);
    // Simulate deployment process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDeploying(false);
    setIsDeployed(true);
    
    // Reset after 5 seconds
    setTimeout(() => setIsDeployed(false), 5000);
  };

  const presetGradients = [
    { from: 'rgba(102, 126, 234, 0.8)', to: 'rgba(118, 75, 162, 0.8)', name: 'Blue Purple' },
    { from: 'rgba(79, 172, 254, 0.8)', to: 'rgba(0, 242, 254, 0.8)', name: 'Cyan' },
    { from: 'rgba(34, 193, 195, 0.8)', to: 'rgba(253, 187, 45, 0.8)', name: 'Teal Gold' },
    { from: 'rgba(131, 58, 180, 0.8)', to: 'rgba(253, 29, 29, 0.8)', name: 'Purple Red' },
  ];

  return (
    <Card className="w-full border-white/10 bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        <div className="mb-6 flex items-center gap-2">
          <Settings className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-bold">Customize Widget</h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Image className="h-4 w-4" />
              <span>Token Details</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tokenName">Token Name</Label>
              <Input
                id="tokenName"
                value={config.tokenName}
                onChange={(e) => handleChange('tokenName', e.target.value)}
                placeholder="Enter token name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tokenSymbol">Token Symbol</Label>
              <Input
                id="tokenSymbol"
                value={config.tokenSymbol}
                onChange={(e) => handleChange('tokenSymbol', e.target.value)}
                placeholder="Enter token symbol"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="logoUrl">Logo URL</Label>
              <Input
                id="logoUrl"
                value={config.logoUrl}
                onChange={(e) => handleChange('logoUrl', e.target.value)}
                placeholder="https://example.com/logo.png"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>Pricing & Supply</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="pricePerToken">Price per Token ($)</Label>
                <Input
                  id="pricePerToken"
                  type="number"
                  step="0.01"
                  value={config.pricePerToken}
                  onChange={(e) => handleChange('pricePerToken', parseFloat(e.target.value) || 0)}
                  placeholder="0.50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalSupply">Total Supply</Label>
                <Input
                  id="totalSupply"
                  type="number"
                  value={config.totalSupply}
                  onChange={(e) => handleChange('totalSupply', parseInt(e.target.value) || 0)}
                  placeholder="1000000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="soldAmount">Initial Sold Amount</Label>
              <Input
                id="soldAmount"
                type="number"
                value={config.soldAmount}
                onChange={(e) => handleChange('soldAmount', parseInt(e.target.value) || 0)}
                placeholder="0"
              />
              <p className="text-xs text-muted-foreground">
                Amount of tokens already sold at launch (for ongoing sales)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Sale Period</span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="datetime-local"
                value={config.endDate instanceof Date ? config.endDate.toISOString().slice(0, 16) : ''}
                onChange={(e) => handleChange('endDate', new Date(e.target.value))}
              />
              <p className="text-xs text-muted-foreground">
                When the presale will end
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Palette className="h-4 w-4" />
              <span>Theme Colors</span>
            </div>

            <div className="space-y-3">
              <Label>Color Presets</Label>
              <div className="grid grid-cols-2 gap-2">
                {presetGradients.map((preset) => (
                  <motion.button
                    key={preset.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleChange('gradientFrom', preset.from);
                      handleChange('gradientTo', preset.to);
                    }}
                    className="relative overflow-hidden rounded-lg border border-white/10 p-3 text-left transition-all hover:border-white/30"
                    style={{
                      background: `linear-gradient(135deg, ${preset.from}, ${preset.to})`,
                    }}
                  >
                    <span className="relative z-10 text-xs font-semibold text-white drop-shadow-lg">
                      {preset.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="gradientFrom">Gradient From</Label>
                <div className="flex gap-2">
                  <Input
                    id="gradientFrom"
                    value={config.gradientFrom}
                    onChange={(e) => handleChange('gradientFrom', e.target.value)}
                    placeholder="rgba()"
                    className="flex-1"
                  />
                  <div
                    className="h-10 w-10 rounded border border-white/20"
                    style={{ background: config.gradientFrom }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gradientTo">Gradient To</Label>
                <div className="flex gap-2">
                  <Input
                    id="gradientTo"
                    value={config.gradientTo}
                    onChange={(e) => handleChange('gradientTo', e.target.value)}
                    placeholder="rgba()"
                    className="flex-1"
                  />
                  <div
                    className="h-10 w-10 rounded border border-white/20"
                    style={{ background: config.gradientTo }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Deploy Section */}
          <div className="mt-8 rounded-lg border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-bold">Deploy Your Presale</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Generate embeddable code for your presale widget and deploy to your website or dApp.
            </p>
            
            {!isDeployed ? (
              <Button
                onClick={handleDeploy}
                disabled={isDeploying}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                size="lg"
              >
                {isDeploying ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Deploying...
                  </>
                ) : (
                  <>
                    <Rocket className="mr-2 h-4 w-4" />
                    Deploy Presale
                  </>
                )}
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg border border-green-500/50 bg-green-500/10 p-4"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="font-semibold text-green-400">Presale Deployed!</p>
                    <p className="text-xs text-green-400/80">
                      Copy the embed code to integrate into your project
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
