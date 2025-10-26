import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  Code, 
  CheckCircle2,
  Star,
  Github,
  ExternalLink,
  Play,
  BarChart3,
  Lock,
  Rocket,
  Globe
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface LandingPageProps {
  onNavigateToDemo: () => void;
}

export const LandingPage = ({ onNavigateToDemo }: LandingPageProps) => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8 inline-block">
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-medium">Powered by Raiku Compute Layer</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Live
                </Badge>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-6xl font-bold leading-tight tracking-tight md:text-8xl"
          >
            Free and Guaranteed
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Token Presales
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-12 max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed"
          >
            Launch fair, transparent, and MEV-resistant token sales with deterministic execution. 
            Built on Raiku's compute layer for guaranteed fairness and fail-safe execution.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              onClick={onNavigateToDemo}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 px-8 py-4 text-lg font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Try Live Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-sm text-muted-foreground">MEV Attacks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">&lt;1s</div>
              <div className="text-sm text-muted-foreground">Execution Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Fair Distribution</div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Raiku-Powered Presales?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge compute technology that eliminates the biggest problems in token sales
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="glass-panel rounded-2xl p-8 transition-all hover:bg-white/10 hover:scale-105"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Deterministic Execution</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Transactions execute exactly when scheduled with guaranteed timing and ordering. 
                No more uncertainty about when your presale will complete.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="glass-panel rounded-2xl p-8 transition-all hover:bg-white/10 hover:scale-105"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">MEV Protection</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Complete protection against MEV attacks and front-running. Every participant 
                gets equal access with provably fair execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="glass-panel rounded-2xl p-8 transition-all hover:bg-white/10 hover:scale-105"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Easy Integration</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Drop-in widget that's fully customizable. Embed in your dApp or website 
                with just a few lines of code. No complex setup required.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="glass-panel rounded-2xl p-8 transition-all hover:bg-white/10 hover:scale-105"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Fail-Safe Execution</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Built-in safety mechanisms ensure your presale completes successfully. 
                Automatic rollback and retry mechanisms for maximum reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="glass-panel rounded-2xl p-8 transition-all hover:bg-white/10 hover:scale-105"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Real-time Analytics</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Comprehensive analytics and reporting. Track participation, 
                distribution patterns, and performance metrics in real-time.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="glass-panel rounded-2xl p-8 transition-all hover:bg-white/10 hover:scale-105"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Multi-Chain Support</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Deploy across multiple blockchains with the same interface. 
                Ethereum, Polygon, Arbitrum, and more supported out of the box.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Integration Showcase */}
        <section className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Integration Made Simple
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in minutes with our comprehensive documentation and examples
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="glass-panel rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-blue-400" />
                Quick Start
              </h3>
              <div className="bg-black/40 rounded-lg p-4 mb-6 font-mono text-sm">
                <div className="text-green-400">// Install the package</div>
                <div className="text-white">npm install @raiku/presale-widget</div>
                <br />
                <div className="text-green-400">// Import and use</div>
                <div className="text-white">import {'{PresaleWidget}'} from '@raiku/presale-widget'</div>
                <br />
                <div className="text-blue-400">&lt;PresaleWidget</div>
                <div className="text-yellow-400 ml-4">config={'{presaleConfig}'}</div>
                <div className="text-blue-400">/&gt;</div>
              </div>
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Documentation
              </Button>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="glass-panel rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="h-6 w-6 text-purple-400" />
                Live Demo
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Experience the power of Raiku-powered presales with our interactive demo. 
                See how easy it is to configure and deploy your own token sale.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Real-time transaction simulation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Customizable branding and colors</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Multiple payment methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Advanced analytics dashboard</span>
                </div>
              </div>
              <Button 
                onClick={onNavigateToDemo}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Play className="mr-2 h-4 w-4" />
                Launch Demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Web3 Builders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of projects already using Raiku-powered presales
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="glass-panel rounded-2xl p-8 text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Raiku's presale framework eliminated all our MEV concerns. The deterministic execution 
                gave us complete confidence in our token launch."
              </p>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">CTO, DeFi Protocol</div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="glass-panel rounded-2xl p-8 text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Integration was seamless. We had our presale live in under an hour. 
                The analytics dashboard provides incredible insights."
              </p>
              <div className="font-semibold">Marcus Rodriguez</div>
              <div className="text-sm text-muted-foreground">Founder, NFT Marketplace</div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="glass-panel rounded-2xl p-8 text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "The fairness guarantees are unmatched. Our community trusted the process 
                completely, leading to a successful $2M raise."
              </p>
              <div className="font-semibold">Alex Thompson</div>
              <div className="text-sm text-muted-foreground">CEO, Gaming DAO</div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="glass-panel rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Launch Your Presale?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the future of fair token distribution. Start building with Raiku-powered presales today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button
                size="lg"
                onClick={onNavigateToDemo}
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 px-8 py-4 text-lg font-semibold"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              >
                <Github className="mr-2 h-5 w-5" />
                View Source Code
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
