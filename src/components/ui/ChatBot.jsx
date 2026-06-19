import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronRight, Phone, Mail } from 'lucide-react';

// ── FAQ Knowledge Base ──────────────────────────────────────────
const FAQS = [
  {
    id: 'products',
    label: '📦 Products & Brands',
    questions: [
      { q: 'Which brands do you distribute?', a: 'We are authorized distributors for **Parker Hannifin**, **Kaishan**, **Chicago Pneumatic**, **Tubacex**, and **Trident** — all with 100% genuine, OEM-certified products and original manufacturer warranty.' },
      { q: 'Do you stock Parker products?', a: 'Yes! We maintain extensive ready stock of Parker products across Pneumatics, Hydraulics, Instrumentation, Gas Generation, and Clean Energy segments. Most common items are available for immediate dispatch from our Surat warehouse.' },
      { q: 'What compressed air systems do you offer?', a: 'We offer complete compressed air solutions including:\n• **Kaishan** rotary screw compressors\n• **Chicago Pneumatic** oil-free compressors\n• **Trident** air drying & purification systems\n• **Parker** filtration & separation equipment\n\nWe also assist in complete system design and installation.' },
      { q: 'Do you have SS Tubes and Pipes?', a: 'Yes, we are distributors for **Tubacex** SS Tubes & Pipes — ideal for high-pressure, high-temperature, and corrosive applications in oil & gas, petrochemical, and pharmaceutical industries.' },
    ],
  },
  {
    id: 'services',
    label: '🔧 Services',
    questions: [
      { q: 'What services do you provide?', a: 'We offer end-to-end industrial services:\n• **System Design & Engineering**\n• **Installation & Commissioning**\n• **Annual Maintenance Contracts (AMC)**\n• **Technical Training** for your team\n• **After-Sales Support & Breakdown Service**\n• **Spare Parts Supply**' },
      { q: 'Do you offer Annual Maintenance Contracts?', a: 'Yes, our **AMC programs** include:\n• Scheduled preventive maintenance\n• Priority breakdown response\n• Genuine spare parts at preferential rates\n• Performance monitoring & reporting\n\nContact us to get a customized AMC quote for your facility.' },
      { q: 'Can you install the equipment?', a: 'Absolutely! Our trained technicians handle complete on-site installation and commissioning — including Factory Acceptance Testing (FAT), Site Acceptance Testing (SAT), and performance verification & handover.' },
    ],
  },
  {
    id: 'contact',
    label: '📍 Contact & Location',
    questions: [
      { q: 'Where are you located?', a: '📍 **Shah Engineers & Consultants Pvt. Ltd.**\n4, "Rushabh", Near Sita Hospital,\nOld Subjail Gali, Khatodara,\nRing Road, **Surat – 395002**\nGujarat, India\n\nWe serve clients pan-India from our Surat base.' },
      { q: 'What are your business hours?', a: '🕘 We are open:\n**Monday – Saturday: 9:00 AM – 6:00 PM IST**\nSunday: Closed\n\nFor urgent breakdown support outside business hours, please call us directly.' },
      { q: 'How can I get a quote?', a: 'You can get a quote by:\n1. Filling the **enquiry form** on our Contact page\n2. Emailing us at **info@shahgroup.co**\n3. Calling us directly\n\nWe respond to all quote requests within **24 business hours**.' },
    ],
  },
  {
    id: 'industries',
    label: '🏭 Industries',
    questions: [
      { q: 'Which industries do you serve?', a: 'We serve a wide range of industries including:\n• Oil & Gas\n• Pharmaceuticals\n• Textiles & Automotive\n• Food & Beverage\n• Chemicals & Petrochemicals\n• Power Generation\n• Water Treatment\n• Defence & Semiconductor\n\n30+ years across all these sectors gives us deep domain expertise.' },
      { q: 'Do you serve clients outside Gujarat?', a: 'Yes! While headquartered in **Surat, Gujarat**, we serve clients across **all of India**. Our strategic location and logistics network enable rapid delivery to Gujarat, Maharashtra, Rajasthan, and beyond.' },
    ],
  },
];

