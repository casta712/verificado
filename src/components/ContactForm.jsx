import { useState } from 'react';

const INITIAL = { name: '', email: '', project: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState({ ...INITIAL });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/casacastillo712@hotmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Nombre: form.name,
          Email: form.email,
          'Tipo de Proyecto': form.project,
          Mensaje: form.message,
          _subject: `Nuevo presupuesto: ${form.project || 'Consulta'}`,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ ...INITIAL });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3>¡Mensaje Enviado!</h3>
        <p>Te responderemos lo antes posible.</p>
        <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => setStatus('idle')}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name">Nombre</label>
        <input id="contact-name" name="name" type="text" placeholder="Tu nombre" required value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" placeholder="tu@email.com" required value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="contact-project">Tipo de Proyecto</label>
        <select id="contact-project" name="project" value={form.project} onChange={handleChange} required>
          <option value="">Selecciona una opción</option>
          <option value="Landing Page">Landing Page</option>
          <option value="Web Corporativa">Web Corporativa</option>
          <option value="Web + Chatbot + Reservas">Web + Chatbot + Reservas</option>
          <option value="E-commerce">E-commerce / Tienda Online</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message">Mensaje</label>
        <textarea id="contact-message" name="message" placeholder="Cuéntanos sobre tu proyecto..." required value={form.message} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Solicitar Presupuesto'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#f43f5e', fontSize: '0.85rem', textAlign: 'center' }}>
          Error al enviar. Inténtalo de nuevo o escríbenos a casacastillo712@hotmail.com
        </p>
      )}
    </form>
  );
}
