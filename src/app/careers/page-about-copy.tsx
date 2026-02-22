import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <SectionHeader
            label="About Us"
            title="Relentlessly pursuing better."
            description="Ironvael is more than a consulting firm. We are partners in your success, dedicated to delivering results that stand the test of time."
            light
          />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-padding">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 md:sticky md:top-32">Our Mission</h3>
            </div>
            <div className="md:col-span-8 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] first-letter:text-primary">
                We believe that every organization has the potential to be extraordinary. Our mission is to unlock that potential by challenging assumptions, uncovering hidden opportunities, and designing strategies that are as actionable as they are ambitious.
              </p>
              <p>
                Founded in 2003, Ironvael has grown from a boutique strategy shop to a global multidisciplinary firm. Yet, we have maintained our &quot;small firm&quot; soul—where every client matters, and every partner is personally invested in the outcome.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-border my-16" />

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 md:sticky md:top-32">Our Values</h3>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Client First", desc: "We measure our success solely by the success of our clients." },
                { title: "Intellectual Honesty", desc: "We tell the hard truths, even when they are uncomfortable to hear." },
                { title: "Collaboration", desc: "We don't work for you; we work with you. Partnership is in our DNA." },
                { title: "Excellence", desc: "Good enough is never enough. We strive for the exceptional in every detail." },
              ].map((val, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-xl font-bold text-primary">{val.title}</h4>
                  <p className="text-muted-foreground">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border my-16" />

          <div className="space-y-8 md:space-y-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">Leadership</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Eleanor Sterling", role: "Managing Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
                { name: "James Chen", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
                { name: "Sarah Thorne", role: "Digital Transformation Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
              ].map((person, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-primary">{person.name}</h4>
                  <p className="text-muted-foreground">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
