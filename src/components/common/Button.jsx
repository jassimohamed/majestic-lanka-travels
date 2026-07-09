import { Link } from "react-router-dom";

function Button({ children, to, href, variant = "gold" }) {
  const base =
    "inline-block px-8 py-4 rounded-full font-bold transition";

  const styles =
    variant === "outline"
      ? "border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black"
      : "bg-[#D4AF37] text-black hover:bg-[#F5D76E]";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default Button;