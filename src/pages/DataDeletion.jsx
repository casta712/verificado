

function DataDeletion() {
  return (
    <div className="section animate-fade-in" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        <h1 className="mb-8 text-primary">Eliminación de Datos</h1>
        
        <div className="card">
          <h3 className="mb-4">Instrucciones para eliminar sus datos</h3>
          <p className="mb-4 text-muted">
            De acuerdo con las normativas de protección de datos de Facebook y las leyes aplicables, usted tiene el derecho de solicitar 
            la eliminación de sus datos personales almacenados en nuestros sistemas (Bienhecha Servicios Profesionales S.L.).
          </p>

          <h3 className="mb-4">¿Cómo solicitar la eliminación?</h3>
          <p className="mb-4 text-muted">
            Para eliminar todos sus registros de nuestra base de datos, siga uno de estos métodos:
          </p>
          <ul className="mb-4 text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2">
              <strong>A través de correo electrónico:</strong> Envíe un correo a <strong>hola@bienhecha.com</strong> con el asunto "Solicitud de Eliminación de Datos" e incluya el número de teléfono con el que utiliza nuestro servicio.
            </li>
            <li className="mb-2">
              <strong>A través de WhatsApp:</strong> Envíe un mensaje a nuestro chatbot con la palabra "ELIMINAR DATOS" y el sistema procesará su solicitud de forma automática.
            </li>
          </ul>

          <h3 className="mb-4">Plazo de procesamiento</h3>
          <p className="text-muted">
            Procesaremos su solicitud en un plazo máximo de 48 a 72 horas. Una vez eliminados sus datos, recibirá una confirmación y toda su información 
            (historial de reservas, nombre y contacto) será borrada permanentemente de nuestros registros y de Google Calendar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataDeletion;
