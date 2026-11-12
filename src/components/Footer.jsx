import React from 'react';
import { Lock, Truck, MapPin } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  const waUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}), I would like to place an order.`
  );

  return (
    <footer className="bg-[#051306] text-[#D2DBD4] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#EFC368]/60 bg-[#F8F4E8]">
                <img src={BRAND.logo} alt="Fahad Matab Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">FAHAD MATAB</div>
                <div className="text-xs text-[#EFC368] uppercase tracking-wider">
                  {BRAND.domain} &bull; {BRAND.hakeemName}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#959595]">
              Traditional Unani herbal oil preparations by {BRAND.hakeemName}. Focused on pure male
              reproductive vitality oils and women&apos;s botanical hair nourishment, delivered
              privately nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="hover:text-[#FFB700] transition-colors">
                  Male Vitality Herbal Oil (60ml / 120ml)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FFB700] transition-colors">
                  Women&apos;s Herbal Hair Oil (120ml / 240ml)
                </a>
              </li>
              <li>
                <a href="#quick-order" className="hover:text-[#FFB700] transition-colors">
                  3-Tap WhatsApp Order Builder
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FFB700] transition-colors">
                  Anonymous Verified Reviews
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FFB700] transition-colors">
                  Privacy &amp; Delivery FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp & Delivery Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Direct WhatsApp &amp; Dispatch
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#FFB700] shrink-0" />
                <span>Plain Unmarked Discreet Packaging</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#FFB700] shrink-0" />
                <span>{BRAND.deliveryRegion}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFB700] shrink-0" />
                <span>WhatsApp Desk: {BRAND.whatsappDisplay}</span>
              </div>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFB700] hover:bg-[#EFC368] text-[#102212] font-heading font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-6 pb-4 border-b border-white/10">
          <div className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#EFC368] mb-2">
            Herbal Specialties &amp; Pakistan Delivery Coverage
          </div>
          <p className="text-xs text-[#959595] leading-relaxed">
            Male Vitality Herbal Oil Pakistan &bull; Unani Herbal Tila by Hakeem Azhar &bull;
            Mardana Kamzori &amp; Nerve Strength Oil &bull; Best Herbal Hair Oil in Pakistan &bull;
            Amla Bhringraj Kalonji &amp; Rosemary Hair Growth Oil &bull; Zero Mineral Oil &bull;
            Discreet Cash on Delivery in Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad,
            Peshawar &amp; Nationwide &bull; <a href="/sitemap.xml" className="text-[#EFC368] hover:underline">Sitemap</a> &bull;{' '}
            <a href="/robots.txt" className="text-[#EFC368] hover:underline">Robots.txt</a> &bull;{' '}
            <a href="/llm.txt" className="text-[#EFC368] hover:underline">LLM.txt</a>
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#959595]">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name} ({BRAND.domain}) &mdash; {BRAND.hakeemName}.
            All rights reserved.
          </p>
          <p>Herbal external-use preparations. Individual results vary naturally.</p>
        </div>
      </div>
    </footer>
  );
}
