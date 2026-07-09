function Badge({ children }) {
  return (
    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-sm font-semibold">
      {children}
    </span>
  );
}

export default Badge;