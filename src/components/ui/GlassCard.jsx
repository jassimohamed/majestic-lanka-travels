function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl shadow-xl hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)] transition ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;