import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo proyecto: ${form.project || 'Consulta'}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nTipo: ${form.project}\n\nMensaje:\n${form.message}`
    );
    window.open(`mailto:casacastillo712@hotmail.com?subject=${subject}&body=${body}`, '_self');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3>¡Mensaje Enviado!</h3>
        <p>Te responderemos lo antes posible.</p>
        <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => setSent(false)}>
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
      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
        Solicitar Presupuesto
      </button>
    </form>
  );
}
