"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CAPABILITIES, CAPABILITY_CATEGORIES } from "@/lib/capabilities";
import { INDUSTRIES, INDUSTRY_CATEGORIES } from "@/lib/industries";

const capBySlug = Object.fromEntries(CAPABILITIES.map((c) => [c.slug, c]));
const indBySlug = Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i]));

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        "pt-[max(0.75rem,env(safe-area-inset-top))]",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border/50 pb-3" : "bg-transparent pb-4 sm:pb-6 text-white"
      )}
    >
      <div className="container-padding flex items-center justify-between gap-4">
        <Link href="/" className="group z-50 relative shrink-0 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={scrolled ? "/black-logo.png" : "/white-logo.png"}
              alt="Ironvael"
              className="h-6 w-auto sm:h-8 transition-opacity duration-300"
            />
            <span className={cn(
              "text-xl sm:text-2xl font-serif font-bold tracking-tight transition-colors duration-300 truncate",
              scrolled ? "text-primary" : "text-white"
            )}>
              IRONVAEL
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent cursor-pointer",
                pathname === link.href
                  ? "text-accent border-b-2 border-accent pb-1"
                  : scrolled ? "text-primary/80" : "text-white/90"
              )}>
                {link.label.toUpperCase()}
              </span>
            </Link>
          ))}
          <div className="relative group/cap before:content-[''] before:absolute before:inset-x-0 before:top-full before:h-4 before:block">
            <Link
              href="/capabilities"
              className={cn(
                "flex items-center text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent cursor-pointer",
                pathname === "/capabilities" || pathname.startsWith("/capabilities/")
                  ? "text-accent border-b-2 border-accent pb-1"
                  : scrolled ? "text-primary/80" : "text-white/90"
              )}
            >
              CAPABILITIES
              <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover/cap:rotate-180" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover/cap:opacity-100 group-hover/cap:visible transition-all duration-200 pointer-events-none group-hover/cap:pointer-events-auto">
              <div
                className={cn(
                  "w-[90vw] lg:w-[680px] max-w-[min(680px,95vw)] py-6 px-6 lg:px-8 shadow-xl border",
                  scrolled
                    ? "bg-white border-border text-foreground"
                    : "bg-primary/95 backdrop-blur-md border-white/10 text-white"
                )}
              >
                <Link
                  href="/capabilities"
                  className={cn(
                    "block py-2 text-base font-semibold hover:underline mb-3",
                    scrolled ? "text-primary" : "text-white"
                  )}
                >
                  Overview
                </Link>
                <div className="h-px my-3 bg-border" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-6">
                  {CAPABILITY_CATEGORIES.map((cat) => (
                    <div key={cat.label}>
                      <div
                        className={cn(
                          "text-xs font-bold tracking-widest uppercase mb-3",
                          scrolled ? "text-muted-foreground" : "text-white/60"
                        )}
                      >
                        {cat.label}
                      </div>
                      <div className="space-y-2">
                        {cat.items.map((slug) => {
                          const cap = capBySlug[slug];
                          if (!cap) return null;
                          return (
                            <Link
                              key={cap.slug}
                              href={`/capabilities/${cap.slug}`}
                              className={cn(
                                "block text-base transition-colors hover:underline",
                                scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                              )}
                            >
                              {cap.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative group/ind before:content-[''] before:absolute before:inset-x-0 before:top-full before:h-4 before:block">
            <Link
              href="/industries"
              className={cn(
                "flex items-center text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent cursor-pointer",
                pathname === "/industries" || pathname.startsWith("/industries/")
                  ? "text-accent border-b-2 border-accent pb-1"
                  : scrolled ? "text-primary/80" : "text-white/90"
              )}
            >
              INDUSTRIES
              <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover/ind:rotate-180" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover/ind:opacity-100 group-hover/ind:visible transition-all duration-200 pointer-events-none group-hover/ind:pointer-events-auto">
              <div
                className={cn(
                  "w-[90vw] lg:w-[680px] max-w-[min(680px,95vw)] py-6 px-6 lg:px-8 shadow-xl border",
                  scrolled
                    ? "bg-white border-border text-foreground"
                    : "bg-primary/95 backdrop-blur-md border-white/10 text-white"
                )}
              >
                <Link
                  href="/industries"
                  className={cn(
                    "block py-2 text-base font-semibold hover:underline mb-3",
                    scrolled ? "text-primary" : "text-white"
                  )}
                >
                  Overview
                </Link>
                <div className="h-px my-3 bg-border" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-6">
                  {INDUSTRY_CATEGORIES.map((cat) => (
                    <div key={cat.label}>
                      <div
                        className={cn(
                          "text-xs font-bold tracking-widest uppercase mb-3",
                          scrolled ? "text-muted-foreground" : "text-white/60"
                        )}
                      >
                        {cat.label}
                      </div>
                      <div className="space-y-2">
                        {cat.items.map((slug) => {
                          const ind = indBySlug[slug];
                          if (!ind) return null;
                          return (
                            <Link
                              key={ind.slug}
                              href={`/industries/${ind.slug}`}
                              className={cn(
                                "block text-base transition-colors hover:underline",
                                scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                              )}
                            >
                              {ind.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact">
            <Button
              variant={scrolled ? "default" : "secondary"}
              className={cn(
                "rounded-none font-semibold px-6",
                !scrolled && "bg-white text-primary hover:bg-white/90"
              )}
            >
              Contact Us
            </Button>
          </Link>
        </nav>

        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("min-h-[44px] min-w-[44px]", scrolled ? "text-primary" : "text-white")} aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[min(400px,100vw)] sm:max-w-[400px] p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-10 overflow-y-auto max-h-[calc(100vh-6rem)] pb-8">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                    <span
                      className={cn(
                        "text-2xl font-serif cursor-pointer hover:text-primary/70 transition-colors",
                        pathname === link.href ? "text-primary font-bold" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <div className="space-y-4">
                  <Link href="/capabilities" onClick={() => setMobileOpen(false)}>
                    <span className="text-xl font-serif font-semibold cursor-pointer text-foreground hover:text-primary block">
                      Capabilities
                    </span>
                  </Link>
                  {CAPABILITY_CATEGORIES.map((cat) => (
                    <div key={cat.label} className="pl-2 space-y-2">
                      <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                        {cat.label}
                      </span>
                      {cat.items.map((slug) => {
                        const cap = capBySlug[slug];
                        if (!cap) return null;
                        return (
                          <Link
                            key={cap.slug}
                            href={`/capabilities/${cap.slug}`}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="text-base cursor-pointer text-muted-foreground hover:text-primary block">
                              {cap.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Link href="/industries" onClick={() => setMobileOpen(false)}>
                    <span className="text-xl font-serif font-semibold cursor-pointer text-foreground hover:text-primary block">
                      Industries
                    </span>
                  </Link>
                  {INDUSTRY_CATEGORIES.map((cat) => (
                    <div key={cat.label} className="pl-2 space-y-2">
                      <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                        {cat.label}
                      </span>
                      {cat.items.map((slug) => {
                        const ind = indBySlug[slug];
                        if (!ind) return null;
                        return (
                          <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="text-base cursor-pointer text-muted-foreground hover:text-primary block">
                              {ind.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <span className="text-2xl font-serif cursor-pointer text-primary font-bold">
                    Contact Us
                  </span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
