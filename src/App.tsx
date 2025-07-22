// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './pages/Privacy';
import AcrylicRenderTextureCoatings from './pages/services/AcrylicRenderTextureCoatings';
import PolystyreneFinish from './pages/services/PolystyreneFinish';
import VenetianPlasterMicroCement from './pages/services/VenetianPlasterMicroCement';
import PaintingServices from './pages/services/PaintingServices';
import ArchitecturalMouldings from './pages/services/ArchitecturalMouldings';
import ConcreteFinish from './pages/services/ConcreteFinish';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/acrylic-render-texture-coatings" element={<AcrylicRenderTextureCoatings />} />
          <Route path="/services/polystyrene-finish" element={<PolystyreneFinish />} />
          <Route path="/services/venetian-plaster-micro-cement" element={<VenetianPlasterMicroCement />} />
          <Route path="/services/painting-services" element={<PaintingServices />} />
          <Route path="/services/architectural-mouldings" element={<ArchitecturalMouldings />} />
          <Route path="/services/concrete-finish" element={<ConcreteFinish />} />
          {/* Add other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;