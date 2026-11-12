import React, { useState } from 'react';
import { Lock, Send, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, COMBO_OFFER, BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

export function QuickWhatsAppOrder() {
  const [choice, setChoice] = useState('male-vitality-oil');
  const [sizeIdx, setSizeIdx] = useState(1);
  const [city, setCity] = useState('');
  const [note, setNote] = useState('Send in plain unmarked parcel');

  const isCombo = choice === 'combo';
  const activeProduct = PRODUCTS.find((p) => p.id === choice) || PRODUCTS[0];
  const activeVariant = !isCombo
    ? activeProduct.variants[sizeIdx] || activeProduct.variants[0]
    : null;

  const orderSummary = isCombo
    ? `${COMBO_OFFER.title} (${COMBO_OFFER.subtitle}) — Rs. ${COMBO_OFFER.comboPrice.toLocaleString()}`
    : `${activeProduct.shortName} (${activeVariant.label}) — Rs. ${activeVariant.price.toLocaleString()}`;

  const composedMessage = `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}),\n\nI want to place an order:\n• Selection: ${orderSummary}\n• Delivery City: ${city.trim() || 'Please advise COD charges'}\n• Privacy Preference: ${note.trim() || 'Discreet unmarked box'}\n\nPlease confirm dispatch timing.`;

  const waHref = buildWhatsAppUrl(composedMessage);

  return (
    <section id="quick-order" className="py-16 sm:py-20 bg-[#F8F4E8] border-y border-[#A88940]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#102212]/10 shadow-botanical overflow-hidden grid md:grid-cols-12">
          {/* Left Dark Info Panel */}
          <div className="md:col-span-5 bg-[#102212] text-white p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#FFB700] text-[#102212] font-heading font-bold text-xs px-3 py-1 rounded-full">
                Direct WhatsApp Checkout
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl leading-snug">
                3-Tap Order Straight to WhatsApp
              </h2>
              <p className="text-sm text-[#D2DBD4] leading-relaxed">
                No long forms or card payments. Pick your herbal oil bottle, enter your city, and
                land directly inside {BRAND.hakeemName}&apos;s WhatsApp chat (
                <strong className="text-[#EFC368] font-medium">{BRAND.whatsappDisplay}</strong>)
                with your order ready.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#051306]">
              <img
                src="/images/discreet-parcel-box.jpg"
                alt="Discreet plain unmarked brown parcel box from Fahad Matab"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-1.5">
                <div className="flex items-center gap-2 font-heading font-bold text-xs text-[#EFC368]">
                  <Lock className="w-3.5 h-3.5 text-[#FFB700]" />
                  100% Plain Discreet Box Guarantee
                </div>
                <p className="text-xs text-[#D2DBD4]">
                  Courier slip shows only your city &amp; &ldquo;Fahad Matab Herbal Care&rdquo;.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Builder */}
          <div className="md:col-span-7 p-7 sm:p-9 space-y-6">
            {/* Step 1: Pick Product */}
            <div className="space-y-2.5">
              <label className="block font-heading font-bold text-xs uppercase tracking-wider text-[#556260]">
                1. Choose Herbal Oil Product
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PRODUCTS.map((p) => {
                  const active = choice === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        setChoice(p.id);
                        setSizeIdx(1);
                      }}
                      className={`text-left p-3 rounded-2xl border-2 transition-all ${
                        active
                          ? 'border-[#173A21] bg-[#F8F4E8]'
                          : 'border-[#102212]/10 hover:border-[#258F67]/50'
                      }`}
                    >
                      <span className="block font-heading font-bold text-xs text-[#102212]">
                        {p.shortName}
                      </span>
                      <span className="block text-[11px] text-[#0B4F1E] mt-0.5 font-medium">
                        From Rs. {p.variants[0].price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setChoice('combo')}
                  className={`text-left p-3 rounded-2xl border-2 transition-all ${
                    isCombo
                      ? 'border-[#173A21] bg-[#F8F4E8]'
                      : 'border-[#102212]/10 hover:border-[#258F67]/50'
                  }`}
                >
                  <span className="block font-heading font-bold text-xs text-[#102212]">
                    1+1 Dual Combo
                  </span>
                  <span className="block text-[11px] text-[#A88940] mt-0.5 font-bold">
                    Save Rs. {COMBO_OFFER.savings}
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Bottle Size */}
            {!isCombo && (
              <div className="space-y-2.5">
                <label className="block font-heading font-bold text-xs uppercase tracking-wider text-[#556260]">
                  2. Select Oil Container Size
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {activeProduct.variants.map((v, idx) => {
                    const active = sizeIdx === idx;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSizeIdx(idx)}
                        className={`p-3 rounded-2xl border-2 text-left transition-all ${
                          active
                            ? 'border-[#173A21] bg-[#F8F4E8]'
                            : 'border-[#102212]/10 hover:border-[#258F67]/40'
                        }`}
                      >
                        <div className="font-heading font-bold text-xs sm:text-sm text-[#102212]">
                          {v.label}
                        </div>
                        <div className="text-xs text-[#0B4F1E] font-bold mt-0.5">
                          Rs. {v.price.toLocaleString()} &bull; {v.supply}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: City & Privacy */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="order-city"
                  className="block font-heading font-bold text-xs uppercase tracking-wider text-[#556260] mb-1.5"
                >
                  {isCombo ? '2.' : '3.'} Your Delivery City
                </label>
                <input
                  id="order-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Lahore, Karachi, Islamabad"
                  className="w-full px-4 py-3 rounded-xl border border-[#102212]/20 bg-[#FAFAF5] text-sm text-[#102212] focus:outline-none focus:border-[#173A21]"
                />
              </div>
              <div>
                <label
                  htmlFor="order-privacy"
                  className="block font-heading font-bold text-xs uppercase tracking-wider text-[#556260] mb-1.5"
                >
                  Privacy / Delivery Note
                </label>
                <input
                  id="order-privacy"
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Plain unmarked box"
                  className="w-full px-4 py-3 rounded-xl border border-[#102212]/20 bg-[#FAFAF5] text-sm text-[#102212] focus:outline-none focus:border-[#173A21]"
                />
              </div>
            </div>

            {/* Live Selection Summary */}
            <div className="bg-[#FAFAF5] rounded-2xl p-4 border border-[#102212]/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#102212]">
                <CheckCircle2 className="w-4 h-4 text-[#258F67] shrink-0" />
                <span className="font-medium">{orderSummary}</span>
              </div>
            </div>

            {/* Launch WhatsApp */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#FFB700] hover:bg-[#EFC368] text-[#102212] font-heading font-extrabold text-sm sm:text-base py-4 px-6 rounded-full shadow-goldGlow transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Continue to WhatsApp &amp; Confirm COD</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
