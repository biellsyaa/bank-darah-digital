import React, { useState, useEffect } from 'react';
import BottomNav from './components/navbar/BottomNav';
import DonorsPage from './pages/DonorsPage';
import DonorDetailPage from './pages/DonorDetailPage';
import StocksPage from './pages/StocksPage';
import StockDetailPage from './pages/StockDetailPage';
import ProfilePage from './pages/ProfilePage';
import SplashScreen from './pages/SplashScreen';
import InstallPWA from './components/InstallPWA';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('donors');
  const [selectedDonorId, setSelectedDonorId] = useState(null);
  const [selectedStockId, setSelectedStockId] = useState(null);

  // Splash screen ALWAYS shows on every refresh
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 2s
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedDonorId(null);
    setSelectedStockId(null);
  };

  const handleDonorClick = (donorId) => {
    setSelectedDonorId(donorId);
    setCurrentPage('donor-detail');
  };

  const handleStockClick = (stockId) => {
    setSelectedStockId(stockId);
    setCurrentPage('stock-detail');
  };

  const handleBack = () => {
    if (currentPage === 'donor-detail') {
      setCurrentPage('donors');
      setSelectedDonorId(null);
    } else if (currentPage === 'stock-detail') {
      setCurrentPage('stocks');
      setSelectedStockId(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'donors':
        return <DonorsPage onDonorClick={handleDonorClick} />;
      case 'donor-detail':
        return <DonorDetailPage donorId={selectedDonorId} onBack={handleBack} />;
      case 'stocks':
        return <StocksPage onStockClick={handleStockClick} />;
      case 'stock-detail':
        return <StockDetailPage stockId={selectedStockId} onBack={handleBack} />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <DonorsPage onDonorClick={handleDonorClick} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="min-h-screen">{renderPage()}</main>

      <InstallPWA />
      
      {!currentPage.includes('detail') && (
        <BottomNav currentPage={currentPage} onNavigate={handleNavigation} />
      )}
    </div>
  );
}

export default App;
