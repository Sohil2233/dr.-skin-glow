import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-clinic-gold mb-3">Get In Touch</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Visit Our Clinic</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-border h-[400px]">
          <iframe
            title="SkinGlo Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2!2d74.23!3d16.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzAwLjAiTiA3NMKwMTMnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-clinic-plum-light flex items-center justify-center shrink-0">
              <MapPin className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rajarampuri 3rd Ln, behind Mahendra Jewelers,<br />
                Poorvarang, Mahalaxminagar, Rajarampuri,<br />
                Kolhapur, Maharashtra 416008
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-clinic-plum-light flex items-center justify-center shrink-0">
              <Phone className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:07066312444" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                070663 12444
              </a>
              <br />
              <a href="tel:09782149944" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                097821 49944
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-clinic-plum-light flex items-center justify-center shrink-0">
              <Clock className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Clinic Hours</h3>
              <p className="text-muted-foreground text-sm">Monday - Saturday: 10:00 AM - 8:00 PM</p>
              <p className="text-muted-foreground text-sm">Sunday: Closed</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-clinic-plum-light flex items-center justify-center shrink-0">
              <Mail className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">dr.priyanka.skinglo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
