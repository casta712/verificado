import { useEffect } from 'react';
import ChatDemo from '../components/ChatDemo';
import ProcessSteps from '../components/ProcessSteps';
import ContactForm from '../components/ContactForm';

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Presencia Digital',
    desc: 'Landing pages y webs corporativas con diseño moderno que posicionan tu negocio en internet.',
    features: ['Diseño responsive y moderno', 'Optimización SEO', 'Velocidad de carga premium', 'Adaptada a tu marca'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    title: 'Automatización & Reservas',
    desc: 'Web conectada a un chatbot de WhatsApp inteligente que gestiona citas y las envía a Google Calendar.',
    features: ['Chatbot WhatsApp 24/7', 'Reservas automáticas', 'Sincronización con Google Calendar', 'Recordatorios a clientes'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'E-commerce & Web Apps',
    desc: 'Tiendas online, paneles de administración y aplicaciones web a medida para escalar tu negocio.',
    features: ['Tienda online completa', 'Pasarelas de pago seguras', 'Panel de administración', 'Desarrollo a medida'],
  },
];

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'No solo diseñamos, automatizamos',
    desc: 'Mientras otros hacen webs-folleto, nosotros creamos sistemas que trabajan para ti generando clientes.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Tu negocio trabaja 24/7',
    desc: 'El chatbot atiende, reserva y confirma citas mientras tú descansas. Sin perder un solo cliente.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Código propio, sin plantillas',
    desc: 'Cada proyecto se desarrolla desde cero con tecnología moderna. Rendimiento, seguridad y escalabilidad real.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Soporte continuo',
    desc: 'Mantenimiento, actualizaciones y soporte técnico. Tu web siempre funcionando al máximo.',
  },
];

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="section-dark hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Desarrollo Web & Automatización</span>
            <h1>
              Tu Negocio Abierto <span className="text-primary">24/7</span>
            </h1>
            <p>
              Creamos webs inteligentes con chatbots que captan clientes y gestionan reservas
              automáticamente — mientras tú te dedicas a lo que importa.
            </p>
            <div className="hero-buttons">
              <a href="#demo" className="btn btn-primary">Ver Demo en Vivo</a>
              <a href="#servicios" className="btn btn-outline">Nuestros Servicios</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-light" id="servicios">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <span className="badge" style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.15)' }}>
              Servicios
            </span>
            <h2 style={{ color: 'var(--light-text)' }}>Soluciones a tu Medida</h2>
            <p style={{ color: 'var(--light-muted)', maxWidth: '560px', margin: '1rem auto 0' }}>
              Desde una web corporativa hasta un sistema completo de reservas automatizadas con inteligencia artificial.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className={`service-card reveal reveal-d${i + 1}`}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="#contacto" className="btn btn-outline-dark" style={{ width: '100%' }}>
                  Solicitar Presupuesto
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO ── */}
      <section className="section-dark" id="demo" style={{ padding: '7rem 0' }}>
        <div className="container">
          <ChatDemo />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-light" id="proceso">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <span className="badge" style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.15)' }}>
              Proceso
            </span>
            <h2 style={{ color: 'var(--light-text)' }}>Así de Simple</h2>
            <p style={{ color: 'var(--light-muted)', maxWidth: '480px', margin: '1rem auto 0' }}>
              Desde que el cliente te descubre hasta que la cita está en tu calendario.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-gradient" id="diferencia">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <span className="badge">Diferencia</span>
            <h2>¿Por Qué Elegirnos?</h2>
            <p className="text-muted-dark" style={{ maxWidth: '520px', margin: '1rem auto 0' }}>
              No somos una agencia más. Combinamos diseño, desarrollo y automatización para darte resultados reales.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className={`feature-card reveal reveal-d${i + 1}`}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section-dark" id="contacto" style={{ padding: '7rem 0' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="badge">Contacto</span>
              <h2>¿Listo para Empezar?</h2>
              <p>
                Cuéntanos tu proyecto y te preparamos un presupuesto personalizado sin compromiso.
              </p>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Teléfono</strong>
                  <span>643 463 856</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>casacastillo712@hotmail.com</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong>Respuesta</strong>
                  <span>En menos de 24 horas</span>
                </div>
              </div>
            </div>
            <div className="reveal reveal-d2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER DATOS FISCALES ── */}
      <footer className="section-dark" style={{ padding: '2rem 0', background: '#18181b', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
          <strong>Registro Único Tributario:</strong> Fren Alejandro Castaño Castillo<br />
          <strong>RUT:</strong> 1130622479-6<br />
          <strong>País:</strong> Colombia<br />
          <strong>Ciudad:</strong> Cali<br />
          <strong>Dirección:</strong> Cl 12 # 31-03 Barrio Colseguros<br />
          <strong>Celular:</strong> +1 6678952541
        </div>
      </footer>
    </main>
  );
}
