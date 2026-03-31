import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const treatments = [
  "Skin Treatment",
  "Hair Loss Treatment",
  "Laser Hair Removal",
  "Acne & Scar Treatment",
  "Melasma Treatment",
  "Tattoo / Birthmark Removal",
  "Skin Tag Removal",
  "General Consultation",
];

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Appointment request submitted! We will contact you shortly.");
  };

  return (
    <section id="appointment" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left info */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-clinic-gold mb-3">Schedule Visit</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Book Your Appointment</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Take the first step towards healthy, glowing skin. Book an appointment with Dr. Priyanka and get expert consultation for your skin and hair concerns.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarDays className="text-primary" size={20} />
                <div>
                  <p className="font-medium text-foreground text-sm">Clinic Hours</p>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 10 AM - 8 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={20} />
                <p className="text-sm text-muted-foreground">Same-day appointments available</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={20} />
                <p className="text-sm text-muted-foreground">Free initial consultation for new patients</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle size={48} className="mx-auto text-clinic-gold" />
                <h3 className="font-display text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">Your appointment request has been received. We will call you to confirm.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Book Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input required name="name" placeholder="Full Name" className="bg-secondary" />
                  <Input required name="phone" type="tel" placeholder="Phone Number" className="bg-secondary" />
                </div>
                <Input name="email" type="email" placeholder="Email (optional)" className="bg-secondary" />
                <Select required>
                  <SelectTrigger className="bg-secondary">
                    <SelectValue placeholder="Select Treatment" />
                  </SelectTrigger>
                  <SelectContent>
                    {treatments.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input required name="date" type="date" className="bg-secondary" />
                  <Input name="time" type="time" className="bg-secondary" />
                </div>
                <Textarea name="message" placeholder="Any specific concerns? (optional)" className="bg-secondary" rows={3} />
                <Button type="submit" size="lg" className="w-full bg-gradient-clinic text-primary-foreground hover:opacity-90 text-base">
                  Request Appointment
                </Button>
                <p className="text-xs text-muted-foreground text-center">We'll confirm your appointment via phone call.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
