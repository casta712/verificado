import { useState, useEffect, useRef } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: '¡Hola! Soy Jose, el asistente virtual de Bienhecha. ¿En qué te puedo ayudar hoy? ¿Deseas información o agendar una cita?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState('');
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Inicializar o recuperar SessionId
  useEffect(() => {
    let storedSessionId = localStorage.getItem('chatSessionId');
    if (!storedSessionId) {
      storedSessionId = crypto.randomUUID ? crypto.randomUUID() : 'sess-' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('chatSessionId', storedSessionId);
    }
    setSessionId(storedSessionId);
  }, []);

  // Hacer scroll automático hacia abajo
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Manejar apertura de chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  // Enviar mensaje
  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text) return;

    // Agregar mensaje del usuario a la vista
    setMessages((prev) => [...prev, { text, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionId, message: text })
      });

      const data = await response.json();
      setIsTyping(false);

      if (data.replies && Array.isArray(data.replies)) {
        const botMessages = data.replies.map(reply => ({ text: reply, sender: 'bot' }));
        setMessages((prev) => [...prev, ...botMessages]);
      } else if (data.error) {
        setMessages((prev) => [...prev, { text: `Error: ${data.error}`, sender: 'bot' }]);
      } else {
        setMessages((prev) => [...prev, { text: "Hubo un error procesando tu mensaje. La respuesta no es válida.", sender: 'bot' }]);
      }

    } catch (error) {
      console.error('Error enviando mensaje:', error);
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: "Lo siento, no pude conectarme con el servidor. Intenta nuevamente más tarde.", sender: 'bot' }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante para abrir chat */}
      <button 
        className={`chat-toggle ${isOpen ? 'hidden' : ''}`} 
        onClick={toggleChat}
        aria-label="Abrir chat"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Widget de chat */}
      <div className={`chat-widget ${!isOpen ? 'hidden' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <h3>Asistente Bienhecha</h3>
            <span>En línea</span>
          </div>
          <button className="chat-close-btn" onClick={toggleChat} aria-label="Cerrar chat">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          
          {/* Indicador de escribiendo */}
          <div className={`chat-typing-indicator ${isTyping ? 'active' : ''}`}>
            <div className="chat-dot"></div>
            <div className="chat-dot"></div>
            <div className="chat-dot"></div>
          </div>
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-container">
          <div className="chat-input">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..." 
              autoComplete="off"
              ref={inputRef}
            />
            <button onClick={sendMessage} aria-label="Enviar mensaje">
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
