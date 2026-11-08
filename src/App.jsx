import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import Arcade from './pages/Arcade';
import CreatorTools from './pages/CreatorTools';
import GameDetails from './pages/GameDetails';
import CustomGames from './pages/CustomGames';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import NotFound from './pages/NotFound';

export default function App() {
  return <BrowserRouter>
    <Routes><Route element={<SiteLayout />}>
      <Route index element={<Home />} />
      <Route path="arcade" element={<Arcade />} />
      <Route path="tools" element={<CreatorTools />} />
      <Route path="games/:slug" element={<GameDetails />} />
      <Route path="custom-games" element={<CustomGames />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Route></Routes>
  </BrowserRouter>;
}
