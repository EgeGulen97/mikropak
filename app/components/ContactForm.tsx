"use client";

import type { FormEvent } from "react";

type ContactFields = {
  email: string;
  formTitle: string;
  formDescription: string;
  formCompanyLabel: string;
  formCompanyPlaceholder: string;
  formPersonLabel: string;
  formPersonPlaceholder: string;
  formPhoneLabel: string;
  formPhonePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formNeedLabel: string;
  formNeedPlaceholder: string;
  formSubmitLabel: string;
  formTrustLines: readonly string[];
};

type ContactFormProps = {
  contact: ContactFields;
  variant?: "light" | "dark";
};

export default function ContactForm({
  contact,
  variant = "light",
}: ContactFormProps) {
  const isDark = variant === "dark";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const company = (form.elements.namedItem("company") as HTMLInputElement)
      ?.value?.trim();
    const person = (form.elements.namedItem("person") as HTMLInputElement)
      ?.value?.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)
      ?.value?.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      ?.value?.trim();
    const need = (form.elements.namedItem("need") as HTMLTextAreaElement)
      ?.value?.trim();

    const lines = [
      company && `Firma: ${company}`,
      person && `Ad Soyad: ${person}`,
      phone && `Telefon: ${phone}`,
      email && `E-posta: ${email}`,
      need && `İhtiyaç:\n${need}`,
    ].filter(Boolean);

    const body = lines.join("\n\n");
    const subject = encodeURIComponent("Teklif talebi — Mikropak Ambalaj");
    const bodyEncoded = encodeURIComponent(
      body || "Teklif talebi formu gönderildi.",
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${bodyEncoded}`;
  }

  const inputClass = isDark
    ? "mt-1.5 w-full rounded-lg border border-white/[0.12] bg-[#0a111f] px-3 py-2 text-[14px] text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-slate-400/55 focus:ring-1 focus:ring-slate-500/25"
    : "mt-1.5 w-full rounded-lg border border-slate-200/90 bg-white px-3.5 py-2.5 text-[14px] text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-slate-300 focus:ring-1 focus:ring-[#E6005C]/25";

  const labelClass = isDark
    ? "block text-[12px] font-medium text-slate-400"
    : "block text-[12px] font-medium text-slate-600";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isDark
          ? "rounded-2xl border border-white/[0.09] bg-[#121a2c]/95 p-5 shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-6"
          : "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.06)] md:p-8"
      }
    >
      <div
        className={
          isDark
            ? "border-b border-white/[0.08] pb-4"
            : "border-b border-slate-100 pb-5"
        }
      >
        <h3
          className={
            isDark
              ? "text-[1.05rem] font-semibold tracking-tight text-slate-50 md:text-lg"
              : "text-[1.05rem] font-semibold tracking-tight text-slate-900 md:text-lg"
          }
        >
          {contact.formTitle}
        </h3>
        <p
          className={
            isDark
              ? "mt-1.5 text-[13px] leading-relaxed text-slate-400 md:text-[14px]"
              : "mt-1.5 text-[13px] leading-relaxed text-slate-600 md:text-[14px]"
          }
        >
          {contact.formDescription}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="contact-person" className={labelClass}>
            {contact.formPersonLabel}
          </label>
          <input
            id="contact-person"
            name="person"
            type="text"
            autoComplete="name"
            placeholder={contact.formPersonPlaceholder}
            className={inputClass}
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="contact-company" className={labelClass}>
            {contact.formCompanyLabel}
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={contact.formCompanyPlaceholder}
            className={inputClass}
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="contact-phone" className={labelClass}>
            {contact.formPhoneLabel}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={contact.formPhonePlaceholder}
            className={inputClass}
          />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="contact-email" className={labelClass}>
            {contact.formEmailLabel}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={contact.formEmailPlaceholder}
            className={inputClass}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="contact-need" className={labelClass}>
            {contact.formNeedLabel}
          </label>
          <textarea
            id="contact-need"
            name="need"
            rows={3}
            placeholder={contact.formNeedPlaceholder}
            className={`${inputClass} min-h-[80px] resize-y`}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-4">
        <button
          type="submit"
          className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full bg-[#E6005C] px-8 py-2.5 text-sm font-semibold text-white shadow-sm shadow-black/25 transition hover:bg-[#cc004f]"
        >
          {contact.formSubmitLabel}
        </button>

        <div
          className={
            isDark
              ? "flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-center text-[11px] leading-snug text-slate-500"
              : "flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-center text-[11px] leading-snug text-slate-500"
          }
        >
          {contact.formTrustLines.map((line) => (
            <span key={line} className="inline-flex items-center gap-1.5">
              <span
                className={isDark ? "text-slate-500" : "text-[#E6005C]"}
                aria-hidden
              >
                ✓
              </span>
              {line}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
}
