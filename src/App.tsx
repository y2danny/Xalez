import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { DemoPage } from './components/DemoPage';
import './App.css';

type Page = 'landing' | 'demo';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('token')) {
      setCurrentPage('demo');
    }
  }, []);

  const navigateToDemo = () => {
    setCurrentPage('demo');
    window.history.pushState({}, '', '/demo');
  };

  const navigateToHome = () => {
    setCurrentPage('landing');
    window.history.pushState({}, '', '/');
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />

      {currentPage === 'landing' ? (
        <LandingPage onNavigateToDemo={navigateToDemo} />
      ) : (
        <DemoPage onNavigateBack={navigateToHome} />
      )}
    </div>
  );
}

export default App;
