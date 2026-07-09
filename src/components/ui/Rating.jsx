import { Star } from "lucide-react";

function Rating({ value = 5 }) {
  return (
    <div className="flex gap-1 text-[#D4AF37]">
      {[...Array(value)].map((_, index) => (
        <Star key={index} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default Rating;