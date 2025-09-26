import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoSection from "@/components/VideoSection";
import Products from "@/components/Products";
import SchoolTestimonials from "@/components/SchoolTestimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <VideoSection />
      <Products />
      <SchoolTestimonials />
      <section id="faq">
        <FAQ />
      </section>
      <ContactSection />
      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Index;
