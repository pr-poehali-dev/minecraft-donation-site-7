import Hero from "@/components/Hero";
import DonatePackages from "@/components/DonatePackages";
import ServerInfo from "@/components/ServerInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DonatePackages />
      <ServerInfo />
      <Footer />
    </div>
  );
};

export default Index;
