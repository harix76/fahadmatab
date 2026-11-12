import React from 'react';
import { BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}), I would like to order from Fahad Matab.`
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-[#051306] font-heading font-extrabold text-sm px-5 py-3.5 rounded-full shadow-2xl border-2 border-white/80 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp {BRAND.hakeemName}</span>
      <span className="sm:hidden">Order</span>
    </a>
  );
}
