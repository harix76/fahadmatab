import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS, BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const askMoreUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}), I have a question regarding your herbal oils.`
  );

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-[#FAFAF5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="inline-block text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#0B4F1E]">
            Questions &amp; Privacy
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#102212]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#556260]">
            Everything you need to know about discreet delivery, herbal oil purity, and WhatsApp ordering.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className="bg-white rounded-2xl border border-[#102212]/10 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#102212]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#173A21] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[#556260] leading-relaxed border-t border-[#102212]/5 pt-3.5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct WhatsApp CTA Card */}
        <div className="mt-12 rounded-3xl bg-[#102212] text-white p-8 sm:p-10 text-center space-y-5 border border-[#EFC368]/30">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl">
            Still Curious? Talk Directly to {BRAND.hakeemName}
          </h3>
          <p className="text-sm sm:text-base text-[#D2DBD4] max-w-xl mx-auto">
            Every body and hair concern is different. Message us confidentially on WhatsApp for
            personalized herbal guidance and fast Cash on Delivery across Pakistan.
          </p>
          <a
            href={askMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#FFB700] hover:bg-[#EFC368] text-[#102212] font-heading font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-goldGlow transition-all"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
