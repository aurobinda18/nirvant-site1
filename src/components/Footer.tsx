import Link from "next/link";
import { Youtube, Linkedin, MessageCircle, Phone, Mail } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/neet" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "T&C", href: "/tnc" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      {/* Soft glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-0 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Useful Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Navigate Nirvant</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-300" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-300" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-300" />
                <a href="mailto:hello@nirvant.in" className="hover:text-white transition-colors">
                  hello@nirvant.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Stay Connected</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition"
              >
                <MessageCircle size={20} />
              </a>
            </div>

            <p className="text-slate-400 text-sm mt-6 leading-relaxed">
              Modern, calm, and confident guidance for students and professionals.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Nirvant. All rights reserved.
          </p>
          <div className="text-slate-400 text-sm">
            Built with care — wellness · education · tech
          </div>
        </div>
      </div>
    </footer>
  );
}

