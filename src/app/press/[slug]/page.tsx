import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getPressReleaseBySlug, getAllPressReleaseSlugs } from "@/lib/press";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ChevronLeft, Calendar, Mail, Link as LinkIcon } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPressReleaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);
  if (!release) return { title: "Press | Ironvael" };

  const title = `${release.title} | Ironvael`;
  const description = release.summary;
  const canonicalPath = `/press/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: release.date,
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PressReleasePage({ params }: Props) {
  const { slug } = await params;
  const release = getPressReleaseBySlug(slug);
  if (!release) notFound();

  const canonicalPath = `/press/${slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: release.title,
    description: release.summary,
    datePublished: release.date,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/white-logo.png` },
    },
    author: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main
        id="main-content"
        aria-label="Press release"
        className="flex-1 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24"
      >
        <div className="container-padding max-w-6xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/press"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden />
              Back to Press &amp; Media
            </Link>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main */}
            <article className="lg:col-span-8">
              {/* Header / Hero */}
              <header className="relative overflow-hidden rounded-2xl border border-border bg-card">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                      Press Release
                    </span>

                    <span className="text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                      <time dateTime={release.date}>{release.displayDate}</time>
                    </span>
                  </div>

                  <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
                    {release.title}
                  </h1>

                  {/* Lede */}
                  <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {release.summary}
                  </p>
                </div>

                {/* subtle divider */}
                <div className="h-px w-full bg-border" />
                <div className="p-6 sm:p-8">
                  {/* Body */}
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    {release.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </header>

              {/* Footer line under article */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  For media inquiries:{" "}
                  <a
                    href="mailto:press@ironvael.com"
                    className="text-primary font-medium hover:underline"
                  >
                    press@ironvael.com
                  </a>
                </p>

                <Link
                  href="/press"
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  View all press releases
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-sm font-semibold tracking-[0.12em] uppercase text-muted-foreground">
                    Details
                  </h2>

                  <dl className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" aria-hidden />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          Published
                        </dt>
                        <dd className="text-sm text-foreground">{release.displayDate}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" aria-hidden />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          Media Contact
                        </dt>
                        <dd className="text-sm">
                          <a
                            href="mailto:press@ironvael.com"
                            className="text-primary font-medium hover:underline"
                          >
                            press@ironvael.com
                          </a>
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <LinkIcon className="h-4 w-4 mt-0.5 text-muted-foreground" aria-hidden />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          Permalink
                        </dt>
                        <dd className="text-sm text-muted-foreground break-all">
                          {canonicalPath}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-6 rounded-xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ironvael Advisory provides institutional advisory for complex organizations—focused on
                      operational infrastructure, governance, and execution.
                    </p>
                  </div>
                </div>

                {/* Optional: small CTA card */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">Engage Ironvael</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Select engagements are available across project and retainer models.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}