import { Sparkles, Scissors, Zap, Droplets, Sun, Shield } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Skin Treatments",
    desc: "Acne treatment, pigmentation correction, anti-aging facials, and medical-grade skin rejuvenation therapies.",
  },
  {
    icon: Scissors,
    title: "Hair Loss Treatment",
    desc: "PRP therapy, hair regrowth solutions, scalp treatments, and advanced hair fall control programs.",
  },
  {
    icon: Zap,
    title: "Laser Treatments",
    desc: "Laser hair removal, tattoo removal, birthmark removal, and skin tag laser treatment.",
  },
  {
    icon: Droplets,
    title: "Acne & Scar Removal",
    desc: "Chemical peels, microneedling, derma roller therapy for acne scars and blemish-free skin.",
  },
  {
    icon: Sun,
    title: "Melasma Treatment",
    desc: "Specialized pigmentation and melasma correction using advanced dermatological protocols.",
  },
  {
    icon: Shield,
    title: "Skin Tag & Wart Removal",
    desc: "Safe and painless removal of skin tags, warts, and moles using modern techniques.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-clinic-gold mb-3">Our Expertise</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Treatments & Services</h2>
        <p className="mt-4 text-muted-foreground">Comprehensive dermatological care with the latest technology and personalized treatment plans.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-clinic-plum-light flex items-center justify-center mb-5 group-hover:bg-gradient-clinic transition-colors duration-300">
              <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
