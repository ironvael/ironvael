import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME } from "@/lib/site";
import { DiagnosticForm } from "@/components/diagnostic/DiagnosticForm";

const CAL_URL =
  process.env.NEXT_PUBLIC_CAL_DIAGNOSTIC_URL ??
  process.env.NEXT_PUBLIC_CAL_URL ??
  "/contact";

export const metadata: Metadata = {
  title: "Operations Consulting Diagnostic | Ironvael Advisory",
  description:
    "A free 15-minute operations consulting diagnostic to identify execution bottlenecks, KPI gaps, and the primary constraint slowing growth.",
  openGraph: {
    title: "Operations Consulting Diagnostic | Ironvael Advisory",
    description:
      "A free 15-minute operations consulting diagnostic to identify execution bottlenecks, KPI gaps, and the primary constraint slowing growth.",
    url: "/operations-consulting-diagnostic",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operations Consulting Diagnostic | Ironvael Advisory",
    description:
      "A free 15-minute operations consulting diagnostic to identify execution bottlenecks, KPI gaps, and the primary constraint slowing growth.",
  },
  alternates: {
    canonical: "/operations-consulting-diagnostic",
  },
};

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container-padding">
          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 md:gap-16 items-center">
            <div>
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-3">
                DIAGNOSTIC
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-3">
                Operations Consulting Diagnostic for Founders
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-white/90 mb-6">
                Find the constraint slowing execution — in 15 minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold bg-white text-primary hover:bg-white/90"
                >
                  <a href="https://cal.com/ironvael-advisory/diagnostic">Book diagnostic</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-white/60 text-white hover:bg-white/10 px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold"
                >
                  <a href="#request">Request form</a>
                </Button>
              </div>
            </div>

            <Card className="border-none bg-white/5 backdrop-blur-sm text-sm text-white shadow-lg">
              <CardContent className="p-6 sm:p-7 space-y-4">
                <h2 className="text-lg sm:text-xl font-serif font-semibold">
                  Who this is for
                </h2>
                <p className="text-white/80">
                  Founder-led teams with inconsistent execution.
                </p>
                <p className="text-white/80">
                  KPI cadence exists but isn&apos;t trusted.
                </p>
                <a
                  href="#who"
                  className="inline-flex text-sm font-semibold text-accent underline underline-offset-4"
                >
                  See criteria
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="what"
        className="py-12 sm:py-16 md:py-20 bg-background border-t border-border"
      >
        <div className="container-padding max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
            What this diagnostic covers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5">
            Ironvael Advisory&apos;s operations consulting focuses on building
            operational stability so execution doesn&apos;t stall as you scale.
            This diagnostic surfaces execution bottlenecks, examines your KPI
            cadence and accountability structure, and clarifies how decision
            flow should work as the company grows.
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>• Identify the primary operational constraint</li>
            <li>• Pressure-test KPI &amp; execution cadence</li>
            <li>• Leave with clear next steps</li>
          </ul>
        </div>
      </section>

      <section
        id="who"
        className="py-12 sm:py-16 md:py-20 bg-background border-t border-border"
      >
        <div className="container-padding max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
            Who this is for
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground mb-4">
            <li>• Founder / CEO / operator-led teams</li>
            <li>• Growing companies where execution feels inconsistent</li>
            <li>• KPI cadence exists but isn&apos;t trusted</li>
            <li>• Accountability and decision flow feel unclear</li>
          </ul>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Operator-led. Tightly scoped. Not free consulting.
          </p>
        </div>
      </section>

      {/* Form + context */}
      <section
        id="request"
        className="py-12 sm:py-16 md:py-20 bg-background"
        aria-labelledby="diagnostic-request-heading"
      >
        <div className="container-padding">
          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 md:gap-16 items-start">
            <div>
              <SectionHeader
                id="diagnostic-request-heading"
                label="Get a clear read"
                title="Request your diagnostic"
                description="Share a brief snapshot of your company and where execution feels unstable. We’ll review and follow up quickly."
              />
              <div className="mt-6 md:mt-8">
                <DiagnosticForm calUrl={CAL_URL} />
              </div>
            </div>

            <aside className="space-y-6 lg:pl-4">
              <div className="border border-border bg-white p-5 sm:p-6 shadow-sm">
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                  What you can expect
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">
                      15 minutes, tightly scoped.
                    </span>{" "}
                    No long intros; we get straight to what feels unstable.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Operator-to-operator.
                    </span>{" "}
                    We focus on cadence, accountability, and real execution
                    constraints.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Clear next steps.
                    </span>{" "}
                    Either a 30-day plan proposal or concrete recommendations
                    you can act on yourself.
                  </li>
                </ul>
              </div>

              <div className="border border-dashed border-border bg-muted/40 p-5 sm:p-6 text-sm text-muted-foreground space-y-2">
                <p>
                  This diagnostic is best suited for founders, COOs, and
                  functional leaders with teams between 5 and 200 people and
                  meaningful execution risk on the table.
                </p>
                <p>
                  If you&apos;re earlier-stage, you&apos;re still welcome to
                  request it — we may recommend lighter-touch resources instead.
                </p>
              </div>

              <div className="text-xs text-muted-foreground">
                <p>
                  By submitting the form, you acknowledge that we&apos;ll review
                  your request and may reach out for clarification before
                  confirming a diagnostic slot.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-border bg-white">
        <div className="container-padding max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-primary">
            Prefer to pick a time directly?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            You can go straight to the calendar, or submit the form first if
            you&apos;d like us to review context ahead of time.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-none px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold"
            >
              <a href="https://cal.com/ironvael-advisory/stability">Book the Diagnostic</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

