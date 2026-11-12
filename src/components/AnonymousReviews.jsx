import React, { useState } from 'react';
import { Star, Shield, Lock, CheckCircle2, Quote } from 'lucide-react';
import { ANONYMOUS_REVIEWS, BRAND, buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

export function AnonymousReviews() {
  const [filter, setFilter] = useState('all');

  const filtered = ANONYMOUS_REVIEWS.filter((r) =>
    filter === 'all' ? true : r.productKey === filter
  );

  const shareReviewUrl = buildWhatsAppUrl(
    `Assalam-o-Alaikum ${BRAND.hakeemName} (${BRAND.domain}), I would like to share my anonymous review for Fahad Matab (do not publish my name): `
  );

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#F8F4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Privacy Assurance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#0B4F1E] bg-[#258F67]/15 px-4 py-1.5 rounded-full">
              <Lock className="w-3.5 h-3.5" />
              Identity 100% Hidden • Anonymous Buyer Reviews
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#102212]">
              Real Feedback. Complete Anonymity.
            </h2>
            <p className="text-sm sm:text-base text-[#556260]">
              We respect every client&apos;s privacy. Reviews on{' '}
              <strong className="text-[#102212]">{BRAND.domain}</strong> use coded buyer IDs with
              zero names or photos published.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="bg-[#102212] text-white rounded-2xl px-6 py-4 border border-[#EFC368]/30 flex items-center gap-4 shrink-0">
            <div>
              <div className="font-heading font-extrabold text-3xl text-[#FFB700] leading-none">
                4.9<span className="text-base text-white/70">/5</span>
              </div>
              <div className="flex items-center gap-0.5 mt-1.5 text-[#FFB700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="border-l border-white/15 pl-4 text-xs text-[#D2DBD4] space-y-0.5">
              <div className="font-heading font-bold text-white text-sm">Verified COD Buyers</div>
              <div>100% Anonymous Profiles</div>
              <div className="text-[#EFC368]">Discreet Packaging Rated 5.0</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {[
            { id: 'all', label: 'All Anonymous Reviews' },
            { id: 'male', label: 'Male Vitality Oil' },
            { id: 'women', label: "Women's Hair Oil" },
          ].map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`font-heading font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all ${
                  active
                    ? 'bg-[#173A21] text-white shadow-sm'
                    : 'bg-white text-[#556260] border border-[#102212]/10 hover:border-[#173A21]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((rev) => (
            <article
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-[#102212]/10 shadow-sm flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-0.5 text-[#FFB700]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-heading font-semibold text-[#0B4F1E] bg-[#258F67]/10 px-2.5 py-1 rounded-full">
                    {rev.product}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-5 h-5 text-[#A88940]/35 mb-1.5" />
                  <p className="text-sm text-[#102212]/90 leading-relaxed">{rev.comment}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#102212]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#102212] text-[#FFB700] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-heading font-bold text-xs sm:text-sm text-[#102212] whitespace-nowrap truncate">
                    {rev.anonLabel}
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[11px] text-[#556260] mt-0.5">
                    <span className="inline-flex items-center gap-1 min-w-0 truncate">
                      <CheckCircle2 className="w-3 h-3 text-[#258F67] shrink-0" />
                      <span className="truncate">
                        {rev.verifiedNote} &bull; {rev.city}
                      </span>
                    </span>
                    <span className="text-[11px] text-[#7A8482] shrink-0">{rev.timeAgo}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Submit Anonymous Feedback Link */}
        <div className="mt-10 text-center">
          <a
            href={shareReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#173A21] text-[#173A21] hover:text-white border border-[#173A21]/25 font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#258F67]" />
            <span>Submit Your Anonymous Review via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
