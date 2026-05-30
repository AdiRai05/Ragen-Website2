"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";

const faqs = [
  {
    q: "How does the trial sprint work?",
    a: "We scope a small, paid sprint — typically 1-2 weeks — on a real task your team needs done. You pay for the sprint. We ship working code. If you like the quality and the process, we continue. If not, we part ways cleanly.",
  },
  {
    q: "What is the minimum engagement?",
    a: "For managed teams, we ask for a 3-month commitment to start, then month-to-month after that. For project work, it depends on the scope. For staff augmentation, there is no minimum — you can scale up or down as needed.",
  },
  {
    q: "Who owns the code?",
    a: "You do. All code, documentation, and intellectual property created during the engagement belongs to you. We work in your repositories, under your accounts, from day one.",
  },
  {
    q: "How do you handle time zones?",
    a: "We work primarily in IST (India Standard Time) but maintain significant overlap with US and European time zones. Our team is available during your working hours for standups and collaboration.",
  },
  {
    q: "What technologies do you work with?",
    a: "Our core stack is React, Next.js, Node.js, Python, and Go on the backend, with PostgreSQL, MongoDB, and Redis for data. We also have deep experience with AWS, GCP, Docker, and Kubernetes.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData();
    formData.append("access_key", "bce854da-5c12-4584-bad0-f3c1312a6c74");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("company", form.company);
    formData.append("message", form.message);
    try { await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData }); } catch (_) {}
    setSending(false);
    setSubmitted(true);
  };

  return (
    <main className="pt-28 lg:pt-40 pb-32">
      {/* HERO */}

      <section className="relative pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] lg:h-[500px] glow-blue pointer-events-none opacity-40" />
        <div className="relative z-10 container-width">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-semibold tracking-tight lg:text-8xl">
              Let&apos;s talk about
              <br />
              <span className="text-zinc-400">what you need to build.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-600 max-w-2xl">
              Tell us about your project. We&apos;ll get back to you within a few hours during business days.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}

      <section className="relative py-24 border-t border-zinc-200 overflow-hidden">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="relative z-10 container-width">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              {submitted ? (
                <div className="rounded-[32px] border border-zinc-200 bg-white p-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">Message received.</h3>
                  <p className="mt-3 text-zinc-600">We typically respond within a few hours during business days.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }} className="mt-6 text-sm font-medium text-zinc-500 transition-colors hover:text-black">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Name</label>
                    <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 focus:border-black" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 focus:border-black" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-2">Company</label>
                    <input id="company" type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 focus:border-black" placeholder="Your company" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">What are you looking to build?</label>
                    <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-300 focus:border-black resize-none" placeholder="Tell us about your project, timeline, and what kind of help you need..." />
                  </div>
                  <button type="submit" disabled={sending} className="group w-full flex items-center justify-center gap-2 rounded-xl bg-black py-4 text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60">
                    {sending ? "Sending..." : "Send Message"}
                    <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-10">
              {[
                { icon: Mail, title: "Email", value: "ragen@ragen.org", href: "mailto:ragen@ragen.org", desc: "We typically respond within a few hours during business days." },
                { icon: Phone, title: "Phone", value: "+91 70780 82045", href: "tel:+917078082045", desc: "Available during business hours, India time." },
                { icon: MapPin, title: "Location", value: "India", href: null, desc: "Working with teams across North America, Europe, and Asia-Pacific." },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100"><Icon size={20} className="text-zinc-600" /></div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{item.title}</h3>
                      <p className="mt-1 text-xl font-semibold">{item.value}</p>
                      <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                );
                return item.href ? <a key={item.title} href={item.href} className="block transition-colors hover:opacity-70">{content}</a> : <div key={item.title}>{content}</div>;
              })}

              <div className="rounded-[32px] border border-zinc-200 bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">What happens next</h3>
                <ol className="mt-6 space-y-5">
                  {["You send us a message about what you need.", "We reply within 24 hours to schedule a call.", "We talk for 30 minutes about your project. No pitch deck.", "If there is a fit, we propose a paid trial sprint."].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                      <span className="text-xs font-mono text-zinc-400 shrink-0 mt-0.5">{`0${i + 1}`}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 border-t border-zinc-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 container-width">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Frequently asked questions.</h2>
          </div>
          <div className="mt-10 lg:mt-16 max-w-3xl divide-y divide-zinc-200">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-semibold text-zinc-800 transition-colors group-open:text-black">{faq.q}</span>
                  <span className="text-zinc-400 transition-transform group-open:rotate-45 shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-relaxed text-zinc-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
