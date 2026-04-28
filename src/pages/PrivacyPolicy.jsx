import { useEffect } from 'react';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section animate-fade-in" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="mb-8 text-primary">Política de Privacidad</h1>
        <p className="mb-4 text-muted" style={{ fontSize: '0.9rem' }}>
          <strong>Última actualización:</strong> 29 de abril de 2026
        </p>

        {/* 1. Responsable del tratamiento */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">1. Responsable del tratamiento</h3>
          <p className="mb-4 text-muted">
            El responsable del tratamiento de sus datos personales es:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem', listStyle: 'none' }}>
            <li className="mb-2"><strong>Razón social:</strong> Bienhecha Servicios Profesionales S.L.</li>
            <li className="mb-2"><strong>NIF:</strong> Z0506671D</li>
            <li className="mb-2"><strong>Domicilio:</strong> Calle Fray Juan Regla 13, Zaragoza, España</li>
            <li className="mb-2"><strong>Correo electrónico:</strong> casacastillo712@hotmail.com</li>
            <li className="mb-2"><strong>Sitio web:</strong> www.casherbienhecha.com</li>
          </ul>
        </div>

        {/* 2. Datos que recopilamos */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">2. Datos personales que recopilamos</h3>
          <p className="mb-4 text-muted">
            Recopilamos diferentes tipos de datos personales según cómo interactúe con nuestros servicios:
          </p>

          <h4 className="mb-2" style={{ color: 'var(--color-primary)', fontSize: '1rem' }}>
            a) Datos proporcionados directamente por usted
          </h4>
          <ul className="mb-4 text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li>Nombre y apellidos</li>
            <li>Número de teléfono (incluyendo WhatsApp)</li>
            <li>Dirección de correo electrónico</li>
            <li>Información sobre citas y reservas solicitadas</li>
            <li>Cualquier mensaje o consulta que nos envíe a través del formulario de contacto o chatbot</li>
          </ul>

          <h4 className="mb-2" style={{ color: 'var(--color-primary)', fontSize: '1rem' }}>
            b) Datos obtenidos a través de la plataforma Meta (Facebook/Instagram)
          </h4>
          <ul className="mb-4 text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li>Identificador de usuario de Facebook (User ID)</li>
            <li>Nombre de perfil público</li>
            <li>Dirección de correo electrónico asociada a su cuenta de Facebook (si la proporciona)</li>
            <li>Información de perfil público disponible según la configuración de privacidad de su cuenta</li>
          </ul>

          <h4 className="mb-2" style={{ color: 'var(--color-primary)', fontSize: '1rem' }}>
            c) Datos de navegación y uso (recopilados automáticamente)
          </h4>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li>Dirección IP</li>
            <li>Tipo de navegador y dispositivo</li>
            <li>Páginas visitadas y tiempo de permanencia</li>
            <li>Datos de interacción recopilados por el Facebook Pixel (eventos de página, clics, conversiones)</li>
            <li>Cookies y tecnologías similares de seguimiento</li>
          </ul>
        </div>

        {/* 3. Finalidad del tratamiento */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">3. Finalidad del tratamiento</h3>
          <p className="mb-4 text-muted">
            Tratamos sus datos personales para las siguientes finalidades específicas:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2"><strong>Gestión de citas y reservas:</strong> Programar, confirmar, modificar y cancelar citas a través de nuestro chatbot automatizado e integración con Google Calendar.</li>
            <li className="mb-2"><strong>Comunicaciones de servicio:</strong> Enviarle recordatorios de citas, confirmaciones y notificaciones relacionadas con el servicio contratado.</li>
            <li className="mb-2"><strong>Atención al cliente:</strong> Responder a sus consultas y solicitudes de información realizadas a través del formulario de contacto, correo electrónico o chatbot.</li>
            <li className="mb-2"><strong>Mejora del servicio:</strong> Analizar patrones de uso para mejorar la experiencia de usuario y la calidad de nuestros servicios.</li>
            <li className="mb-2"><strong>Publicidad y análisis:</strong> Utilizar el Facebook Pixel y el SDK de Facebook para medir la eficacia de nuestras campañas publicitarias, realizar remarketing y analizar el tráfico de nuestro sitio web.</li>
            <li className="mb-2"><strong>Cumplimiento legal:</strong> Cumplir con las obligaciones legales y regulatorias aplicables.</li>
          </ul>
        </div>

        {/* 4. Base legal */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">4. Base legal del tratamiento</h3>
          <p className="mb-4 text-muted">
            El tratamiento de sus datos se fundamenta en las siguientes bases legales conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD):
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2"><strong>Consentimiento (Art. 6.1.a RGPD):</strong> Cuando usted acepta nuestra política de privacidad al utilizar nuestro chatbot, formulario de contacto o al interactuar con nuestras herramientas de Meta.</li>
            <li className="mb-2"><strong>Ejecución de contrato (Art. 6.1.b RGPD):</strong> Cuando el tratamiento es necesario para la prestación del servicio de reservas y citas que usted ha solicitado.</li>
            <li className="mb-2"><strong>Interés legítimo (Art. 6.1.f RGPD):</strong> Para la mejora de nuestros servicios y análisis de uso del sitio web, siempre que no prevalezcan sus derechos y libertades fundamentales.</li>
            <li className="mb-2"><strong>Obligación legal (Art. 6.1.c RGPD):</strong> Cuando sea necesario para cumplir con obligaciones legales o requerimientos de las autoridades competentes.</li>
          </ul>
        </div>

        {/* 5. Uso de Meta Business Tools */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">5. Uso de Meta Business Tools (Facebook)</h3>
          <p className="mb-4 text-muted">
            Nuestro sitio web utiliza herramientas tecnológicas proporcionadas por Meta Platforms, Inc. (anteriormente Facebook, Inc.), 1 Hacker Way, Menlo Park, California 94025, EE.UU. En particular:
          </p>

          <h4 className="mb-2" style={{ color: 'var(--color-primary)', fontSize: '1rem' }}>
            Facebook SDK (Kit de Desarrollo de Software)
          </h4>
          <p className="mb-4 text-muted">
            Utilizamos el SDK de JavaScript de Facebook (App ID: 2957130291156842) para habilitar funcionalidades de la plataforma de Meta en nuestro sitio web, incluyendo el seguimiento de eventos de página y análisis de interacciones.
          </p>

          <h4 className="mb-2" style={{ color: 'var(--color-primary)', fontSize: '1rem' }}>
            Facebook Pixel
          </h4>
          <p className="mb-4 text-muted">
            El Facebook Pixel es una herramienta de análisis que nos permite medir la eficacia de nuestra publicidad, comprender las acciones que los usuarios realizan en nuestro sitio web y crear audiencias para campañas publicitarias. Este píxel recopila datos como:
          </p>
          <ul className="mb-4 text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li>Información del navegador y del dispositivo</li>
            <li>Datos de ubicación (basados en dirección IP)</li>
            <li>URL de la página visitada</li>
            <li>Acciones realizadas en el sitio web (clics, vistas de página, envíos de formularios)</li>
          </ul>

          <p className="text-muted" style={{ padding: '1rem', background: 'rgba(var(--color-primary-rgb, 99, 102, 241), 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--color-primary)' }}>
            <strong>Importante:</strong> Los datos recopilados a través de estas herramientas son compartidos con Meta Platforms, Inc. y pueden ser utilizados por Meta conforme a su propia{' '}
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
              Política de Privacidad
            </a>. Meta puede utilizar estos datos para ofrecer publicidad personalizada dentro de sus plataformas (Facebook, Instagram, Messenger, etc.) y para mejorar sus propios servicios.
          </p>
        </div>

        {/* 6. Compartición con terceros */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">6. Compartición de datos con terceros</h3>
          <p className="mb-4 text-muted">
            Sus datos personales pueden ser compartidos con los siguientes terceros, únicamente para las finalidades descritas en esta política:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2"><strong>Meta Platforms, Inc.:</strong> A través del Facebook Pixel y SDK, para análisis y publicidad según se detalla en la sección 5.</li>
            <li className="mb-2"><strong>Google LLC (Google Calendar):</strong> Para la gestión y sincronización de citas y reservas programadas a través de nuestro chatbot.</li>
            <li className="mb-2"><strong>Proveedores de hosting y servicios web:</strong> Necesarios para el funcionamiento y mantenimiento técnico de nuestra plataforma.</li>
          </ul>
          <p className="text-muted">
            No vendemos, alquilamos ni compartimos sus datos personales con terceros para fines distintos a los indicados en esta política.
          </p>
        </div>

        {/* 7. Transferencias internacionales */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">7. Transferencias internacionales de datos</h3>
          <p className="text-muted">
            Al utilizar servicios de Meta Platforms, Inc. y Google LLC, sus datos pueden ser transferidos y procesados en servidores ubicados en Estados Unidos u otros países fuera del Espacio Económico Europeo (EEE). Estas transferencias se realizan con las garantías adecuadas, incluyendo las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea y, en su caso, el marco de protección de datos UE-EE.UU. (EU-US Data Privacy Framework).
          </p>
        </div>

        {/* 8. Retención de datos */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">8. Período de conservación de datos</h3>
          <p className="mb-4 text-muted">
            Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2"><strong>Datos de citas y reservas:</strong> Se conservan durante 12 meses desde la última interacción, salvo que usted solicite su eliminación antes.</li>
            <li className="mb-2"><strong>Datos de contacto y consultas:</strong> Se conservan durante 12 meses desde la resolución de la consulta.</li>
            <li className="mb-2"><strong>Datos de navegación y cookies:</strong> Según los plazos indicados en la sección de Cookies de esta política.</li>
            <li className="mb-2"><strong>Datos con obligación legal de conservación:</strong> Se conservarán durante los plazos legalmente establecidos.</li>
          </ul>
          <p className="text-muted">
            Una vez cumplido el plazo de conservación, los datos serán eliminados de forma segura o anonimizados.
          </p>
        </div>

        {/* 9. Derechos del usuario */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">9. Sus derechos</h3>
          <p className="mb-4 text-muted">
            De conformidad con el RGPD y la LOPDGDD, usted tiene los siguientes derechos sobre sus datos personales:
          </p>
          <ul className="mb-4 text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2"><strong>Derecho de acceso:</strong> Obtener confirmación de si estamos tratando sus datos y, en caso afirmativo, acceder a ellos.</li>
            <li className="mb-2"><strong>Derecho de rectificación:</strong> Solicitar la corrección de datos inexactos o completar datos incompletos.</li>
            <li className="mb-2"><strong>Derecho de supresión ("derecho al olvido"):</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios para la finalidad para la que fueron recogidos.</li>
            <li className="mb-2"><strong>Derecho a la limitación del tratamiento:</strong> Solicitar la limitación del tratamiento en determinadas circunstancias.</li>
            <li className="mb-2"><strong>Derecho a la portabilidad:</strong> Recibir sus datos en un formato estructurado, de uso común y lectura mecánica.</li>
            <li className="mb-2"><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias, incluyendo el tratamiento con fines de marketing directo.</li>
            <li className="mb-2"><strong>Derecho a retirar el consentimiento:</strong> Retirar su consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</li>
          </ul>
          <p className="mb-4 text-muted">
            Para ejercer cualquiera de estos derechos, puede contactarnos en{' '}
            <strong>casacastillo712@hotmail.com</strong> indicando el derecho que desea ejercer y acompañando una copia de su DNI o documento identificativo.
          </p>
          <p className="text-muted">
            Asimismo, tiene derecho a presentar una reclamación ante la{' '}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
              Agencia Española de Protección de Datos (AEPD)
            </a>{' '}
            si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
          </p>
        </div>

        {/* 10. Eliminación de datos */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">10. Eliminación de datos</h3>
          <p className="mb-4 text-muted">
            Usted puede solicitar la eliminación completa de todos sus datos personales de nuestros sistemas en cualquier momento. Hemos habilitado una página específica con instrucciones detalladas para facilitar este proceso:
          </p>
          <p className="text-muted">
            👉{' '}
            <a href="/eliminacion-datos" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
              Instrucciones para la eliminación de datos
            </a>
          </p>
        </div>

        {/* 11. Cookies */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">11. Cookies y tecnologías de seguimiento</h3>
          <p className="mb-4 text-muted">
            Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación y para las finalidades analíticas y publicitarias descritas en esta política. Los tipos de cookies que utilizamos son:
          </p>
          <ul className="mb-4 text-muted" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2"><strong>Cookies técnicas/esenciales:</strong> Necesarias para el funcionamiento básico del sitio web. No requieren consentimiento.</li>
            <li className="mb-2"><strong>Cookies analíticas:</strong> Nos permiten analizar el uso del sitio web para mejorarlo. Incluyen las cookies establecidas por Facebook Pixel.</li>
            <li className="mb-2"><strong>Cookies de publicidad/remarketing:</strong> Utilizadas por Meta (Facebook) para mostrarle anuncios relevantes dentro de sus plataformas. Estas cookies pueden tener una duración de hasta 180 días.</li>
          </ul>
          <p className="text-muted">
            Puede gestionar sus preferencias de cookies a través de la configuración de su navegador. Tenga en cuenta que desactivar ciertas cookies puede afectar a la funcionalidad del sitio web.
          </p>
        </div>

        {/* 12. Menores */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">12. Menores de edad</h3>
          <p className="text-muted">
            Nuestros servicios no están dirigidos a menores de 14 años. No recopilamos conscientemente datos personales de menores de 14 años. Si usted es padre, madre o tutor legal y tiene conocimiento de que un menor nos ha proporcionado datos personales, le rogamos que se ponga en contacto con nosotros para proceder a su eliminación inmediata.
          </p>
        </div>

        {/* 13. Modificaciones */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">13. Modificaciones de esta política</h3>
          <p className="text-muted">
            Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de "última actualización" correspondiente. Le recomendamos revisar esta página periódicamente para mantenerse informado sobre cómo protegemos sus datos. El uso continuado de nuestros servicios tras la publicación de cambios constituye su aceptación de los mismos.
          </p>
        </div>

        {/* 14. Contacto */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">14. Contacto</h3>
          <p className="mb-4 text-muted">
            Si tiene alguna pregunta, comentario o solicitud relacionada con esta Política de Privacidad o con el tratamiento de sus datos personales, puede contactarnos a través de:
          </p>
          <ul className="text-muted" style={{ paddingLeft: '1.5rem', listStyle: 'none' }}>
            <li className="mb-2">📧 <strong>Correo electrónico:</strong> casacastillo712@hotmail.com</li>
            <li className="mb-2">📍 <strong>Dirección postal:</strong> Calle Fray Juan Regla 13, Zaragoza, España</li>
            <li className="mb-2">🌐 <strong>Sitio web:</strong> www.casherbienhecha.com</li>
          </ul>
        </div>

        {/* Legislación aplicable */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 className="mb-4">15. Legislación aplicable</h3>
          <p className="text-muted">
            Esta Política de Privacidad se rige por lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD), la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), y cualquier otra normativa española y europea aplicable en materia de protección de datos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
