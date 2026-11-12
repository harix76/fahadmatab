import React, { useState } from 'react';
import { Check, Lock, Sparkles, Droplets, MessageCircle } from 'lucide-react';
import { PRODUCTS, COMBO_OFFER, BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

function ProductCard({ product }) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(
    product.variants.length > 1 ? 1 : 0
  );
  const activeVariant = product.variants[selectedVariantIdx];

  const orderUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}),\n\nI would like to order:\n• Product: ${product.shortName}\n• Bottle Size: ${activeVariant.label}\n• Price: Rs. ${activeVariant.price.toLocaleString()}\n\nPlease deliver in discreet unmarked packaging via Cash on Delivery.\nMy City: `
  );

  const consultUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}), I have a private question about ${product.shortName} before ordering.`
  );

  return (
    <div className="bg-white rounded-3xl border border-[#102212]/10 shadow-botanical overflow-hidden flex flex-col">
      {/* Bottle Visual Header */}
      <div className="relative bg-[#102212] overflow-hidden group">
        <img
          src={product.image}
          alt={`${product.title} - ${product.containerType}`}
          className="w-full aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="bg-[#102212]/90 backdrop-blur-sm border border-[#EFC368]/40 text-[#EFC368] font-heading font-semibold text-xs px-3.5 py-1.5 rounded-full">
            {product.category}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FFB700] text-[#102212] font-heading font-bold text-xs px-3.5 py-1.5 rounded-full shadow">
            <Lock className="w-3 h-3" />
            {product.badge}
          </span>
        </div>
        <div className="absolute bottom-3 left-4 bg-[#051306]/85 backdrop-blur-sm text-[#D8E2DA] text-xs px-3 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-1.5">
          <Droplets className="w-3.5 h-3.5 text-[#FFB700]" />
          <span>{product.containerType}</span>
        </div>
      </div>

      {/* Product Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#102212] leading-snug">
              {product.title}
            </h3>
            <p className="text-sm text-[#258F67] font-medium mt-1">
              {product.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#556260] leading-relaxed">
            {product.description}
          </p>

          {/* Key Botanicals */}
          <div className="flex flex-wrap gap-2 pt-1">
            {product.keyHerbs.map((herb) => (
              <span
                key={herb}
                className="text-xs font-medium bg-[#F8F4E8] text-[#173A21] border border-[#A88940]/30 px-3 py-1 rounded-full"
              >
                {herb}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2.5 pt-2">
            {product.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#102212]/90">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#258F67]/15 text-[#0B4F1E] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Size / Bottle Selector + Direct WhatsApp Checkout */}
        <div className="pt-5 border-t border-[#102212]/10 space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wider text-[#556260] mb-2">
              <span>Choose Oil Container Size</span>
              <span className="text-[#0B4F1E]">{activeVariant.supply}</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {product.variants.map((variant, idx) => {
                const selected = idx === selectedVariantIdx;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariantIdx(idx)}
                    className={`relative text-left p-3.5 rounded-2xl border-2 transition-all ${
                      selected
                        ? 'border-[#173A21] bg-[#F8F4E8] shadow-sm'
                        : 'border-[#102212]/10 bg-white hover:border-[#258F67]/50'
                    }`}
                  >
                    <span className="block font-heading font-bold text-xs sm:text-sm text-[#102212]">
                      {variant.label}
                    </span>
                    <span className="block font-heading font-extrabold text-base sm:text-lg text-[#0B4F1E] mt-0.5">
                      Rs. {variant.price.toLocaleString()}
                    </span>
                    {variant.tag && (
                      <span
                        className={`inline-block mt-1 text-[10px] font-heading font-bold uppercase px-2 py-0.5 rounded-full ${
                          selected
                            ? 'bg-[#FFB700] text-[#102212]'
                            : 'bg-[#102212]/10 text-[#556260]'
                        }`}
                      >
                        {variant.tag}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2.5">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#173A21] hover:bg-[#0B4F1E] text-white font-heading font-bold text-sm sm:text-base py-4 px-6 rounded-full shadow-md transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#FFB700]" />
              <span>
                Order {activeVariant.id} on WhatsApp — Rs. {activeVariant.price.toLocaleString()}
              </span>
            </a>

            <a
              href={consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-heading font-semibold text-[#173A21] hover:text-[#258F67] py-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask {BRAND.hakeemName} privately before ordering</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const comboWhatsAppUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}),\n\nI would like to order the ${COMBO_OFFER.title} (${COMBO_OFFER.subtitle}) at Rs. ${COMBO_OFFER.comboPrice.toLocaleString()} with Free Discreet COD Delivery.\nMy City: `
  );

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#0B4F1E] bg-[#258F67]/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#A88940]" />
            Fahad Matab Signature Oil Containers
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#102212]">
            Two Targeted Herbal Oil Formulations
          </h2>
          <p className="text-sm sm:text-base text-[#556260]">
            Bottled in protective UV-shielded apothecary glass oil containers to preserve raw Unani
            botanical strength. Pick your bottle size and land straight on WhatsApp to order.
          </p>
        </div>

        {/* 2 Flagship Oil Products */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Dual Combo Deal Banner */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#102212] via-[#173A21] to-[#214842] text-white p-6 sm:p-8 lg:p-10 border border-[#EFC368]/30 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#FFB700] text-[#102212] font-heading font-bold text-xs uppercase px-3 py-1 rounded-full">
                Bundle &amp; Save Rs. {COMBO_OFFER.savings}
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {COMBO_OFFER.title}
              </h3>
              <p className="text-sm sm:text-base text-[#D8E2DA]">{COMBO_OFFER.subtitle}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                {COMBO_OFFER.perks.map((perk) => (
                  <span
                    key={perk}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#EFC368]"
                  >
                    <Check className="w-4 h-4 text-[#FFB700]" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
              <div className="text-left lg:text-right">
                <span className="text-sm text-[#D2DBD4] line-through mr-2">
                  Rs. {COMBO_OFFER.regularPrice.toLocaleString()}
                </span>
                <span className="font-heading font-extrabold text-3xl text-[#FFB700]">
                  Rs. {COMBO_OFFER.comboPrice.toLocaleString()}
                </span>
              </div>
              <a
                href={comboWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFB700] hover:bg-[#EFC368] text-[#102212] font-heading font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-goldGlow transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Order Combo on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
