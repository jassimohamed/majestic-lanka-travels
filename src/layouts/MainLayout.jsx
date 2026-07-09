import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTopButton from "../components/ScrollToTopButton";

function MainLayout({ children }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}

export default MainLayout;