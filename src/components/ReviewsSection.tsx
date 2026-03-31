import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Patient",
    rating: 5,
    text: "Dr Priyanka is a very talented and kind in nature. I was suffering from acne problem and had started treatment in her clinic. She consulted me very nicely. The results are amazing!",
  },
  {
    name: "Patient",
    rating: 5,
    text: "Good skin care service and staff members. Dr is understanding and knowledgeable. Highly recommend for anyone looking for quality skin treatment.",
  },
  {
    name: "Patient",
    rating: 4,
    text: "Great skincare clinic, my scars reduced significantly. Great medical grade facial treatment. The clinic is clean and well-maintained.",
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-clinic-gold mb-3">Testimonials</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">What Our Patients Say</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex text-clinic-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" className={i === 4 ? "opacity-50" : ""} />
            ))}
          </div>
          <span className="text-muted-foreground font-medium">4.5 out of 5 · 22 reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-lg p-8 border border-border relative">
            <Quote size={32} className="text-primary/10 absolute top-6 right-6" />
            <div className="flex gap-0.5 text-clinic-gold mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{r.text}"</p>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">— Verified {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
