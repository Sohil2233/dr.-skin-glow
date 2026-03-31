import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";
import clinicRoom from "@/assets/clinic-room.webp";
import certificates from "@/assets/certificates.webp";

const galleryItems = [
  { img: beforeAfter2, label: "Hair Loss Treatment Results", span: "col-span-1" },
  { img: beforeAfter3, label: "Skin Treatment Results", span: "col-span-1" },
  { img: clinicRoom, label: "Our Treatment Room", span: "col-span-1" },
  { img: certificates, label: "Certifications & Credentials", span: "col-span-1" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-clinic-gold mb-3">Results</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Before & After Gallery</h2>
        <p className="mt-4 text-muted-foreground">See real results from our advanced treatments and our state-of-the-art facility.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div key={item.label} className={`${item.span} group relative rounded-lg overflow-hidden aspect-[4/3]`}>
            <img src={item.img} alt={item.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-primary-foreground text-sm font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
