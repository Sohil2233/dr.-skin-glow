import heroImg from "@/assets/hero-clinic.jpg";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* BG image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="SkinGlo Clinic Interior" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>

    <div className="relative container mx-auto pt-24 pb-16">
      <div className="max-w-2xl space-y-6 animate-fade-in-up">
        <div className="flex items-center gap-1 text-clinic-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} className={i === 4 ? "opacity-50" : ""} />
          ))}
          <span className="ml-2 text-sm text-primary-foreground/80">4.5 (22 reviews)</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
          Dr. Priyanka's <br />
          <span className="text-clinic-gold">SkinGlo</span> Clinic
        </h1>

        <p className="text-lg text-primary-foreground/80 max-w-lg">
          Advanced Skin, Hair & Laser treatments by Dr. Priyanka Shivaji Kawale — B.H.M.S., PG Dip CC, PG Dip CSD. Your trusted dermatologist in Kolhapur.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#appointment">
            <Button size="lg" className="bg-gradient-clinic text-primary-foreground hover:opacity-90 text-base px-8">
              Book Appointment
            </Button>
          </a>
          <a href="tel:07066312444">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
              <Phone size={18} className="mr-2" /> Call Now
            </Button>
          </a>
        </div>

        <div className="flex items-start gap-2 text-primary-foreground/70 text-sm pt-2">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span>Rajarampuri 3rd Ln, behind Mahendra Jewelers, Kolhapur, Maharashtra 416008</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
