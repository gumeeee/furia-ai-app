interface ChatMessagesProps {
  messages: Array<{
    role: "user" | "assistant";
    content: string;
    isTyping?: boolean;
  }>;
  currentTypingText: string;
  isAiTyping: boolean;
}

export default function ChatMessages({
  messages,
  currentTypingText,
  isAiTyping,
}: ChatMessagesProps) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === "user" ? "justify-end" : "justify-start"
          } animate-messageIn`}
        >
          {message.role === "assistant" && !message.isTyping && (
            <div className="bg-zinc-900/90 backdrop-blur-sm text-white rounded-2xl rounded-tl-none p-3 max-w-[80%] border border-gold/10 shadow-neon-gold-sm">
              {message.content}
            </div>
          )}

          {message.role === "user" && (
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-2xl rounded-tr-none p-3 max-w-[80%] shadow-neon-gold-sm">
              {message.content}
            </div>
          )}
        </div>
      ))}

      {currentTypingText && (
        <div className="flex justify-start animate-messageIn">
          <div className="bg-zinc-900/90 backdrop-blur-sm text-white rounded-2xl rounded-tl-none p-3 max-w-[80%] border border-gold/10 shadow-neon-gold-sm">
            {currentTypingText}
            <span className="inline-block w-2 h-4 ml-1 bg-gold animate-cursor"></span>
          </div>
        </div>
      )}
    </div>
  );
}
