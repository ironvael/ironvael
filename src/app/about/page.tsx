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
            title="Forged in Permanence."
            description="Ironvael is a business and operations consulting firm built for leaders who want durable systems—strategy that ships, governance that holds, and execution that endures."
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
              Ironvael exists to help operators build organizations that last. We focus on the work that makes companies durable: clear operating systems, disciplined decision-making, and structures that hold up under growth.
            </p>
            <p>
              Our engagements span business and operations consulting, entity structuring and tax strategy (in coordination with your CPA and legal counsel), and compliance recovery. The goal is simple: replace uncertainty with clarity—and replace fragile execution with systems your team can run.
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
                { title: "Client Stewardship", desc: "We treat your resources, time, and trust as assets to protect—not inputs to burn." },
                { title: "Intellectual Honesty", desc: "We say what’s true, document assumptions, and separate facts from opinions." },
                { title: "Operator Discipline", desc: "We build what can be executed—systems, rhythms, metrics, and accountability." },
                { title: "Endurance", desc: "We optimize for durability: governance, structure, and decisions that compound." },
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
            <h3 className="text-xl sm:text-2xl font-serif font-bold">Leadership</h3>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-4">
                <div className="overflow-hidden">
                  <img
                    src="/images/aiden.jpg" // replace with your actual path
                    alt="Aiden Hovren, Founder of Ironvael"
                    className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-5">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-primary">
                    Aiden Hovren
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    Founder & Managing Partner
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Aiden founded Ironvael to build a consulting firm grounded in operational discipline and structural clarity. His work focuses on helping operators design resilient systems—across strategy, execution, and governance—so that growth is supported by durable foundations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  With experience in operations management, systems design, and entity structuring strategy, Aiden leads engagements directly—partnering with founders and leadership teams to bring clarity to complexity and discipline to execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
