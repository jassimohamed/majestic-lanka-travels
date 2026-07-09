function SectionBackground({ children, dark = true }) {
  return (
    <section className={`${dark ? "bg-[#050505]" : "bg-[#111111]"} text-white py-24`}>
      {children}
    </section>
  );
}

export default SectionBackground;