import React from 'react';
import { Leaf, ShieldCheck, MessageSquare, PackageCheck } from 'lucide-react';
import { INGREDIENTS, BRAND } from '../config/brand';

export function IngredientsAndTrust() {
  const steps = [
    {
      num: '01',
      icon: Leaf,
      title: 'Pick Your Herbal Oil Bottle',
      desc: 'Select the 60ml/120ml Male Vitality Oil or 120ml/240ml Women’s Hair Oil container.',
    },
    {
      num: '02',
      icon: MessageSquare,
      title: 'Land Straight on WhatsApp',
      desc: `Click Order on WhatsApp to confirm your city or consult privately with ${BRAND.hakeemName}.`,
    },
    {
      num: '03',
      icon: PackageCheck,
      title: 'Discreet Cash on Delivery',
      desc: 'Receive a sealed plain brown parcel at your doorstep anywhere in Pakistan.',
    },
  ];

  return (
    <section id="ingredients" className="py-16 sm:py-20 bg-[#102212] text-white botanical-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Ingredients Breakdown */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-[#EFC368]/30 shadow-2xl bg-[#051306]">
              <img
                src="/images/unani-ingredients-flatlay.jpg"
                alt="Pure Unani herbal oil ingredients including saffron, ashwagandha, cloves, amla, kalonji and rosemary"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#FFB700]">
                <ShieldCheck className="w-4 h-4" />
                Raw Botanical Integrity
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Authentic Unani Herbs. Zero Steroids or Mineral Oil.
              </h2>
              <p className="text-sm sm:text-base text-[#D2DBD4] leading-relaxed">
                Every batch at <strong className="text-white">{BRAND.name}</strong> is slow-infused
                by {BRAND.hakeemName} using cold-pressed carrier oils so delicate herbal alkaloids
                stay potent inside UV-tinted glass oil bottles.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Men's Herbs */}
              <div className="bg-[#173A21]/80 border border-[#EFC368]/25 rounded-2xl p-5 space-y-4">
                <h3 className="font-heading font-bold text-base text-[#FFB700]">
                  Male Vitality Oil Key Herbs
                </h3>
                <div className="space-y-3">
                  {INGREDIENTS.male.map((item) => (
                    <div key={item.name} className="border-b border-white/10 last:border-0 pb-2.5 last:pb-0">
                      <div className="font-heading font-semibold text-sm text-white">{item.name}</div>
                      <p className="text-xs text-[#D2DBD4] mt-0.5 leading-relaxed">{item.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Women's Herbs */}
              <div className="bg-[#173A21]/80 border border-[#258F67]/40 rounded-2xl p-5 space-y-4">
                <h3 className="font-heading font-bold text-base text-[#9EBCA6]">
                  Women&apos;s Hair Oil Key Herbs
                </h3>
                <div className="space-y-3">
                  {INGREDIENTS.women.map((item) => (
                    <div key={item.name} className="border-b border-white/10 last:border-0 pb-2.5 last:pb-0">
                      <div className="font-heading font-semibold text-sm text-white">{item.name}</div>
                      <p className="text-xs text-[#D2DBD4] mt-0.5 leading-relaxed">{item.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Ordering Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              How Ordering Works at {BRAND.domain}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#051306]/80 border border-white/10 rounded-2xl p-6 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#173A21] border border-[#EFC368]/30 flex items-center justify-center text-[#FFB700]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-[#EFC368]/40">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">{step.title}</h4>
                  <p className="text-sm text-[#D2DBD4] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
