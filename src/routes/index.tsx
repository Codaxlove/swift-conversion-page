import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Check, Lock, Zap, Star, ShieldCheck, Download, X, Flame } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Drop 5 lbs in 72 Hours — Free Men's Keto Reset" },
      {
        name: "description",
        content:
          "A simple day-by-day keto reset built for men. Drop your first 5 lbs in 72 hours. Free instant access — no email, no payment.",
      },
      { property: "og:title", content: "Drop 5 lbs in 72 Hours — Built For Men" },
      {
        property: "og:description",
        content: "Free 72-hour men's keto reset. Instant access. No email required.",
      },
    ],
  }),
});

const BASE_LINK = "https://lockerpreview.com/cl/v/pqrrw3";

const GREETINGS: Record<string, string> = {
  pinterest: "👋 If you're coming from Pinterest, read this carefully…",
  tiktok: "👋 If you're coming from TikTok, read this carefully…",
  instagram: "👋 If you're coming from Instagram, read this carefully…",
  youtube: "👋 If you're coming from YouTube, read this carefully…",
  quora: "👋 If you're coming from Quora, read this carefully…",
};

function Landing() {
  const [src, setSrc] = useState<string>("direct");
  const [greeting, setGreeting] = useState<string>("👋 Welcome — read this carefully…");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get("src") || "").toLowerCase().trim();
    if (raw && GREETINGS[raw]) {
      setSrc(raw);
      setGreeting(GREETINGS[raw]);
    } else if (raw) {
      setSrc(raw);
    }
  }, []);

  const ctaLink = useMemo(() => `${BASE_LINK}?src=${encodeURIComponent(src)}`, [src]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Urgency bar */}
      <div className="sticky top-0 z-50 bg-primary text-primary-foreground animate-urgency-pulse">
        <div className="mx-auto max-w-[820px] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider sm:text-sm">
          ⚡ Free Today Only — Expires Soon
        </div>
      </div>

      {/* Greeting */}
      <div className="border-b border-border/60 bg-card/50">
        <div className="mx-auto max-w-[820px] px-4 py-3 text-center text-xs font-medium text-muted-foreground sm:text-sm">
          {greeting}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-[820px] px-5 py-12 text-center sm:py-16">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            72-Hour Men's Reset
          </span>
          <h1 className="mt-6 text-balance text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            Drop Your First <span className="text-primary">5 lbs In 72 Hours</span> — Built For Men Who Are Done Making Excuses
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A simple day-by-day keto reset designed for men who've tried before and failed. Fast results. No starving. No confusion.
          </p>
          <a
            href={ctaLink}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-extrabold uppercase tracking-wide text-primary-foreground shadow-glow transition-transform duration-200 animate-pulse-glow hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:text-lg"
          >
            🔓 Unlock The Free Guide
          </a>
          <p className="mt-3 text-sm font-semibold text-primary">👉 Takes 30 seconds to unlock</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-[820px] gap-3 px-5 py-5 text-sm font-semibold sm:grid-cols-3 sm:text-base">
          <div className="flex items-center justify-center gap-2">
            <Check className="h-4 w-4 text-primary" /> 4,200+ men downloaded this week
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star className="h-4 w-4 fill-primary text-primary" /> Rated 4.9/5
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 text-primary" /> Results in 72 hours
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-[820px] px-5 py-14 sm:py-20">
        <h2 className="text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
          Why Most Men <span className="text-primary">Fail Keto</span>
        </h2>
        <div className="mt-10 space-y-3">
          {[
            "Quit on Day 2 when cravings hit too hard",
            "Lose weight then gain it all back even faster",
            "Get confused about what to actually eat and give up",
          ].map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:p-5">
              <X className="mt-0.5 h-6 w-6 flex-none text-destructive" />
              <p className="text-base font-semibold sm:text-lg">{p}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-5 text-center text-base font-bold text-primary sm:text-lg">
          This is NOT weakness — you were just missing the right system.
        </p>
      </section>

      {/* Solution */}
      <section className="bg-card/30 py-14 sm:py-20">
        <div className="mx-auto max-w-[820px] px-5">
          <h2 className="text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
            The <span className="text-primary">72-Hour Men's</span> Keto Reset
          </h2>
          <div className="mt-10 rounded-3xl border-2 border-primary/60 bg-gradient-card p-7 shadow-glow animate-border-glow sm:p-9">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Flame className="h-7 w-7" />
            </div>
            <ul className="space-y-3">
              {[
                "Day-by-day meal plan built for men's metabolism",
                "The Day 2 survival trick that kills cravings fast",
                "Keto flu fix that works within hours",
                "Full shopping list included",
                "Day 4 momentum plan to keep the weight off",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-none text-primary" strokeWidth={3} />
                  <span className="text-base font-semibold sm:text-lg">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-primary/10 px-4 py-3 text-center text-sm font-bold text-primary sm:text-base">
              💡 Normally sold — free for a limited time
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-[820px] px-5 py-14 sm:py-20">
        <h2 className="text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
          What's Inside <span className="text-primary">The Guide</span>
        </h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {[
            "Exact meals to eat each day",
            "The Day 2 survival trick",
            "Keto flu fix that works fast",
            "Simple science explained",
            "Day 4 plan to keep losing",
            "Print-ready shopping list",
          ].map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <p className="text-base font-semibold">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card/30 py-14 sm:py-20">
        <div className="mx-auto max-w-[820px] px-5">
          <h2 className="text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Real Men. <span className="text-primary">Real Results.</span>
          </h2>
          <div className="mt-10 space-y-4">
            {[
              { name: "Marcus D.", quote: "Lost 7 lbs in 3 days. Wasn't even hungry. This is the real deal." },
              { name: "James K.", quote: "The Day 2 trick saved me. Never made it past Day 2 before this." },
              { name: "Tyler R.", quote: "Down 9 lbs in a week. My discipline is back. Highly recommend." },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="mt-4 text-base font-medium leading-relaxed">"{t.quote}"</p>
                <p className="mt-3 text-sm font-bold text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[820px] rounded-3xl border-2 border-primary bg-gradient-card p-8 text-center shadow-glow-strong sm:p-12">
          <Lock className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-5xl">
            Get Instant Access — <span className="text-primary">Free Today Only</span>
          </h2>
          <p className="mt-3 text-base font-semibold text-muted-foreground sm:text-lg">
            No email. No payment. Unlock in 30 seconds.
          </p>
          <a
            href={ctaLink}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-5 text-base font-black uppercase tracking-wide text-primary-foreground shadow-glow-strong transition-transform duration-200 animate-pulse-glow hover:scale-[1.03] active:scale-[0.98] sm:w-auto sm:px-10 sm:text-lg"
          >
            <Download className="h-5 w-5" /> 🔓 Yes — Give Me The Free Guide Now
          </a>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm font-semibold text-muted-foreground sm:flex-row sm:gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Secure
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Free Access</span>
            <span className="hidden sm:inline">•</span>
            <span>Instant Download</span>
          </div>
        </div>
      </section>

      {/* Urgency footer */}
      <section className="border-t border-border/60 bg-primary/5 px-5 py-8 text-center">
        <p className="mx-auto max-w-[820px] text-base font-bold text-primary sm:text-lg">
          ⚡ This may not be free tomorrow — unlock it now while you can.
        </p>
      </section>
    </div>
  );
}
