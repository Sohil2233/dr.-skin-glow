import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">SkinGlo Clinic</h3>
          <p className="text-sm leading-relaxed">
            Dr. Priyanka's Skinglo Skin, Hair & Laser Clinic — Advanced dermatological treatments in Kolhapur.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <a href="#services" className="block hover:text-primary-foreground transition-colors">Services</a>
            <a href="#gallery" className="block hover:text-primary-foreground transition-colors">Gallery</a>
            <a href="#appointment" className="block hover:text-primary-foreground transition-colors">Book Appointment</a>
            <a href="#contact" className="block hover:text-primary-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:07066312444">070663 12444</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>Rajarampuri, Kolhapur, Maharashtra 416008</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Dr. Priyanka's SkinGlo Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
