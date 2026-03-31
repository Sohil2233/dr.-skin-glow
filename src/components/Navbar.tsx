import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-display text-lg md:text-xl font-bold text-primary">SkinGlo</span>
          <span className="text-[10px] md:text-xs text-muted-foreground tracking-wider">SKIN · HAIR · LASER</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#appointment">
            <Button className="bg-gradient-clinic text-primary-foreground hover:opacity-90">
              Book Appointment
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground/80 py-2">
              {l.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setOpen(false)}>
            <Button className="w-full bg-gradient-clinic text-primary-foreground">Book Appointment</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
