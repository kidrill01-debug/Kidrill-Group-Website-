import React, { useState } from 'react';
import { Language, InquiryData } from '../../types';
import { translations } from '../../translations';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Download } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    businessInterest: 'Mineral / Resource Buyer',
    productCommodity: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const ref = `KG-RFQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadRecord = () => {
    const textContent = `
=====================================================
KIDRILL GROUP - OFFICIAL B2B INQUIRY DISPATCH
Reference ID: ${referenceId}
Transmission Timestamp: ${new Date().toISOString()}
=====================================================

Applicant: ${formData.name}
Corporate Entity: ${formData.company}
Country / Jurisdiction: ${formData.country}
Corporate Email: ${formData.email}
Telephone: ${formData.phone}
Trade Category: ${formData.businessInterest}
Target Product / Commodity: ${formData.productCommodity}

Technical Specifications & Scope:
${formData.message}

=====================================================
Headquarters & Operating Trading Desks:
1. PT PMA Kidrill Metal Mining: Surabaya, Indonesia
2. Thunder Mark Vietnam Co., Ltd: Ho Chi Minh City, Vietnam

Commercial Contact:
Email: total@datmv.com
Tel: +62 822 64973015
=====================================================
    `.trim();

    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${referenceId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="pt-32 pb-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#b08a3e] uppercase mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span className="font-semibold">{t.contact.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-slate-900 mb-6">
            {t.contact.title}
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Dual Offices & Contact Info on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Box */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block font-semibold">
                COMMERCIAL CHANNELS
              </span>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="space-y-1">
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.contact.emailValue}`}
                      className="text-base font-semibold text-slate-900 hover:text-[#b08a3e] transition-colors"
                    >
                      {t.contact.emailValue}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(t.contact.emailValue, 'email')}
                    className="p-2 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="space-y-1">
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={`tel:${t.contact.phoneValue.replace(/\s+/g, '')}`}
                      className="text-base font-semibold text-slate-900 hover:text-[#b08a3e] transition-colors font-mono"
                    >
                      {t.contact.phoneValue}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(t.contact.phoneValue, 'phone')}
                    className="p-2 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Operating Entity 01: Indonesia */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#b08a3e] font-semibold">
                  INDONESIA HEADQUARTERS
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">PT PMA KIDRILL</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {t.contact.office1.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-slate-700 leading-relaxed font-medium">
                <MapPin className="w-4 h-4 text-[#b08a3e] shrink-0" />
                <span className="font-mono text-xs text-slate-700">
                  {t.contact.office1.address}
                </span>
              </div>

              <button
                onClick={() => handleCopy(t.contact.office1.address, 'address1')}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-950 transition-colors font-mono pt-1 cursor-pointer"
              >
                {copiedField === 'address1' ? (
                  <span className="text-emerald-600 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Copied Location</span>
                ) : (
                  <span className="flex items-center gap-1"><Copy className="w-3.5 h-3.5" /> Copy Location</span>
                )}
              </button>
            </div>

            {/* Operating Entity 02: Vietnam */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-[#b08a3e] font-semibold">
                  VIETNAM EXPORT HEADQUARTERS
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">THUNDER MARK VN</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {t.contact.office2.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-slate-700 leading-relaxed font-medium">
                <MapPin className="w-4 h-4 text-[#b08a3e] shrink-0" />
                <span className="font-mono text-xs text-slate-700">
                  {t.contact.office2.address}
                </span>
              </div>

              <button
                onClick={() => handleCopy(t.contact.office2.address, 'address2')}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-950 transition-colors font-mono pt-1 cursor-pointer"
              >
                {copiedField === 'address2' ? (
                  <span className="text-emerald-600 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Copied Location</span>
                ) : (
                  <span className="flex items-center gap-1"><Copy className="w-3.5 h-3.5" /> Copy Location</span>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Commercial Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
            {!submitted ? (
              <div>
                <div className="mb-8 pb-4 border-b border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block mb-2 font-semibold">
                    B2B INQUIRY FORM
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {t.contact.formTitle}
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    {t.contact.formDesc}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        {t.contact.company} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        {t.contact.country} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder={t.contact.countryPlaceholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        {t.contact.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                        {t.contact.businessInterest}
                      </label>
                      <select
                        value={formData.businessInterest}
                        onChange={(e) => setFormData({ ...formData, businessInterest: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                      >
                        {t.contact.interestOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                      {t.contact.productCommodity}
                    </label>
                    <input
                      type="text"
                      value={formData.productCommodity}
                      onChange={(e) => setFormData({ ...formData, productCommodity: e.target.value })}
                      placeholder={t.contact.productPlaceholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 mb-1.5 font-semibold">
                      {t.contact.message} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs tracking-[0.16em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-[#c5a059]" />
                      <span>{submitting ? t.contact.submitting : t.contact.submitCTA}</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success View */
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-[#b08a3e] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono text-[#b08a3e] tracking-widest uppercase block mb-2 font-semibold">
                    TRACKING REFERENCE: {referenceId}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs font-mono text-slate-700 space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Applicant:</span>
                    <span className="font-medium">{formData.name} ({formData.company})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sector:</span>
                    <span className="font-medium">{formData.businessInterest}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Item:</span>
                    <span className="font-medium">{formData.productCommodity || 'General Inquiry'}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    onClick={handleDownloadRecord}
                    className="py-3 px-5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-900 transition-colors flex items-center gap-2 cursor-pointer shadow-xs font-semibold"
                  >
                    <Download className="w-4 h-4 text-[#b08a3e]" />
                    <span>Download RFQ Summary (.txt)</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        country: '',
                        email: '',
                        phone: '',
                        businessInterest: 'Mineral / Resource Buyer',
                        productCommodity: '',
                        message: '',
                      });
                    }}
                    className="py-3 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
