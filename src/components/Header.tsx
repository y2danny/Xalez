import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontStyle: 'italic' }}>
            XALEZ
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
            TECHNOLOGY
          </a>
          
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
            DEVELOPERS
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
            ABOUT
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600 text-sm font-medium tracking-wide uppercase px-4 py-2 rounded-md"
          >
            DOCS
          </Button>
          <Button 
            className="bg-white text-gray-900 hover:bg-gray-100 text-sm font-medium tracking-wide uppercase px-4 py-2 rounded-md flex items-center gap-2"
          >
            CONNECT WALLET
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
