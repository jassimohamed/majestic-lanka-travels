import GlowButton from "../ui/GlowButton";
import { companyData } from "../../data/companyData";

function HeroButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-12">
      <GlowButton to="/tours">
        Explore Tours
      </GlowButton>

      <GlowButton variant="outline" to="/fleet">
        View Fleet
      </GlowButton>

      <GlowButton
        variant="green"
        href={`https://wa.me/${companyData.whatsapp}`}
      >
        WhatsApp
      </GlowButton>
    </div>
  );
}

export default HeroButtons;