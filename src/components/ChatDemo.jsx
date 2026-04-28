import { useState, useEffect, useRef } from 'react';

const messages = [
  { type: 'bot', text: '¡Hola! 👋 Bienvenido a Peluquería María. Soy tu asistente virtual, disponible 24/7. ¿En qué puedo ayudarte?', time: '10:00' },
  { type: 'user', text: 'Hola, quiero reservar una cita', time: '10:01' },
  { type: 'bot', text: '¡Por supuesto! Tenemos estos servicios:\n\n💇‍♀️ Corte de pelo\n💅 Manicura\n🎨 Tinte completo\n\n¿Cuál te interesa?', time: '10:01' },
  { type: 'user', text: 'Corte de pelo', time: '10:01' },
  { type: 'bot', text: '📅 Horarios disponibles:\n\n• Mar 15 Abr — 10:00h\n• Mar 15 Abr — 12:00h\n• Mié 16 Abr — 16:00h\n\n¿Cuál prefieres?', time: '10:02' },
  { type: 'user', text: 'El martes a las 10', time: '10:02' },
  { type: 'bot', text: '✅ ¡Cita confirmada!\n\n📋 Corte de pelo\n📅 Martes 15 de Abril\n🕐 10:00h\n📍 Peluquería María\n\nTe enviaré un recordatorio. ¡Hasta pronto! 👋', time: '10:02' },
];

const delays = [800, 2400, 4200, 6200, 7800, 9600, 11200];

export default function ChatDemo() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timeouts = [];
    messages.forEach((msg, i) => {
      if (msg.type === 'bot') {
        timeouts.push(setTimeout(() => setTyping(true), delays[i] - 700));
      }
      timeouts.push(setTimeout(() => {
        setTyping(false);
        setVisible(i + 1);
      }, delays[i]));
    });
    timeouts.push(setTimeout(() => setCalendarVisible(true), delays[delays.length - 1] + 800));
    return () => timeouts.forEach(clearTimeout);
  }, [started]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visible, typing]);

  const handleReplay = () => {
    setVisible(0);
    setTyping(false);
    setCalendarVisible(false);
    setStarted(false);
    setTimeout(() => setStarted(true), 100);
  };

  return (
    <div ref={ref} className="demo-grid">
      {/* Chatbot Widget */}
      <div>
        <div className="chatbot-widget">
          <div className="chatbot-header">
            <div className="chatbot-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" /><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="6" y="14" width="12" height="8" rx="2" /><path d="M12 10v4" /><path d="M10 18h4" />
              </svg>
            </div>
            <div className="chatbot-header-info">
              <h4>Asistente Virtual</h4>
              <span>
                <span className="chatbot-status-dot" />
                En línea
              </span>
            </div>
          </div>
          <div className="chatbot-body" ref={chatRef}>
            {messages.slice(0, visible).map((msg, i) => (
              <div key={i} className={`cb-bubble ${msg.type}`}>
                {msg.type === 'bot' && (
                  <div className="cb-bubble-avatar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8V4H8" /><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="6" y="14" width="12" height="8" rx="2" /><path d="M12 10v4" />
                    </svg>
                  </div>
                )}
                <div className={`cb-bubble-content ${msg.type}`}>
                  <div className="cb-bubble-text">{msg.text}</div>
                  <div className="cb-bubble-time">{msg.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="cb-bubble bot">
                <div className="cb-bubble-avatar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8" /><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="6" y="14" width="12" height="8" rx="2" /><path d="M12 10v4" />
                  </svg>
                </div>
                <div className="typing-indicator">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Escribe un mensaje..." disabled />
            <button disabled>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
        {visible >= messages.length && (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button onClick={handleReplay} className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>
              ↻ Repetir Demo
            </button>
          </div>
        )}
      </div>

      {/* Text + Calendar */}
      <div className="demo-text">
        <span className="badge">Demo en vivo</span>
        <h2>Tu Cliente Reserva Solo</h2>
        <p>
          Tu chatbot atiende a tus clientes las 24 horas del día,
          los 7 días de la semana. Sin que tengas que levantar un dedo.
        </p>
        <p>
          El cliente elige servicio, fecha y hora. La cita se confirma al instante
          y aparece automáticamente en tu Google Calendar.
        </p>

        {/* Calendar Card */}
        <div className={`calendar-card ${calendarVisible ? 'visible' : ''}`}>
          <div className="calendar-card-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Google Calendar — Nueva cita
          </div>
          <div className="calendar-event">
            <div className="calendar-dot" style={{ animation: 'pulse 2s infinite' }} />
            <div>
              <strong>💇‍♀️ Corte de pelo</strong>
              <span>Martes 15 de Abril · 10:00 – 10:30</span><br />
              <span>Peluquería María</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
