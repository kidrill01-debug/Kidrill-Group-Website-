import React, { useState } from 'react';
import { Language, NewsItem } from '../../types';
import { translations } from '../../translations';
import { newsArticles } from '../../data/news';
import { ArrowUpRight, BookOpen, X } from 'lucide-react';

interface NewsPageProps {
  lang: Language;
}

export const NewsPage: React.FC<NewsPageProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingArticle, setReadingArticle] = useState<NewsItem | null>(null);

  const filteredArticles = newsArticles.filter((art) => {
    if (selectedCategory === 'All' || selectedCategory === '전체') return true;
    return art.category === selectedCategory || art.categoryKo === selectedCategory;
  });

  return (
    <div className="pt-32 pb-28 bg-[#fdfcf8] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.news.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.news.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.news.subtitle}
          </p>
        </div>

        {/* Notice of Sample Content */}
        <div className="mb-12 p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
            <span className="font-medium">{t.news.sampleNotice}</span>
          </div>
          <span className="text-slate-400 hidden sm:inline">KIDRILL EDITORIAL RESEARCH DESK</span>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 pb-4 mb-10 overflow-x-auto">
          {t.news.categories.map((cat, idx) => {
            const isActive = selectedCategory === cat || (cat === 'All' && selectedCategory === 'All') || (cat === '전체' && selectedCategory === '전체');
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#0f172a] text-white font-semibold shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#c5a059]/70 shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-4 pb-3 border-b border-slate-100">
                  <span className="text-[#b08a3e] font-semibold uppercase">
                    {lang === 'en' ? art.category : art.categoryKo}
                  </span>
                  <span>{art.date}</span>
                </div>

                {/* Sample Badge */}
                <div className="mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-500 uppercase">
                    Sample Article
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#b08a3e] transition-colors leading-snug">
                  {lang === 'en' ? art.titleEn : art.titleKo}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {lang === 'en' ? art.summaryEn : art.summaryKo}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{art.readTime}</span>
                <button
                  onClick={() => setReadingArticle(art)}
                  className="text-xs font-mono uppercase tracking-wider text-slate-900 hover:text-[#b08a3e] flex items-center gap-1.5 transition-colors cursor-pointer font-semibold"
                >
                  <span>{t.news.readArticle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b08a3e]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-900 my-8 max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pb-6 border-b border-slate-100 pr-12">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                <span className="text-[#b08a3e] uppercase tracking-wider font-semibold">
                  {lang === 'en' ? readingArticle.category : readingArticle.categoryKo}
                </span>
                <span>·</span>
                <span>{readingArticle.date}</span>
                <span>·</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] text-slate-500 uppercase">
                  Sample Article
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 leading-tight">
                {lang === 'en' ? readingArticle.titleEn : readingArticle.titleKo}
              </h2>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              {(lang === 'en' ? readingArticle.contentEn : readingArticle.contentKo).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bottom Footer in Modal */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Kidrill Group International Commercial Editorial</span>
              <button
                onClick={() => setReadingArticle(null)}
                className="py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer font-semibold"
              >
                {t.news.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
