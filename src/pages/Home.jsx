import React from 'react';
import heroImg from '../assets/hero.png';
import serviceImg from '../assets/service.png';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section animate-fade-in" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 className="mb-4">Calidad en cada <span className="text-primary">Reserva</span></h1>
              <p className="mb-8" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                Bienhecha ofrece soluciones inteligentes para la gestión de citas y servicios automáticos. Optimizamos tu tiempo con tecnología de vanguardia.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contacto" className="btn btn-primary">Empieza Ahora</a>
                <a href="#servicios" className="btn" style={{ border: '1px solid var(--border)' }}>Ver Servicios</a>
              </div>
            </div>
            <div>
              <img src={heroImg} alt="Professional Office" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-8">Nuestros Servicios</h2>
          <div className="grid-3">
            <div className="card">
              <h3 className="mb-4">Automatización de Reservas</h3>
              <p className="text-muted">Sincronización en tiempo real con Google Calendar y WhatsApp para una gestión sin errores.</p>
            </div>
            <div className="card">
              <h3 className="mb-4">Chatbots Inteligentes</h3>
              <p className="text-muted">Asistentes virtuales disponibles 24/7 para atender a tus clientes de manera personalizada.</p>
            </div>
            <div className="card">
              <h3 className="mb-4">Gestión de Clientes</h3>
              <p className="text-muted">Base de datos centralizada para conocer mejor a tus clientes y ofrecer un servicio premium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <img src={serviceImg} alt="Technology Concept" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div>
              <h2 className="mb-4">Compromiso con la Excelencia</h2>
              <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                En Bienhecha, creemos que la tecnología debe estar al servicio de las personas. Nuestra misión es simplificar la operativa diaria de los negocios locales.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                Con años de experiencia en automatización, hemos desarrollado herramientas que no solo ahorran tiempo, sino que mejoran la experiencia final del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Verification Section */}
      <section id="contacto" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <h2 className="mb-8 text-center">Información de Contacto</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 className="mb-4">Detalles Legales</h4>
                <p><strong>Razón Social:</strong> Bienhecha Servicios Profesionales S.L.</p>
                <p><strong>Dirección:</strong> Calle de la Innovación 42, 28001 Madrid, España</p>
              </div>
              <div>
                <h4 className="mb-4">Contacto Directo</h4>
                <p><strong>Teléfono:</strong> +34 912 345 678</p>
                <p><strong>Email:</strong> hola@bienhecha.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
