import React, { useState } from 'react';
import { Language, InquiryData } from '../../types';
import { translations } from '../../translations';
import { X, CheckCircle2, Send, Download } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialProduct?: string;
  initialCompany?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialProduct = '',
  initialCompany = '',
}) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    company: initialCompany || '',
    country: '',
    email: '',
    phone: '',
    businessInterest: 'Mineral / Resource Buyer',
    productCommodity: initialProduct || '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

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

  const handleDownloadSummary = () => {
    const textContent = `
=====================================================
KIDRILL GROUP - B2B COMMERCIAL INQUIRY SUMMARY
Reference ID: ${referenceId}
Date: ${new Date().toUTCString()}
=====================================================

Applicant: ${formData.name}
Company: ${formData.company}
Country: ${formData.country}
Email: ${formData.email}
Phone: ${formData.phone}
Business Interest: ${formData.businessInterest}
Target Product / Commodity: ${formData.productCommodity}

Requirements & Specifications:
${formData.message}

=====================================================
Commercial Trading Desks:
PT PMA Kidrill Metal Mining (Surabaya, Indonesia)
Thunder Mark Vietnam Co., Ltd (Ho Chi Minh City, Vietnam)
Email: total@datmv.com | Tel: +62 822 64973015
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

  const resetForm = () => {
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900 my-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 pb-4 border-b border-slate-100 pr-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b08a3e] block mb-1 font-semibold">
                {t.contact.tag}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {t.contact.formTitle}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                {t.contact.formDesc}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                    {t.contact.company} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={t.contact.companyPlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                    {t.contact.country} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder={t.contact.countryPlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                    {t.contact.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                    {t.contact.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                    {t.contact.businessInterest}
                  </label>
                  <select
                    value={formData.businessInterest}
                    onChange={(e) => setFormData({ ...formData, businessInterest: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
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
                <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                  {t.contact.productCommodity}
                </label>
                <input
                  type="text"
                  value={formData.productCommodity}
                  onChange={(e) => setFormData({ ...formData, productCommodity: e.target.value })}
                  placeholder={t.contact.productPlaceholder}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 mb-1 font-semibold">
                  {t.contact.message} *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f172a] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#c5a059]" />
                  <span>{submitting ? t.contact.submitting : t.contact.submitCTA}</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-slate-500">
                <span>Trading Email: total@datmv.com</span>
                <span>Surabaya Desk: +62 822 64973015</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-[#b08a3e] flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-[#b08a3e] tracking-widest uppercase block mb-1 font-semibold">
                REFERENCE: {referenceId}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {t.contact.successTitle}
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                {t.contact.successDesc}
              </p>
            </div>

            {/* Quick summary box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs font-mono text-slate-700 space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400">Company:</span>
                <span className="font-medium">{formData.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target Item:</span>
                <span className="font-medium">{formData.productCommodity || 'General Inquiry'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-[#b08a3e] font-semibold">Dispatched to Commercial Desk</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadSummary}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-900 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5 text-[#b08a3e]" />
                <span>{lang === 'en' ? 'Download RFQ Record (.txt)' : '문의서 파일 저장 (.txt)'}</span>
              </button>

              <button
                onClick={resetForm}
                className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
