import React, { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Herbal Oils', href: '#products' },
    { label: 'Quick Order', href: '#quick-order' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Anonymous Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const generalChatUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}), I would like private guidance and to order from Fahad Matab.`
  );

  return (
    <header className="sticky top-0 z-50 bg-[#102212]/95 backdrop-blur-md border-b border-white/10 text-white">
      {/* Top Privacy Strip */}
      <div className="bg-[#051306] text-xs py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[#D2DBD4]">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#FFB700]" />
            <span>100% Discreet Unmarked Parcel • Private WhatsApp Consultation with {BRAND.hakeemName}</span>
          </span>
          <span className="hidden sm:inline text-[#EFC368] font-medium">
            Official Store: {BRAND.domain} • Cash on Delivery Pakistan
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#EFC368]/70 bg-[#F8F4E8] shrink-0 shadow-md">
            <img
              src={BRAND.logo}
              alt="Fahad Matab Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-heading font-bold text-lg tracking-wide text-white leading-tight group-hover:text-[#FFB700] transition-colors">
              FAHAD MATAB
            </div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#EFC368] font-medium">
              {BRAND.domain} • {BRAND.hakeemName}
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-heading font-medium text-[#D8E2DA]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FFB700] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={generalChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFB700] hover:bg-[#EFC368] text-[#102212] font-heading font-bold text-sm px-5 py-2.5 rounded-full shadow-goldGlow transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-[#102212] border-t border-white/10 px-4 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-heading font-medium text-[#D8E2DA] hover:text-[#FFB700]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={generalChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#FFB700] text-[#102212] font-heading font-bold text-sm px-5 py-3 rounded-full"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Order on WhatsApp Now</span>
          </a>
        </div>
      )}
    </header>
  );
}
