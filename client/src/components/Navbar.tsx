import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
];

export function Navbar() {
  const [location] = useLocation();
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
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border/50 py-3" : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group z-50 relative">
          <div className="flex items-center gap-2">
            <div className={cn(
              "h-8 w-8 border-2 transition-colors duration-300", 
              scrolled ? "border-primary bg-primary" : "border-white bg-white"
            )} />
            <span className={cn(
              "text-2xl font-serif font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}>
              IRONVAEL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent cursor-pointer",
                location === link.href 
                  ? "text-accent border-b-2 border-accent pb-1" 
                  : scrolled ? "text-primary/80" : "text-white/90"
              )}>
                {link.label.toUpperCase()}
              </span>
            </Link>
          ))}
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

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={scrolled ? "text-primary" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span 
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-2xl font-serif cursor-pointer hover:text-primary/70 transition-colors",
                        location === link.href ? "text-primary font-bold" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Link href="/contact">
                  <span 
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-serif cursor-pointer text-primary font-bold"
                  >
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
