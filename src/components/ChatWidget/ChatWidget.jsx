import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';
import { Bot, X, Send, Sparkles, User, RefreshCw } from 'lucide-react';
import { sendChatMessage } from '../../services/langflowService';

const starterQuestions = [
  "Tell me about Syed's experience at Zoho",
  "What is his core backend tech stack?",
  "What projects has he built?",
  "How can I contact Syed?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: "Hi! I am Syed Javith's AI Assistant powered by Langflow & Gemini. Ask me anything about his experience at Zoho, backend architecture, or projects!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (messageText) => {
    const query = (messageText || input).trim();
    if (!query || loading) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const result = await sendChatMessage(query);
      const assistantMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: result.text
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'assistant',
          text: "I couldn't reach the agent right now. Feel free to contact Syed directly at syedjavith14@gmail.com!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'assistant',
        text: "Chat cleared. What would you like to know about Syed's work or skills?"
      }
    ]);
  };

  return (
    <div className="chat-widget-root">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-2xl shadow-violet-600/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Open AI Assistant"
        >
          <Sparkles size={22} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      )}

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 h-[32rem] rounded-2xl glass-panel border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 bg-slate-950/95 backdrop-blur-2xl"
          role="dialog"
          aria-label="AI Portfolio Assistant"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">Syed's AI Assistant</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] text-slate-400 font-mono">Langflow • Gemini 1.5</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                title="Reset conversation"
              >
                <RefreshCw size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-messages-container">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-violet-600/30 text-violet-300 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={14} />
                  </div>
                )}
                <div
                  className={`text-xs sm:text-sm p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-violet-600 text-white rounded-br-sm'
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-white/10 text-slate-300 flex items-center justify-center shrink-0 mt-1">
                    <User size={13} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                <div className="w-6 h-6 rounded-lg bg-violet-600/30 text-violet-300 flex items-center justify-center">
                  <Bot size={14} />
                </div>
                <div className="flex gap-1 items-center px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Suggestions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-white/5 flex flex-wrap gap-1.5">
              {starterQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-[11px] text-slate-300 bg-white/5 hover:bg-violet-600/20 hover:text-violet-300 border border-white/10 hover:border-violet-500/40 px-2.5 py-1 rounded-lg transition-colors text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 border-t border-white/10 bg-white/[0.02] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about experience, skills, projects..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/60 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-white transition-all shadow-md shadow-violet-600/20"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
