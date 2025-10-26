import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface CodePreviewProps {
  tokenSymbol: string;
}

export const CodePreview = ({ tokenSymbol }: CodePreviewProps) => {
  const [copied, setCopied] = useState(false);

  const iframeCode = `<iframe
  src="${window.location.origin}/demo?token=${tokenSymbol}"
  width="400"
  height="600"
  frameborder="0"
  style="border-radius: 16px; overflow: hidden;"
></iframe>`;

  const reactCode = `import { PresaleWidget } from '@raiku/presale-kit';

function App() {
  return (
    <PresaleWidget
      tokenName="${tokenSymbol}"
      tokenSymbol="${tokenSymbol}"
      pricePerToken={0.5}
      totalSupply={1000000}
      endDate={new Date('2025-12-31')}
    />
  );
}`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full border-white/10 bg-card/50 backdrop-blur-sm">
      <div className="p-6">
        <div className="mb-6 flex items-center gap-2">
          <Code className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-bold">Embed Code</h3>
        </div>

        <Tabs defaultValue="iframe" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="iframe">iFrame</TabsTrigger>
            <TabsTrigger value="react">React Component</TabsTrigger>
          </TabsList>

          <TabsContent value="iframe" className="space-y-4">
            <div className="relative">
              <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm">
                <code className="text-green-400">{iframeCode}</code>
              </pre>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleCopy(iframeCode)}
                className="absolute right-2 top-2 h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Copy this code and paste it into your HTML to embed the presale widget.
            </p>
          </TabsContent>

          <TabsContent value="react" className="space-y-4">
            <div className="relative">
              <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm">
                <code className="text-green-400">{reactCode}</code>
              </pre>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleCopy(reactCode)}
                className="absolute right-2 top-2 h-8 w-8 p-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Install the package: <code className="rounded bg-black/40 px-1 py-0.5">npm install @raiku/presale-kit</code>
            </p>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4"
        >
          <p className="text-xs text-blue-300">
            <strong>Note:</strong> This is an MVP demo. The actual package will be available
            once the Raiku integration is complete.
          </p>
        </motion.div>
      </div>
    </Card>
  );
};
