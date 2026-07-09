function SectionTitle({ label, title, description }) {
  return (
    <div className="text-center mb-16">
      <p className="text-[#D4AF37] uppercase tracking-[4px] mb-4">
        {label}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;