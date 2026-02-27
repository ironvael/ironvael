import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/site";
import { SORTED_PRESS_RELEASES } from "@/lib/press";

const PRESS_LAST_UPDATED = "2026-02-27";

export const metadata: Metadata = {
  title: "Press & Media",
  description: "Media resources, announcements, and institutional updates from Ironvael.",
  openGraph: {
    title: "Press & Media",
    description: "Media resources, announcements, and institutional updates from Ironvael.",
    url: "/press",
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 border-b border-white/10">
        <div className="container-padding max-w-4xl">
          <SectionHeader
            label="Firm Resources"
            title="Press & Media"
            description="Media resources, announcements, and institutional updates from Ironvael."
            light
          />
        </div>
      </div>

      <main
        id="main-content"
        aria-label="Press and media resources"
        className="flex-1"
      >
        {/* Press Releases */}
        <section
          className="py-12 sm:py-16 md:py-20 border-b border-border"
          aria-labelledby="press-releases-heading"
        >
          <div className="container-padding max-w-4xl space-y-8">
            <header className="space-y-2">
              <h2
                id="press-releases-heading"
                className="text-2xl sm:text-3xl font-serif font-semibold text-foreground"
              >
                Press Releases
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Formal announcements and institutional updates from Ironvael.
              </p>
            </header>

            <div className="space-y-4">
              {SORTED_PRESS_RELEASES.map((release) => (
                <article
                  key={release.slug}
                  className="border border-border bg-card/50 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-5"
                  aria-labelledby={`press-${release.slug}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                    <div>
                      <time
                        dateTime={release.date}
                        className="text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground"
                      >
                        {release.displayDate}
                      </time>
                      <h3
                        id={`press-${release.slug}`}
                        className="mt-1 text-lg sm:text-xl font-serif font-semibold text-foreground"
                      >
                        {release.title}
                      </h3>
                    </div>
                    <div className="sm:text-right">
                      <Link
                        href={`/press/${release.slug}`}
                        aria-label={`Read press release: ${release.title}`}
                        className="inline-flex items-center text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {release.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section
          className="py-12 sm:py-16 md:py-20 border-b border-border"
          aria-labelledby="media-coverage-heading"
        >
          <div className="container-padding max-w-4xl space-y-6">
            <header className="space-y-2">
              <h2
                id="media-coverage-heading"
                className="text-2xl sm:text-3xl font-serif font-semibold text-foreground"
              >
                Media Coverage
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Selected coverage and references from external publications.
              </p>
            </header>

            <div className="rounded-none border border-dashed border-border bg-muted/40 px-4 sm:px-6 py-5 sm:py-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We will publish selected third-party coverage here as it becomes available. For context on our work or to verify information before publishing, please contact{" "}
                <a
                  href="mailto:press@ironvael.com"
                  className="text-primary font-medium hover:underline"
                >
                  press@ironvael.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section
          className="py-12 sm:py-16 md:py-20 border-b border-border"
          aria-labelledby="media-kit-heading"
        >
          <div className="container-padding max-w-4xl space-y-6">
            <header className="space-y-2">
              <h2
                id="media-kit-heading"
                className="text-2xl sm:text-3xl font-serif font-semibold text-foreground"
              >
                Media Kit
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Logos, photography, and firm boilerplate for press-ready use.
              </p>
            </header>

            <div className="space-y-4">
              <div>
                <Link href="/press/Ironvael-Media-Kit-2026.zip" prefetch={false}>
                  <Button className="rounded-none min-h-[44px] px-6">
                    Download Media Kit
                  </Button>
                </Link>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  The media kit archive will be available at this link. If the file is not yet present, please contact{" "}
                  <a
                    href="mailto:press@ironvael.com"
                    className="text-primary font-medium hover:underline"
                  >
                    press@ironvael.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-[0.16em] mb-3">
                  Included materials
                </h3>
                <ul className="space-y-1 text-sm sm:text-base text-muted-foreground">
                  <li>Ironvael logo – light background</li>
                  <li>Ironvael logo – dark background</li>
                  <li>Founder headshot – print and web resolutions</li>
                  <li>Firm boilerplate – 100-word version</li>
                  <li>Firm boilerplate – 250-word version</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Media Inquiries */}
        <section
          className="py-12 sm:py-16 md:py-20"
          aria-labelledby="media-inquiries-heading"
        >
          <div className="container-padding max-w-4xl space-y-6">
            <header className="space-y-2">
              <h2
                id="media-inquiries-heading"
                className="text-2xl sm:text-3xl font-serif font-semibold text-foreground"
              >
                Media Inquiries
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                For interviews, commentary, or verification, please use the contacts below.
              </p>
            </header>

            <div className="border border-border px-4 sm:px-6 py-5 sm:py-6 bg-card/40">
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                    Primary contact
                  </p>
                  <a
                    href="mailto:press@ironvael.com"
                    className="mt-1 inline-block text-lg sm:text-xl font-serif font-semibold text-primary hover:underline"
                  >
                    press@ironvael.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                    Secondary contact
                  </p>
                  <a
                    href="mailto:inquiries@ironvael.com"
                    className="mt-1 inline-block text-sm text-muted-foreground hover:text-primary hover:underline"
                  >
                    inquiries@ironvael.com
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              Last updated:{" "}
              <time dateTime={PRESS_LAST_UPDATED}>{PRESS_LAST_UPDATED}</time>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

