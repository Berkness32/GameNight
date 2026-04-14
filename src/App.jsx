import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Magic from './pages/Magic';
import Warhammer from './pages/Warhammer';
import CommunityGames from './pages/CommunityGames';
import LocalStores from './pages/LocalStores';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magic" element={<Magic />} />
        <Route path="/warhammer" element={<Warhammer />} />
        <Route path="/community-games" element={<CommunityGames />} />
        <Route path="/local-stores" element={<LocalStores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
