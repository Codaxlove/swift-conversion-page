import { createFileRoute } from "@tanstack/react-router";
import { Check, Lock, Zap, Star, ShieldCheck, Smartphone, Download, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Drop 5 lbs in 72 Hours — Free Keto Kickstart Guide" },
      {
        name: "description",
        content:
          "A simple day-by-day keto plan for people who failed before. Drop your first 5 lbs in 72 hours. Free instant access — no email, no payment.",
      },
      { property: "og:title", content: "Drop 5 lbs in 72 Hours — Free Keto Kickstart" },
      {
        property: "og:description",
        content: "Free 72-hour keto reset. Instant access. No email required.",
      },
    ],
  }),
});

const CTA_LINK = "https://lockerpreview.com/cl/v/pqrrw3";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky urgency bar */}
      <div className="sticky top-0 z-50 bg-gradient-cta text-primary-foreground animate-urgency-pulse">
        <div className="mx-auto max-w-[1100px] px-4 py-2.5 text-center text-sm font-bold sm:text-base">
          ⚡ LIMITED TIME: Free Keto Guide Expires Today
        </div>
      </div>

      {/* Section 0 — Quora pre-header */}
      <div className="border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-[1100px] px-4 py-3 text-center text-xs font-medium text-muted-foreground sm:text-sm">
          👋 If you're coming from Quora, read this carefully…
        </div>
      </div>

      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-[1100px] px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="animate-fade-up text-center lg:text-left">
              <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                72-Hour Keto Reset
              </span>
              <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Drop Your First <span className="text-primary">5 lbs In 72 Hours</span> — Without
                Starving Or Quitting Keto Again
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
                A simple day-by-day keto plan designed for people who failed before and want fast
                results.
              </p>

              <a
                href={CTA_LINK}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta px-6 py-4 text-base font-extrabold text-primary-foreground shadow-glow transition-transform duration-200 animate-pulse-glow hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:text-lg"
              >
                🔓 Unlock The Free Guide
              </a>
              <p className="mt-3 text-sm font-medium text-primary">
                👉 Takes 30 seconds to unlock
              </p>
            </div>

            {/* Visual card (desktop right) */}
            <div className="animate-fade-up lg:block">
              <div className="relative mx-auto max-w-md rounded-3xl border-2 border-primary/60 bg-gradient-card p-6 shadow-glow-strong animate-border-glow sm:p-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground">
                  Free Today
                </div>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Lock className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="text-center text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  The 72-Hour <span className="text-primary">Keto Kickstart</span>
                </h3>
                <p className="mt-2 text-center text-sm font-semibold text-muted-foreground">
                  Drop Your First 5 lbs Fast
                </p>
                <div className="mt-5 space-y-2 border-t border-border/60 pt-5">
                  {["Day-by-day meal plan", "Keto flu fix", "Shopping list included"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 flex-none text-primary" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Trust bar */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-[1100px] gap-3 px-4 py-5 text-sm sm:grid-cols-3 sm:text-base">
          <div className="flex items-center justify-center gap-2 font-semibold">
            <Check className="h-5 w-5 text-primary" /> 4,200+ downloads in 7 days
          </div>
          <div className="flex items-center justify-center gap-2 font-semibold">
            <Star className="h-5 w-5 fill-primary text-primary" /> Rated 4.9/5 by real users
          </div>
          <div className="flex items-center justify-center gap-2 font-semibold">
            <Zap className="h-5 w-5 text-primary" /> Results in as little as 72 hours
          </div>
        </div>
      </section>

      {/* Section 3 — Problem */}
      <section className="mx-auto max-w-[1100px] px-4 py-14 sm:py-20">
        <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          Why Most People Fail Keto <br className="hidden sm:block" />
          <span className="text-muted-foreground">(And Regain The Weight)</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {[
            "Quit around Day 2 — cravings hit too hard",
            "Regain the weight even faster than they lost it",
            "Get confused about meals and give up",
          ].map((pain) => (
            <div
              key={pain}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:p-5"
            >
              <X className="mt-0.5 h-6 w-6 flex-none text-destructive" />
              <p className="text-base font-semibold sm:text-lg">{pain}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl rounded-xl border border-primary/30 bg-primary/5 p-5 text-center text-base font-bold text-primary sm:text-lg">
          👉 This is NOT your fault — you were just missing a simple system.
        </p>
      </section>

      {/* Section 4 — Solution */}
      <section className="bg-card/30 py-14 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-4">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            The <span className="text-primary">72-Hour Reset</span> That Fixes Everything
          </h2>
          <div className="mx-auto mt-10 max-w-md">
            <div className="relative rounded-3xl border-2 border-primary/60 bg-gradient-card p-7 text-center shadow-glow animate-border-glow sm:p-9">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                The 72-Hour Keto Kickstart
              </h3>
              <p className="mt-2 text-base font-semibold text-muted-foreground">
                Drop Your First 5 lbs Fast
              </p>
              <p className="mt-5 rounded-lg bg-primary/10 px-4 py-3 text-sm font-bold text-primary sm:text-base">
                💡 Normally sold — free for a limited time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Benefits */}
      <section className="mx-auto max-w-[1100px] px-4 py-14 sm:py-20">
        <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          What You'll Get <span className="text-primary">Inside</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            "Exact meals to eat each day",
            "The Day 2 survival trick",
            "Keto flu fix that works fast",
            "The simple science explained",
            "Day 4 plan to keep losing",
            "Print-ready shopping list",
          ].map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <p className="text-base font-semibold">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — Testimonials */}
      <section className="bg-card/30 py-14 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-4">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Real People. <span className="text-primary">Real Results.</span>
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                quote: "I lost 6 lbs in 3 days and I wasn't even hungry. This actually worked.",
              },
              {
                name: "James K.",
                quote: "Day 2 fixed everything. The keto flu trick alone is worth it.",
              },
              {
                name: "Priya T.",
                quote: "My jeans got loose in days. I finally stuck with keto thanks to this.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base font-medium leading-relaxed">"{t.quote}"</p>
                <p className="mt-4 text-sm font-bold text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Main CTA */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-[900px] rounded-3xl bg-gradient-cta p-8 text-center text-primary-foreground shadow-glow-strong sm:p-12">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Get Instant Access Now</h2>
          <p className="mt-3 text-base font-semibold opacity-90 sm:text-lg">
            No email. No payment. Instant download.
          </p>
          <a
            href={CTA_LINK}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background px-6 py-5 text-base font-black uppercase tracking-wide text-primary shadow-glow-strong transition-transform duration-200 animate-pulse-glow hover:scale-[1.03] active:scale-[0.98] sm:w-auto sm:px-10 sm:text-lg"
          >
            🔓 Yes — Give Me The Free Guide Now
          </a>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm font-semibold opacity-95 sm:flex-row sm:gap-6">
            <span>⚡ 4,200+ downloads today</span>
            <span className="hidden sm:inline">•</span>
            <span>🔒 100% free access</span>
          </div>
        </div>
      </section>

      {/* Section 8 — Objection crusher */}
      <section className="border-y border-border/60 bg-card/30 py-10">
        <div className="mx-auto grid max-w-[1100px] gap-4 px-4 sm:grid-cols-3">
          {[
            { icon: Lock, label: "100% Free" },
            { icon: Zap, label: "Instant Access" },
            { icon: Smartphone, label: "Works On All Devices" },
          ].map((o) => (
            <div
              key={o.label}
              className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-4"
            >
              <o.icon className="h-6 w-6 text-primary" />
              <span className="text-base font-bold sm:text-lg">{o.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9 — Final CTA */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight sm:text-5xl">
            Don't Miss This — <br className="hidden sm:block" />
            <span className="text-primary">It May Not Be Free Tomorrow</span>
          </h2>
          <a
            href={CTA_LINK}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta px-6 py-5 text-base font-black uppercase tracking-wide text-primary-foreground shadow-glow-strong transition-transform duration-200 animate-pulse-glow hover:scale-[1.03] active:scale-[0.98] sm:w-auto sm:px-10 sm:text-lg"
          >
            <Download className="h-5 w-5" /> Unlock My Free Guide →
          </a>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Secure
            </span>
            <span className="hidden sm:inline">•</span>
            <span>No email required</span>
            <span className="hidden sm:inline">•</span>
            <span>Instant download</span>
          </div>
        </div>
      </section>
    </div>
  );
}
