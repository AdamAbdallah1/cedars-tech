import React, { useEffect, useRef, useState } from "react";
import { getAssistantResponse } from "./assistantEngine";
import { QUICK_ACTIONS, BUSINESS } from "./assistantKnowledge";

const OPENING =
  "Hi — I can help you with our services, pricing, websites, projects, or getting in touch.";

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", text: OPENING }]);
  const [input, setInput] = useState("");
  const [context, setContext] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const result = getAssistantResponse(trimmed, context);
    setContext(result.context || context);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: result.text, cta: result.cta, suggestions: result.suggestions },
    ]);
    setInput("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* launcher */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="fixed bottom-5 right-5 z-[120] px-5 py-3 rounded-full bg-brand text-white text-xs font-black uppercase tracking-widest shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
      >
        {open ? "Close" : "Ask us"}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Cedars Tech assistant"
          className="fixed bottom-20 right-5 z-[120] w-[calc(100vw-2.5rem)] sm:w-[400px] max-h-[75vh] flex flex-col rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
        >
          {/* header */}
          <div className="px-5 py-4 border-b border-white/10">
            <p className="text-white font-black tracking-tight">CEDARS TECH</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold">
              Business Assistant
            </p>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-brand text-white"
                      : "bg-white/[0.04] text-gray-300 border border-white/10"
                  }`}
                >
                  {m.text}
                  {m.cta && (
                    <a
                      href={m.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-brand font-bold text-xs uppercase tracking-widest"
                    >
                      {m.cta.label} →
                    </a>
                  )}
                  {m.suggestions && m.suggestions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => send(s)}
                          className="px-3 py-1 rounded-full border border-white/10 text-[11px] text-gray-300 hover:border-brand/50 hover:text-white transition"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* quick actions */}
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {QUICK_ACTIONS.map((qa) => (
              <button
                key={qa.label}
                onClick={() => send(qa.query)}
                className="px-3 py-1.5 rounded-full border border-white/10 text-[11px] uppercase tracking-widest text-gray-400 hover:text-white hover:border-brand/50 transition"
              >
                {qa.label}
              </button>
            ))}
          </div>

          {/* input */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 focus-within:border-brand/50 transition">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about our websites..."
                aria-label="Message the assistant"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-600 focus:outline-none"
              />
              <button
                onClick={() => send(input)}
                aria-label="Send message"
                className="text-brand text-xs font-black uppercase tracking-widest focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;
