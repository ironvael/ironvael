import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-24">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-white" />
              <span className="text-xl font-serif font-bold tracking-tight">IRONVAEL</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              We help the world's most ambitious change makers define the future. 
              Together, we achieve extraordinary results.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Offices</Link></li>
              <li><Link href="/press" className="text-white/60 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg">Expertise</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-white/60 hover:text-white transition-colors">Strategy</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-white transition-colors">Digital</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-white transition-colors">Transformation</Link></li>
              <li><Link href="/industries" className="text-white/60 hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg">Subscribe</h4>
            <p className="text-white/60 text-sm">Get our latest insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 px-3 py-2 text-sm w-full focus:outline-none focus:border-white/30 text-white placeholder:text-white/40"
              />
              <button className="bg-white text-primary px-3 py-2 hover:bg-white/90 transition-colors">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Ironvael Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
