export default function TypingIndicator() {
  return (
    <div className="flex space-x-2">
      <div className="w-2 h-2 rounded-full bg-gold animate-pulse-delay-0 shadow-neon-gold-xs"></div>
      <div className="w-2 h-2 rounded-full bg-gold animate-pulse-delay-1 shadow-neon-gold-xs"></div>
      <div className="w-2 h-2 rounded-full bg-gold animate-pulse-delay-2 shadow-neon-gold-xs"></div>
    </div>
  );
}