const WELCOME = {
  text: "Hello! 👋 I'm Shah's assistant. I can help you with questions about our products, services, brands, and more. What would you like to know?",
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 block"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: WELCOME.text, id: 0 }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [msgId, setMsgId] = useState(1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendBotMessage = (text, delay = 900) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text, id: msgId + Math.random() }]);
    }, delay);
  };

  const handleQuickQuestion = (q, a) => {
    const id = msgId + Math.random();
    setMsgId(id);
    setMessages((prev) => [...prev, { role: 'user', text: q, id }]);
    setActiveCategory(null);
    sendBotMessage(a, 800);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const id = msgId + Math.random();
    setMsgId(id);
    setMessages((prev) => [...prev, { role: 'user', text, id }]);
    setInput('');

    // Simple keyword matching
    const lower = text.toLowerCase();
    const allQs = FAQS.flatMap((cat) => cat.questions);
    const match = allQs.find((item) =>
      item.q.toLowerCase().split(' ').some((word) => word.length > 3 && lower.includes(word))
    );

    if (match) {
      sendBotMessage(match.a);
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('quote')) {
      sendBotMessage("For accurate pricing, please fill our enquiry form or contact us directly — our team responds within 24 hours.\n\n📧 **info@shahgroup.co**\n📍 Surat, Gujarat");
    } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      sendBotMessage("Hello! 😊 Great to hear from you. How can I help you today? You can ask about our products, services, or use the quick buttons below.", 500);
    } else if (lower.includes('thank')) {
      sendBotMessage("You're most welcome! 😊 Is there anything else I can help you with?", 600);
    } else {
      sendBotMessage("I'm not sure about that specific query. For detailed assistance, please:\n\n📞 **Call us directly**\n📧 **Email:** info@shahgroup.co\n\nOr use the quick topics below to find what you need!");
    }
  };

  return (
    <>
      {/* ── Floating toggle button ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 3, type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            aria-label="Open FAQ chat"
            className="fixed bottom-24 right-6 z-50 group"
          >
            <div className="relative w-[52px] h-[52px] rounded-full bg-gray-900 dark:bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-200 border border-gray-700 dark:border-gray-200">
              <Bot className="w-5 h-5 text-white dark:text-gray-900" />
              {/* Unread dot */}
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-accent border-2 border-white dark:border-gray-900" />
            </div>
            <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
              FAQ Assistant
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            style={{ height: '540px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gray-900 dark:bg-gray-950 border-b border-gray-800 flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-900" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm leading-none mb-0.5">Shah Assistant</p>
                <p className="text-green-400 text-[11px]">● Online — responds instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50 dark:bg-gray-900/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    msg.role === 'bot' ? 'bg-accent/15 border border-accent/20' : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {msg.role === 'bot'
                      ? <Bot className="w-3.5 h-3.5 text-accent" />
                      : <User className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                    }
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                      msg.role === 'bot'
                        ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-sm'
                        : 'bg-accent text-white rounded-tr-sm'
                    }`}
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }}
                  />
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-sm">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* Quick Topics */}
            <div className="px-4 py-3 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex-shrink-0">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">Quick Topics</p>
              <div className="flex flex-wrap gap-1.5">
                {FAQS.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all duration-150 ${
                      activeCategory === cat.id
                        ? 'bg-accent text-white border-accent'
                        : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-accent/40'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sub-questions */}
              <AnimatePresence>
                {activeCategory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-1 overflow-hidden"
                  >
                    {FAQS.find((c) => c.id === activeCategory)?.questions.map(({ q, a }) => (
                      <button
                        key={q}
                        onClick={() => handleQuickQuestion(q, a)}
                        className="w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-xl text-[11px] text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 hover:bg-accent/10 hover:text-accent border border-gray-100 dark:border-gray-800 transition-colors duration-150"
                      >
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        {q}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <form
              onSubmit={handleUserInput}
              className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex-shrink-0"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about our products…"
                className="flex-1 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="w-9 h-9 rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-40 flex items-center justify-center transition-all flex-shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
