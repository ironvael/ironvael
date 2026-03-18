"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, ArrowUpRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { toast } = useToast();

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!value) return;
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
        toast({
          title: "Signup failed",
          description: data.message || "Please try again.",
          variant: "destructive",
        });
        return;
      }
      setStatus("success");
      setEmail("");
      toast({
        title: "You're subscribed",
        description: "We'll send our latest insights to your inbox.",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong.");
      toast({
        title: "Signup failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 lg:py-24">
      <div className="container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 border-b border-white/10 pb-12 sm:pb-16">
          <div className="sm:col-span-2 lg:col-span-5 space-y-6 order-first">
            <Link href="/" className="flex items-center gap-2 group min-h-[44px] items-center">
              <img
                src="/white-logo.png"
                alt="Ironvael"
                className="h-5 sm:h-6 w-auto"
              />
              <span className="text-xl font-serif font-bold tracking-tight group-hover:text-white/90 transition-colors">IRONVAEL</span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">
              We help the world&apos;s most ambitious change makers define the future.
              Together, we achieve extraordinary results.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="https://linkedin.com/company/ironvael" target="_blank" rel="noopener noreferrer" className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/ironvael" target="_blank" rel="noopener noreferrer" className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585578248745" target="_blank" rel="noopener noreferrer" className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-serif text-base sm:text-lg">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/press" className="text-white/60 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-serif text-base sm:text-lg">Expertise</h4>
            <ul className="space-y-3">
              <li><Link href="/capabilities/strategy" className="text-white/60 hover:text-white transition-colors">Strategy</Link></li>
              <li><Link href="/capabilities/digital-ai" className="text-white/60 hover:text-white transition-colors">Digital</Link></li>
              <li><Link href="/capabilities/transformation" className="text-white/60 hover:text-white transition-colors">Transformation</Link></li>
              <li><Link href="/industries" className="text-white/60 hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base sm:text-lg">Subscribe</h4>
            <p className="text-white/60 text-sm">Get our latest insights delivered to your inbox.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email for newsletter
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="bg-white/5 border border-white/10 px-3 py-3 sm:py-2 text-sm w-full focus:outline-none focus:border-white/30 text-white placeholder:text-white/40 min-h-[44px] disabled:opacity-60"
                autoComplete="email"
                aria-invalid={status === "error"}
                aria-describedby={errorMessage ? "footer-newsletter-error" : undefined}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-white text-primary px-4 py-3 sm:py-2 min-h-[44px] hover:bg-white/90 transition-colors shrink-0 disabled:opacity-60 flex items-center justify-center"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </button>
            </form>
            {errorMessage && (
              <p id="footer-newsletter-error" className="text-sm text-white/70">
                {errorMessage}
              </p>
            )}
            {status === "success" && (
              <p className="text-sm text-white/80">Thanks for subscribing.</p>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Ironvael Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
