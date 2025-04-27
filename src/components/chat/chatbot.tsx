"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Send, ArrowLeft, User } from "lucide-react";
import Image from "next/image";
import WelcomeScreen from "./welcome-screen";
import TypingIndicator from "./type-indicator";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentTypingText]);

  const handleStartChat = () => {
    setShowWelcome(false);
  };

  const handleBackToWelcome = () => {
    setShowWelcome(true);
    // Opcional: limpar o histórico de mensagens quando voltar
    // setMessages([]);
  };

  const simulateTyping = (text: string) => {
    setCurrentTypingText("");

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setCurrentTypingText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setMessages((prev) => [...prev, { role: "assistant", content: text }]);
        setCurrentTypingText("");
        setIsLoading(false);
      }
    }, 50); // 50ms per character
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response from server");
      }

      // Iniciar efeito de digitação com a resposta da API
      simulateTyping(data.message);
    } catch (error: any) {
      console.error("Error:", error);
      simulateTyping(`Erro: ${error.message}. Por favor, tente novamente.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-8 min-h-screen bg-gradient-to-br from-zinc-900 via-gray-950 to-black">
      {showWelcome ? (
        <WelcomeScreen onStartChat={handleStartChat} />
      ) : (
        <div className="flex flex-col w-full sm:max-w-xl md:max-w-5xl h-[85vh] mx-auto rounded-xl overflow-hidden border border-gold/20 shadow-neon-gold-sm">
          <div className="bg-black/90 border-b border-gold/20 p-3 flex items-center">
            <button
              onClick={handleBackToWelcome}
              className="flex items-center gap-2 text-gold hover:text-gold-bright transition-colors duration-300 group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              <span>Voltar</span>
            </button>
            <h2 className="text-gold/90 text-lg font-medium mx-auto flex items-center gap-4">
              <Image
                src="/furia-logo.png"
                width={24}
                height={24}
                alt="Furia Logo"
                className="w-5 h-5"
              />
              Chat
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gold scrollbar-track-zinc-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 mb-4 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } animate-messageIn`}
              >
                {message.role === "assistant" && (
                  <div className="shrink-0 w-8 h-8 rounded-full bg-black border border-gold/30 flex items-center justify-center shadow-neon-gold-xs">
                    <Image
                      src="/furia-logo.png"
                      width={32}
                      height={32}
                      alt="Furia Logo"
                      className="w-4 h-4"
                    />
                  </div>
                )}

                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-neon-gold-sm rounded-tr-none"
                      : "bg-zinc-900/90 backdrop-blur-sm text-white border border-gold/10 shadow-neon-gold-sm rounded-tl-none"
                  }`}
                >
                  <p>{message.content}</p>
                </div>

                {message.role === "user" && (
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center shadow-neon-gold-xs">
                    <User size={16} className="text-black" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && !currentTypingText && (
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-black border border-gold/30 flex items-center justify-center shadow-neon-gold-xs">
                  <Image
                    src="/furia-logo.png"
                    width={32}
                    height={32}
                    alt="Furia Logo"
                    className="w-4 h-4"
                  />
                </div>
                <div className="bg-zinc-900/90 backdrop-blur-sm text-white rounded-2xl rounded-tl-none p-3 max-w-[80%] border border-gold/10 shadow-neon-gold-sm">
                  <TypingIndicator />
                </div>
              </div>
            )}

            {currentTypingText && (
              <div className="flex items-start gap-3 mb-4 animate-messageIn">
                <div className="shrink-0 w-8 h-8 rounded-full bg-black border border-gold/30 flex items-center justify-center shadow-neon-gold-xs">
                  <Image
                    src="/furia-logo.png"
                    width={32}
                    height={32}
                    alt="Furia Logo"
                    className="w-4 h-4"
                  />
                </div>
                <div className="bg-zinc-900/90 backdrop-blur-sm text-white rounded-2xl rounded-tl-none p-3 max-w-[80%] border border-gold/10 shadow-neon-gold-sm">
                  {currentTypingText}
                  <span className="inline-block w-2 h-4 ml-1 bg-gold animate-cursor"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gold/20 p-4 bg-black/80 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem para o FURIA AI..."
                className="flex-1 bg-zinc-900/70 text-white border border-gold/30 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-inner-gold"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold shadow-neon-gold-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
