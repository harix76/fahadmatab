import React from 'react';
import { ShieldCheck, Leaf, Truck, ArrowDownRight, Sparkles } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Hero() {
  const heroWhatsAppUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}), I want to consult privately and order your herbal oil.`
  );

  return (
    <section
      id="top"
      className="relative bg-[#102212] text-white overflow-hidden botanical-pattern"
    >
      {/* Subtle Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#0B4F1E]/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#FFB700]/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#173A21] border border-[#EFC368]/35 text-[#EFC368] px-4 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB700]" />
              <span>{BRAND.hakeemName} • {BRAND.domain}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight text-white">
              Pure Unani Herbal Oils for{' '}
              <span className="text-[#FFB700]">Men&apos;s Vitality</span> &amp;{' '}
              <span className="text-[#9EBCA6]">Women&apos;s Hair Care</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D2DBD4] leading-relaxed max-w-xl">
              Crafted with authentic cold-infused Unani herbs by{' '}
              <strong className="text-white font-medium">{BRAND.hakeemName}</strong> at{' '}
              <strong className="text-[#EFC368] font-medium">{BRAND.name}</strong> — pure herbal
              tila for male reproductive vitality and organic Amla, Bhringraj &amp; Kalonji hair
              growth oil for women. Order directly on WhatsApp in two clicks with plain discreet
              Cash on Delivery across Pakistan.
            </p>

            {/* Primary WhatsApp CTA + Explore */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFB700] hover:bg-[#EFC368] text-[#102212] font-heading font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-goldGlow transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/25 text-white font-heading font-semibold text-sm sm:text-base px-7 py-4 rounded-full transition-all"
              >
                <span>View Oil Bottles</span>
                <ArrowDownRight className="w-4 h-4 text-[#FFB700]" />
              </a>
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D8E2DA]">
                <Leaf className="w-4 h-4 text-[#FFB700] shrink-0" />
                <span>100% Pure Herbal Oils</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D8E2DA]">
                <ShieldCheck className="w-4 h-4 text-[#FFB700] shrink-0" />
                <span>Unmarked Private Parcel</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D8E2DA]">
                <Truck className="w-4 h-4 text-[#FFB700] shrink-0" />
                <span>Pakistan COD Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Product Hero Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#EFC368]/30 bg-[#051306] shadow-2xl">
              <img
                src={BRAND.heroImage}
                alt="Fahad Matab Male Vitality Oil and Women Herbal Hair Oil glass bottles"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/11]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#051306] via-[#051306]/80 to-transparent p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-heading font-bold text-sm sm:text-base text-white">
                    2 Signature Herbal Oil Formulations
                  </p>
                  <p className="text-xs text-[#D2DBD4]">
                    Amber Dropper Bottle (Men) &bull; Emerald Dispenser Bottle (Women)
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-[#FFB700] text-[#102212] font-heading font-bold text-xs px-3.5 py-1.5 rounded-full">
                  4.9 &#9733; Anonymous Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
