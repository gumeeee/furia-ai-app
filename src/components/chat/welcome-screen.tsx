"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { AuroraText } from "../magicui/aurora-text";

interface WelcomeScreenProps {
  onStartChat: () => void;
}

export default function WelcomeScreen({ onStartChat }: WelcomeScreenProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const examplePrompts = [
    "Conte-me sobre a história da FURIA Esports",
    "Quais são os principais jogos em que a FURIA compete?",
    "Quem são os jogadores atuais da FURIA?",
    "Quais são os maiores feitos da FURIA Esports?",
  ];

  const handlePromptClick = (prompt: string) => {
    setSelectedPrompt(prompt);
    setTimeout(() => {
      onStartChat();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl p-6 animate-fadeIn">
      <div className="w-full bg-black/80 backdrop-blur-md rounded-2xl p-8 shadow-neon-gold-sm border border-gold/20">
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="w-16 h-16 mb-4 relative">
            <Image
              src="/furia-logo.png"
              fill
              alt="FURIA Logo"
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2 ">
            FURIA{" "}
            <AuroraText
              speed={2}
              colors={[
                "#FFD700",
                "#FFF2CC",
                "#B8860B",
                "#FFC400",
                "#FFFFFF",
                "#FFC400",
              ]}
            >
              AI
            </AuroraText>
          </h1>
          <p className="text-gold/70">
            Seu assistente inteligente sobre a FURIA Esports
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-gold mr-2" />
            <h2 className="text-xl text-gold/90">
              Experimente estas sugestões
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examplePrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  selectedPrompt === prompt
                    ? "bg-zinc-900 border-gold shadow-neon-gold-sm"
                    : "bg-zinc-900/60 border-gold/20 hover:border-gold/50 hover:shadow-neon-gold-xs"
                }`}
              >
                <p className="text-white">{prompt}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="w-full dark:bg-black dark:text-white flex items-center space-x-2 cursor-pointer"
            onClick={onStartChat}
          >
            <span>Iniciar Chat</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
