"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mic, Camera, FileCheck2, PhoneCall, ArrowRight, CheckCheck, ListChecks } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow:
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent),
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-foreground) 15%, transparent))
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .fr-btn-light, .fr-btn-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .fr-btn-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .fr-btn-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .fr-btn-dark {
      background: linear-gradient(180deg, #2A2140 0%, #16121F 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(167,139,250,0.15), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .fr-btn-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #362B54 0%, #2A2140 100%);
      box-shadow: 0 0 0 1px rgba(167,139,250,0.25), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }

  .fr-progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }

  .scroll-cue {
      animation: fr-scroll-cue-in 0.8s ease-out 2.1s both;
  }
  .scroll-cue-mouse {
      animation: fr-scroll-cue-bob 2.2s ease-in-out infinite;
  }
  .scroll-cue-dot {
      animation: fr-scroll-cue-dot 1.6s ease-in-out infinite;
  }
  @keyframes fr-scroll-cue-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fr-scroll-cue-bob {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
  }
  @keyframes fr-scroll-cue-dot {
      0% { transform: translateY(0); opacity: 1; }
      70% { opacity: 0; }
      100% { transform: translateY(13px); opacity: 0; }
  }
`;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  // Fades the "keep scrolling" cue out over the first 200px of scroll,
  // independent of the pinned timeline below so it always reads as instant.
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollCueRef.current) return;
      const progress = Math.min(window.scrollY / 200, 1);
      scrollCueRef.current.style.opacity = String(1 - progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set(
        [".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"],
        { autoAlpha: 0 }
      );
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-fresco"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(
          ".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 },
          "-=0.8"
        )
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".fr-progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: 3, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(
          ".floating-badge",
          { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 },
          "-=2.0"
        )
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to(
          [".mockup-scroll-wrapper", ".card-left-text", ".card-right-text"],
          { scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05 },
          "outro"
        )
        .to(".floating-badge", { scale: 0.9, y: -40, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05 }, "outro")
        .to(
          ".main-card",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "92vh" : "85vh",
            borderRadius: isMobile ? "32px" : "40px",
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pullback"
        )
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background text-foreground"
      style={{ perspective: "1500px" }}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-fresco pointer-events-none absolute inset-0 z-0 opacity-60" aria-hidden="true" />

      {/* BACKGROUND LAYER: Hero Texts */}
      <div className="hero-text-wrapper absolute z-10 flex w-screen flex-col items-center justify-center px-4 text-center will-change-transform transform-3d">
        <h1 className="text-track gsap-reveal text-3d-matte mb-2 text-5xl font-bold tracking-tight md:text-7xl lg:text-[6rem]">
          Field reports that
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-[6rem]">
          write themselves.
        </h1>
      </div>

      {/* SCROLL CUE: hints there's a pinned sequence below, fades on first scroll.
          Scroll-driven opacity lives on this outer node; the entrance animation
          lives on the inner node so the two don't fight over the same property. */}
      <div
        ref={scrollCueRef}
        className="pointer-events-none absolute inset-x-0 bottom-8 z-10"
        aria-hidden="true"
      >
        <div className="scroll-cue flex flex-col items-center gap-2.5 text-foreground">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Scroll
          </span>
          <div className="scroll-cue-mouse flex h-10 w-6.5 items-start justify-center rounded-full border-2 border-muted-foreground/40 pt-2">
            <span className="scroll-cue-dot h-1.5 w-1.5 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </div>

      {/* BACKGROUND LAYER 2: Final CTA */}
      <div className="cta-wrapper gsap-reveal pointer-events-auto absolute z-10 flex w-screen flex-col items-center justify-center px-4 text-center will-change-transform">
        <h2 className="text-silver-matte mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Start reporting in minutes.
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          No typing. No formatting. No lost details. See Fresco AI turn a
          voice note into a finished, approved report.
        </p>
        <div className="flex flex-col gap-6 sm:flex-row">
          <a
            href="tel:+18583711421"
            className="fr-btn-light group flex items-center justify-center gap-3 rounded-[1.25rem] px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <PhoneCall className="h-5 w-5 shrink-0 transition-transform group-hover:scale-105" />
            <div className="text-left">
              <div className="-mb-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Talk to us
              </div>
              <div className="text-lg font-bold leading-none tracking-tight">Request a Demo</div>
            </div>
          </a>
          <a
            href="#how-it-works"
            className="fr-btn-dark group flex items-center justify-center gap-3 rounded-[1.25rem] px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <div className="text-left">
              <div className="-mb-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Curious how?
              </div>
              <div className="text-lg font-bold leading-none tracking-tight">See How It Works</div>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Card */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card gsap-reveal pointer-events-auto relative flex h-[92vh] w-[92vw] items-center justify-center overflow-hidden rounded-4xl md:h-[85vh] md:w-[85vw] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative z-10 flex h-full w-full max-w-7xl flex-col justify-evenly px-4 py-6 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8 lg:px-12 lg:py-0">
            {/* BRAND NAME */}
            <div className="card-right-text gsap-reveal order-1 z-20 flex w-full justify-center lg:order-3 lg:justify-end">
              <h2 className="text-card-silver-matte text-6xl font-black uppercase tracking-tighter md:text-[6rem] lg:text-[8rem]">
                Fresco
              </h2>
            </div>

            {/* IPHONE MOCKUP */}
            <div
              className="mockup-scroll-wrapper relative z-10 order-2 flex h-95 w-full items-center justify-center lg:order-2 lg:h-150"
              style={{ perspective: "1000px" }}
            >
              <div className="relative flex h-full w-full scale-[0.65] items-center justify-center md:scale-85 lg:scale-100">
                <div
                  ref={mockupRef}
                  className="iphone-bezel relative flex h-145 w-70 flex-col rounded-[3rem] will-change-transform transform-3d"
                >
                  <div className="hardware-btn absolute -left-0.75 top-30 z-0 h-6.25 w-0.75 rounded-l-md" aria-hidden="true" />
                  <div className="hardware-btn absolute -left-0.75 top-40 z-0 h-11.25 w-0.75 rounded-l-md" aria-hidden="true" />
                  <div className="hardware-btn absolute -left-0.75 top-55 z-0 h-11.25 w-0.75 rounded-l-md" aria-hidden="true" />
                  <div className="hardware-btn absolute -right-0.75 top-42.5 z-0 h-17.5 w-0.75 scale-x-[-1] rounded-r-md" aria-hidden="true" />

                  <div className="absolute inset-1.75 z-10 overflow-hidden rounded-[2.5rem] bg-[#050914] text-white shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
                    <div className="screen-glare pointer-events-none absolute inset-0 z-40" aria-hidden="true" />

                    <div className="absolute left-1/2 top-1.25 z-50 flex h-7 w-25 -translate-x-1/2 items-center justify-end rounded-full bg-black px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    </div>

                    <div className="relative flex h-full w-full flex-col pb-8 pl-5 pr-5 pt-12">
                      <div className="phone-widget mb-8 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            Site Visit
                          </span>
                          <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                            Riverside HVAC
                          </span>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-neutral-200 shadow-lg shadow-black/50">
                          <Mic className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="phone-widget relative mx-auto mb-8 flex h-44 w-44 items-center justify-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                          <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                          <circle className="fr-progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#A78BFA" strokeWidth="12" />
                        </svg>
                        <div className="z-10 flex flex-col items-center text-center">
                          <span className="counter-val text-4xl font-extrabold tracking-tighter text-white">0</span>
                          <span className="mt-0.5 text-[8px] font-bold uppercase tracking-widest text-violet-200/50">
                            Min. to Report
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="phone-widget widget-depth flex items-center rounded-2xl p-3">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-linear-to-br from-violet-500/20 to-violet-600/5 shadow-inner">
                            <Camera className="h-4 w-4 text-violet-300 drop-shadow-md" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1.5 text-[11px] font-semibold text-neutral-200">3 photos attached</div>
                            <div className="h-1.5 w-24 rounded-full bg-neutral-700 shadow-inner" />
                          </div>
                        </div>
                        <div className="phone-widget widget-depth flex items-center rounded-2xl p-3">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-linear-to-br from-emerald-500/20 to-emerald-600/5 shadow-inner">
                            <FileCheck2 className="h-4 w-4 text-emerald-400 drop-shadow-md" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1.5 text-[11px] font-semibold text-neutral-200">Report drafted</div>
                            <div className="h-1.5 w-16 rounded-full bg-neutral-700 shadow-inner" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 h-1 w-30 -translate-x-1/2 rounded-full bg-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badges */}
                <div className="floating-badge floating-ui-badge absolute -left-3.75 top-6 z-30 flex items-center gap-3 rounded-xl p-3 lg:-left-20 lg:top-12 lg:gap-4 lg:rounded-2xl lg:p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/30 bg-linear-to-b from-emerald-500/20 to-emerald-900/10 shadow-inner lg:h-10 lg:w-10">
                    <CheckCheck className="h-4 w-4 text-emerald-300 drop-shadow-lg lg:h-5 lg:w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tight text-white lg:text-sm">Report Approved</p>
                    <p className="text-[10px] font-medium text-violet-200/50 lg:text-xs">By supervisor · 2m ago</p>
                  </div>
                </div>

                <div className="floating-badge floating-ui-badge absolute bottom-12 -right-3.75 z-30 flex items-center gap-3 rounded-xl p-3 lg:bottom-20 lg:-right-20 lg:gap-4 lg:rounded-2xl lg:p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/30 bg-linear-to-b from-violet-500/20 to-violet-900/10 shadow-inner lg:h-10 lg:w-10">
                    <ListChecks className="h-4 w-4 text-violet-300 drop-shadow-lg lg:h-5 lg:w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tight text-white lg:text-sm">Follow-up Assigned</p>
                    <p className="text-[10px] font-medium text-violet-200/50 lg:text-xs">Due tomorrow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT TEXT */}
            <div className="card-left-text gsap-reveal order-3 z-20 flex w-full flex-col justify-center px-4 text-center lg:order-1 lg:max-w-none lg:px-0 lg:text-left">
              <h3 className="mb-0 text-2xl font-bold tracking-tight text-white md:text-3xl lg:mb-5 lg:text-4xl">
                Approval, without the back-and-forth.
              </h3>
              <p className="mx-auto hidden max-w-sm text-sm font-normal leading-relaxed text-violet-100/70 md:block md:text-base lg:mx-0 lg:max-w-none lg:text-lg">
                Fresco AI drafts the report from your team&apos;s voice notes
                and photos. Supervisors <span className="font-semibold text-white">approve, follow up, or send it back</span> — with a full audit trail from first submission to sign-off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
