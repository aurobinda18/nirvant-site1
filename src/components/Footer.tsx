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
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100" />
      {/* Soft glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-yellow-300/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-orange-300/25 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-0 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Useful Links */}
          <div>
            <h3 className="text-gray-900 text-xl font-semibold mb-4">Navigate Nirvant</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 text-xl font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-600" />
                <a href="tel:+917735932023" className="hover:text-gray-900 transition-colors">
                  +91 77359 32023
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-600" />
                <a href="tel:+916371214085" className="hover:text-gray-900 transition-colors">
                  +91 63712 14085
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-600" />
                <a href="mailto:nirvant.trgyy@gmail.com" className="hover:text-gray-900 transition-colors">
                  nirvant.trgyy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 text-xl font-semibold mb-4">Stay Connected</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/channel/UCFl6eKOz4X7n_Nn3WhMIetA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-full bg-white text-orange-700 border border-orange-200 hover:bg-orange-50 hover:text-orange-800 transition"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/nirvant-wellness/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white text-orange-700 border border-orange-200 hover:bg-orange-50 hover:text-orange-800 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/917735932023"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-white text-orange-700 border border-orange-200 hover:bg-orange-50 hover:text-orange-800 transition"
              >
                <MessageCircle size={20} />
              </a>
            </div>

            <p className="text-gray-600 text-sm mt-6 leading-relaxed">
              Modern, calm, and confident guidance for students and professionals.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-orange-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Nirvant. All rights reserved.
          </p>
          <div className="text-gray-600 text-sm">
            Built with care — education · wellness · tech
          </div>
        </div>
      </div>
    </footer>
  );
}

