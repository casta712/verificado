import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataDeletion from './pages/DataDeletion';

function App() {
  return (
    <div className="app">
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>Bienhecha</Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/#servicios" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500' }}>Servicios</Link>
            <Link to="/#sobre-nosotros" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500' }}>Sobre Nosotros</Link>
            <Link to="/#contacto" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '500' }}>Contacto</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/eliminacion-datos" element={<DataDeletion />} />
      </Routes>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4 className="mb-4">Bienhecha</h4>
              <p className="text-muted">Transformando la gestión de servicios con inteligencia y elegancia.</p>
            </div>
            <div>
              <h4 className="mb-4">Enlaces</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
                <li><Link to="/#servicios" style={{ color: 'inherit', textDecoration: 'none' }}>Servicios</Link></li>
                <li><Link to="/#sobre-nosotros" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Nosotros</Link></li>
                <li><Link to="/#contacto" style={{ color: 'inherit', textDecoration: 'none' }}>Contacto</Link></li>
              </ul>
            </div>
          </div>
          <div className="legal-info">
            <div>© 2024 Bienhecha Servicios Profesionales S.L. Todos los derechos reservados.</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link to="/politica-privacidad" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidad</Link>
              <Link to="/eliminacion-datos" style={{ color: 'inherit', textDecoration: 'none' }}>Eliminación de Datos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
