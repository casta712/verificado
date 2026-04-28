

function PrivacyPolicy() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        <h1 className="mb-8 text-primary">Política de Privacidad</h1>
        
        <div className="card">
          <h3 className="mb-4">1. Información que recopilamos</h3>
          <p className="mb-4 text-muted">
            En Bienhecha Servicios Profesionales S.L., recopilamos información personal que usted nos proporciona directamente, 
            como su nombre, número de teléfono (WhatsApp) y correo electrónico al utilizar nuestro chatbot de reservas.
          </p>

          <h3 className="mb-4">2. Uso de la información</h3>
          <p className="mb-4 text-muted">
            Utilizamos su información únicamente para:
          </p>
          <ul className="mb-4 text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li>Gestionar sus citas y reservas.</li>
            <li>Enviarle recordatorios y confirmaciones.</li>
            <li>Mejorar la calidad de nuestro servicio de atención.</li>
          </ul>

          <h3 className="mb-4">3. Protección de datos</h3>
          <p className="mb-4 text-muted">
            Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración o divulgación. 
            No compartimos su información con terceros, excepto cuando sea necesario para proveer el servicio (ej. Google Calendar).
          </p>

          <h3 className="mb-4">4. Contacto</h3>
          <p className="text-muted">
            Si tiene alguna duda sobre esta política de privacidad, puede contactarnos en <strong>hola@bienhecha.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
