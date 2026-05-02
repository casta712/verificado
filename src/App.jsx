import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataDeletion from './pages/DataDeletion';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (id) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMenu}>Bienhecha</Link>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#servicios" onClick={() => scrollTo('servicios')}>Servicios</a>
            <a href="#demo" onClick={() => scrollTo('demo')}>Demo</a>
            <a href="#proceso" onClick={() => scrollTo('proceso')}>Proceso</a>
            <a href="#contacto" onClick={() => scrollTo('contacto')}>Contacto</a>
            <a href="#contacto" onClick={() => scrollTo('contacto')} className="btn btn-primary nav-cta">
              Presupuesto Gratis
            </a>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/eliminacion-datos" element={<DataDeletion />} />
      </Routes>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Link to="/" className="nav-logo">Bienhecha</Link>
              <p>Desarrollo web y automatización inteligente para negocios que quieren crecer.</p>
            </div>
            <div className="footer-links">
              <Link to="/politica-privacidad">Política de Privacidad</Link>
              <Link to="/eliminacion-datos">Eliminación de Datos</Link>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Fren Alejandro Castaño Castillo • RUT: 1130622479-6 • Colombia, Cali • Cl 12 # 31-03 Barrio Colseguros • +1 6678952541

            Bienhecha Servicios Profesionales S.L. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Chatbot Flotante */}
      <ChatbotWidget />
    </div>
  );
}

export default App;
