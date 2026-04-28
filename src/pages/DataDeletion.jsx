import { useEffect } from 'react';

function DataDeletion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="mb-8 text-primary">Eliminación de Datos</h1>
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">Su derecho a la eliminación de datos</h3>
          <p className="mb-4 text-muted">
            De conformidad con el Reglamento General de Protección de Datos (RGPD), la Ley Orgánica de Protección de 
            Datos y Garantía de los Derechos Digitales (LOPDGDD), y las normativas de la plataforma Meta (Facebook), 
            usted tiene el derecho de solicitar la eliminación completa de todos sus datos personales almacenados en 
            nuestros sistemas.
          </p>
          <p className="text-muted">
            Este derecho aplica a todos los datos que hemos recopilado, incluyendo aquellos obtenidos a través de la 
            plataforma de Facebook, nuestro chatbot de reservas, formulario de contacto y cualquier otra interacción con 
            nuestros servicios.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">¿Qué datos se eliminarán?</h3>
          <p className="mb-4 text-muted">
            Al procesar su solicitud de eliminación, borraremos permanentemente los siguientes datos de nuestros sistemas:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2">Nombre y datos de identificación personal</li>
            <li className="mb-2">Número de teléfono y dirección de correo electrónico</li>
            <li className="mb-2">Historial completo de citas y reservas</li>
            <li className="mb-2">Eventos de Google Calendar asociados a sus reservas</li>
            <li className="mb-2">Historial de conversaciones con nuestro chatbot</li>
            <li className="mb-2">Identificador de usuario de Facebook y datos de perfil asociados</li>
            <li className="mb-2">Cualquier otro dato personal vinculado a su cuenta</li>
          </ul>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">¿Cómo solicitar la eliminación?</h3>
          <p className="mb-4 text-muted">
            Puede solicitar la eliminación de sus datos mediante cualquiera de los siguientes métodos:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-4">
              <strong>📧 Correo electrónico:</strong> Envíe un correo a{' '}
              <strong style={{ color: 'var(--color-primary)' }}>casacastillo712@hotmail.com</strong>{' '}
              con el asunto <em>"Solicitud de Eliminación de Datos"</em>. Incluya en el cuerpo del mensaje:
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Su nombre completo</li>
                <li>El número de teléfono o correo con el que utilizó nuestro servicio</li>
                <li>Una copia de un documento identificativo (DNI, pasaporte o similar)</li>
              </ul>
            </li>
            <li className="mb-4">
              <strong>💬 WhatsApp:</strong> Envíe un mensaje a nuestro chatbot con la palabra{' '}
              <strong style={{ color: 'var(--color-primary)' }}>"ELIMINAR DATOS"</strong> y el sistema 
              procesará su solicitud de forma automática.
            </li>
          </ul>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">Plazo de procesamiento</h3>
          <p className="mb-4 text-muted">
            De acuerdo con el artículo 17 del RGPD, procesaremos su solicitud de eliminación <strong>sin dilación 
            indebida y, a más tardar, en el plazo de un mes</strong> desde la recepción de la solicitud. En caso de 
            que la solicitud sea compleja o recibamos múltiples solicitudes, este plazo podrá ampliarse dos meses más, 
            informándole debidamente.
          </p>
          <p className="text-muted">
            Una vez completada la eliminación, le enviaremos una confirmación por el mismo canal por el que realizó la solicitud. 
            Tenga en cuenta que algunos datos podrían conservarse durante el período legalmente establecido cuando exista una 
            obligación legal de conservación.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">Datos en plataformas de terceros</h3>
          <p className="mb-4 text-muted">
            La eliminación de sus datos en nuestros sistemas no afecta a los datos que Meta (Facebook) pueda haber 
            recopilado de forma independiente a través de sus propias herramientas. Para gestionar sus datos en 
            Facebook, puede:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2">
              Acceder a la{' '}
              <a href="https://www.facebook.com/settings?tab=applications" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                configuración de aplicaciones de Facebook
              </a>{' '}
              para revocar el acceso de nuestra aplicación.
            </li>
            <li className="mb-2">
              Consultar la{' '}
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                Política de Privacidad de Meta
              </a>{' '}
              para conocer cómo gestionar sus datos en sus plataformas.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="mb-4">Contacto</h3>
          <p className="text-muted">
            Si tiene alguna duda sobre el proceso de eliminación de datos, puede contactarnos en{' '}
            <strong style={{ color: 'var(--color-primary)' }}>casacastillo712@hotmail.com</strong> o consultar 
            nuestra{' '}
            <a href="/politica-privacidad" style={{ color: 'var(--color-primary)' }}>
              Política de Privacidad completa
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataDeletion;
