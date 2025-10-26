import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Settings2, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { PresaleWidget } from './PresaleWidget';
import { Customizer } from './Customizer';
import { CodePreview } from './CodePreview';
import { PresaleConfig } from '../types';

interface DemoPageProps {
  onNavigateBack: () => void;
}

export const DemoPage = ({ onNavigateBack }: DemoPageProps) => {
  const [activePanel, setActivePanel] = useState<'customize' | 'code'>('customize');
  const [config, setConfig] = useState<PresaleConfig>({
    tokenName: 'Raiku Token',
    tokenSymbol: 'RAIKU',
    logoUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=raiku',
    pricePerToken: 0.5,
    totalSupply: 1000000,
    soldAmount: 450000,
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    primaryColor: '#667eea',
    gradientFrom: 'rgba(102, 126, 234, 0.8)',
    gradientTo: 'rgba(118, 75, 162, 0.8)',
  });

  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Button
              variant="ghost"
              onClick={onNavigateBack}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>

            <div className="mb-8">
              <h1 className="mb-2 text-4xl font-bold">Presale Widget Demo</h1>
              <p className="text-muted-foreground">
                Customize your presale widget and see changes in real-time
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex gap-2">
                <Button
                  variant={activePanel === 'customize' ? 'default' : 'outline'}
                  onClick={() => setActivePanel('customize')}
                  className="flex-1 gap-2"
                >
                  <Settings2 className="h-4 w-4" />
                  Customize
                </Button>
                <Button
                  variant={activePanel === 'code' ? 'default' : 'outline'}
                  onClick={() => setActivePanel('code')}
                  className="flex-1 gap-2"
                >
                  <Code2 className="h-4 w-4" />
                  Get Code
                </Button>
              </div>

              {activePanel === 'customize' ? (
                <Customizer config={config} onConfigChange={setConfig} />
              ) : (
                <CodePreview tokenSymbol={config.tokenSymbol} />
              )}
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-start justify-center"
            >
              <div className="sticky top-24">
                <div className="mb-4 text-center">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Live Preview
                  </p>
                </div>
                <PresaleWidget config={config} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
