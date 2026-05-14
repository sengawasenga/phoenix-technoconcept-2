"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Blocks,
  Building2,
  CheckCircle2,
  Clock3,
  Compass,
  Droplets,
  Factory,
  Hammer,
  HardHat,
  Home,
  Landmark,
  Layers3,
  Menu,
  ShieldCheck,
  Trees,
  X,
} from "lucide-react";

const navItems = ["Accueil", "Services", "Projets", "À propos", "Contact"];

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;

const audiences = [
  {
    title: "Particuliers",
    text: "Maison, rénovation ou aménagement extérieur : nous donnons forme à vos idées avec méthode.",
    icon: Home,
  },
  {
    title: "Entreprises",
    text: "Bureaux, espaces commerciaux ou entrepôts : nous créons des solutions adaptées à votre activité.",
    icon: Building2,
  },
  {
    title: "Institutions & ONG",
    text: "Infrastructures, forage et projets à impact pour répondre aux besoins essentiels.",
    icon: Landmark,
  },
  {
    title: "Industries & mines",
    text: "Des ouvrages techniques conçus pour les environnements exigeants.",
    icon: Factory,
  },
  {
    title: "Promoteurs immobiliers",
    text: "Un partenaire fiable pour développer, construire et valoriser vos projets.",
    icon: Compass,
  },
];

const services = [
  {
    title: "Construction",
    text: "Des ouvrages durables pour les projets résidentiels, commerciaux et industriels.",
    img: image("photo-1541888946425-d81bb19240f5"),
    icon: HardHat,
  },
  {
    title: "Rénovation",
    text: "Transformer les espaces existants pour plus de confort, de valeur et de performance.",
    img: image("photo-1503387762-592deb58ef4e"),
    icon: Hammer,
  },
  {
    title: "Forage",
    text: "Des solutions adaptées pour l’accès à l’eau sur sites privés, communautaires ou industriels.",
    img: image("photo-1560179707-f14e90ef3623"),
    icon: Droplets,
  },
  {
    title: "Promotion immobilière",
    text: "Accompagner la conception et le développement de projets immobiliers solides.",
    img: image("photo-1486406146926-c627a92ad1ab"),
    icon: Building2,
  },
  {
    title: "Aménagement extérieur",
    text: "Créer des espaces extérieurs fonctionnels, élégants et durables.",
    img: image("photo-1600607687920-4e2a09cf159d"),
    icon: Trees,
  },
  {
    title: "Béton préfabriqué",
    text: "Accélérer les chantiers grâce à des solutions préfabriquées fiables.",
    img: image("photo-1518005020951-eccb494ad742"),
    icon: Blocks,
  },
  {
    title: "Solutions industrielles",
    text: "Répondre aux besoins techniques des entreprises et sites industriels.",
    img: image("photo-1565793298595-6a879b1d9492"),
    icon: Factory,
  },
];

const process = [
  {
    title: "Comprendre",
    text: "Nous analysons vos besoins, votre terrain et vos contraintes.",
    img: image("photo-1454165804606-c3d57bc86b40"),
  },
  {
    title: "Concevoir",
    text: "Nous transformons vos objectifs en solutions claires et réalisables.",
    img: image("photo-1503387837-b154d5074bd2"),
  },
  {
    title: "Planifier",
    text: "Nous structurons les étapes pour maîtriser délais, coûts et priorités.",
    img: image("photo-1581094794329-c8112a89af12"),
  },
  {
    title: "Construire",
    text: "Nous exécutons avec rigueur, sécurité et exigence.",
    img: image("photo-1504307651254-35680f356dfd"),
  },
  {
    title: "Livrer",
    text: "Nous finalisons chaque projet avec attention aux détails.",
    img: image("photo-1497366754035-f200968a6e72"),
  },
];

const projects = [
  {
    title: "Bâtiments administratifs",
    img: image("photo-1497366811353-6870744d04b2"),
  },
  {
    title: "Complexes résidentiels",
    img: image("photo-1600585154340-be6161a56a0c"),
  },
  {
    title: "Bureaux modulaires",
    img: image("photo-1497366216548-37526070297c"),
  },
  {
    title: "Entrepôts industriels",
    img: image("photo-1577412647305-991150c7d163"),
  },
  {
    title: "Forage d’eau potable",
    img: image("photo-1500530855697-b586d89ba3ee"),
  },
  {
    title: "Aménagements extérieurs",
    img: image("photo-1597211833712-5e41faa202ea"),
  },
];

const benefits = [
  {
    title: "Qualité d’exécution",
    text: "Chaque détail compte, de l’étude initiale à la livraison.",
    icon: CheckCircle2,
  },
  {
    title: "Approche multiservices",
    text: "Un seul partenaire pour coordonner plusieurs besoins techniques.",
    icon: Layers3,
  },
  {
    title: "Respect des délais",
    text: "Une organisation claire pour faire avancer vos projets avec maîtrise.",
    icon: Clock3,
  },
  {
    title: "Sécurité & durabilité",
    text: "Des choix pensés pour protéger vos investissements dans le temps.",
    icon: ShieldCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

gsap.registerPlugin(ScrollTrigger);

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-4 text-xs font-semibold uppercase text-[#0a5bd8]">
        {label}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-[#07172d] md:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5c6675] md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

function AnchorButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary:
      "bg-[#0a5bd8] text-white hover:bg-[#073b91] focus-visible:outline-[#0a5bd8]",
    secondary:
      "border border-[#c8d5e5] bg-white/70 text-[#07172d] hover:border-[#0a5bd8] hover:text-[#0a5bd8] focus-visible:outline-[#0a5bd8]",
    light:
      "bg-white text-[#07172d] hover:bg-[#eef4ff] focus-visible:outline-white",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${styles[variant]} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export default function PhoenixHome() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const aproposRef = useRef<HTMLElement>(null);
  const aproposViewportRef = useRef<HTMLDivElement>(null);
  const aproposTrackRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ["start end", "end start"],
  });
  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "12%"]);
  const heroTextY = useTransform(heroProgress, [0, 1], ["0%", "-8%"]);
  const processX = useTransform(processProgress, [0, 1], ["6%", "-26%"]);
  const audienceRotations = [-4, 3.5, -3, 3, -2.5];

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });
    lenis.on("scroll", ScrollTrigger.update);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduceMotion]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const section = aproposRef.current;
    const viewport = aproposViewportRef.current;
    const track = aproposTrackRef.current;

    if (reduceMotion || !section || !viewport || !track) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 1024px)", () => {
        const getDistance = () =>
          Math.max(track.scrollWidth - viewport.clientWidth, 0);

        gsap.set(track, { x: 0 });

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.85,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            end: () => `+=${getDistance()}`,
          },
        });
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, [reduceMotion]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f9fc] text-[#091525]">
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#dfe6f0]/80 bg-white/82 shadow-[0_12px_40px_rgba(7,23,45,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#accueil" className="flex items-center gap-3">
            <Image
              src="/logo-phoenix-blue.png"
              alt="Logo Phoenix TechnoConcept"
              width={154}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#334155] lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("à propos", "apropos")}`}
                className="transition hover:text-[#0a5bd8]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <AnchorButton href="#contact">Demander un devis</AnchorButton>
          </div>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dfe6f0] bg-white text-[#07172d] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-[#dfe6f0] bg-white px-5 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("à propos", "apropos")}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#07172d] hover:bg-[#eef4ff]"
                >
                  {item}
                </a>
              ))}
              <AnchorButton href="#contact">Demander un devis</AnchorButton>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section
          id="accueil"
          ref={heroRef}
          className="relative isolate overflow-hidden pt-32 md:pt-36"
        >
          <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[linear-gradient(180deg,#edf5ff_0%,#f7f9fc_72%,rgba(247,249,252,0)_100%)]" />
          <div className="mx-auto grid min-h-[calc(100dvh-6rem)] max-w-7xl items-center gap-12 px-5 pb-20 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <motion.div
              style={{ y: reduceMotion ? 0 : heroTextY }}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 inline-flex rounded-full bg-white/40 px-4 py-2 text-xs font-semibold uppercase text-[#0a5bd8]">
                Phoenix TechnoConcept Multicarte
              </p>
              <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[1.02] text-[#07172d] md:text-7xl xl:text-[5rem]">
                Construire l’avenir avec précision, confiance et ambition.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4b5563] md:text-xl">
                Phoenix TechnoConcept accompagne particuliers, entreprises et
                institutions dans leurs projets de construction, rénovation,
                forage, immobilier et solutions industrielles.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <AnchorButton href="#contact">Demander un devis</AnchorButton>
                <AnchorButton href="#services" variant="secondary">
                  Découvrir nos services
                </AnchorButton>
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-[440px] overflow-hidden rounded-[2.25rem] bg-[#dfe6f0] shadow-[0_30px_80px_rgba(7,23,45,0.14)] md:min-h-[620px]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                style={{ y: reduceMotion ? 0 : heroImageY }}
                className="absolute inset-0 -top-10 bottom-[-10%]"
              >
                <Image
                  src={image("photo-1504307651254-35680f356dfd")}
                  alt="Chantier moderne avec équipes de construction"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,45,0.02)_0%,rgba(7,23,45,0.18)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/30 bg-white/78 p-5 backdrop-blur-xl md:bottom-8 md:left-8 md:right-8">
                <p className="text-sm font-semibold text-[#07172d]">
                  Résidentiel, commercial, institutionnel et industriel
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c6675]">
                  Une équipe multiservices pour faire avancer les projets
                  sérieux avec clarté.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="apropos"
          ref={aproposRef}
          className="bg-white px-5 pb-40 pt-24 md:px-8 md:pb-52 md:pt-32 lg:pb-64"
        >
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Pour qui"
              title="Un partenaire pour chaque projet"
              text="Des réponses ciblées pour les réalités des maîtres d’ouvrage, des entreprises et des sites techniques."
            />
            <div
              ref={aproposViewportRef}
              className="overflow-visible pb-20 lg:pb-36"
            >
              <motion.div
                ref={aproposTrackRef}
                className="grid gap-5 md:grid-cols-2 lg:flex lg:w-max lg:items-stretch lg:gap-8"
              >
                {audiences.map(({ title, text, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    className="relative min-h-[380px] rounded-[1.75rem] border border-[#dfe6f0] p-8 shadow-[0_24px_70px_rgba(7,23,45,0.08)] transition-colors hover:border-[#b8c9e0] md:min-h-[420px] lg:w-[min(72vw,640px)] lg:p-10"
                    initial={{
                      opacity: 0,
                      y: 64,
                      rotate: reduceMotion ? 0 : audienceRotations[index] * 1.8,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotate: reduceMotion ? 0 : audienceRotations[index],
                      scale: 1,
                    }}
                    whileHover={{
                      y: -10,
                      rotate: reduceMotion
                        ? 0
                        : audienceRotations[index] * 0.55,
                      scale: 1.015,
                    }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="absolute right-8 top-7 font-display text-7xl font-semibold leading-none text-[#eef4ff] lg:text-8xl">
                      0{index + 1}
                    </span>
                    <div className="relative mb-16 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#0a5bd8]">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="relative max-w-sm font-display text-3xl font-semibold leading-tight text-[#07172d] md:text-4xl">
                      {title}
                    </h3>
                    <p className="relative mt-6 max-w-md text-base leading-8 text-[#5c6675] md:text-lg">
                      {text}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Services"
              title="Nos domaines d’intervention"
              text="Une offre complète pour coordonner conception, exécution et solutions techniques avec la même exigence."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ title, text, img, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  className={`group overflow-hidden rounded-[2rem] border border-[#e2e8f0] bg-[#f7f9fc] ${
                    index === 6 ? "xl:col-span-3" : ""
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 6 ? "h-72 md:h-96" : "h-72"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Image du service ${title.toLowerCase()}`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0a5bd8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#07172d]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5c6675]">
                      {text}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0a5bd8]"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={processRef}
          className="relative bg-[#07172d] px-5 py-24 text-white md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl md:mb-16">
              <p className="mb-4 text-xs font-semibold uppercase text-[#82b4ff]">
                Méthode
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Une expertise qui avance avec votre projet
              </h2>
            </div>
            <div className="overflow-visible lg:sticky lg:top-24">
              <motion.div
                style={{ x: reduceMotion ? 0 : processX }}
                className="grid gap-5 lg:flex lg:w-max"
              >
                {process.map(({ title, text, img }, index) => (
                  <article
                    key={title}
                    className="grid min-h-[440px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 lg:w-[520px]"
                  >
                    <div className="relative min-h-56 overflow-hidden">
                      <Image
                        src={img}
                        alt={`Étape ${title.toLowerCase()} du projet`}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover opacity-90"
                      />
                    </div>
                    <div className="self-end p-7">
                      <span className="text-sm font-semibold text-[#82b4ff]">
                        0{index + 1}
                      </span>
                      <h3 className="font-display mt-4 text-5xl font-semibold">
                        {title}
                      </h3>
                      <p className="mt-5 max-w-sm text-base leading-8 text-white/72">
                        {text}
                      </p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projets" className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Projets"
              title="Des réalisations pensées pour durer"
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map(({ title, img }) => (
                <motion.article
                  key={title}
                  className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#dfe6f0]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={img}
                    alt={`Aperçu de projet : ${title.toLowerCase()}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,45,0)_38%,rgba(7,23,45,0.72)_100%)]" />
                  <h3 className="font-display absolute bottom-6 left-6 right-6 text-2xl font-semibold text-white">
                    {title}
                  </h3>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase text-[#0a5bd8]">
                Engagements
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-[#07172d] md:text-6xl">
                Pourquoi Phoenix TechnoConcept ?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map(({ title, text, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[1.75rem] border border-[#dfe6f0] bg-[#f7f9fc] p-7"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0a5bd8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#07172d]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5c6675]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 md:px-8 md:py-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#07172d] p-8 text-white md:p-14 lg:p-20">
            <Image
              src={image("photo-1497366754035-f200968a6e72")}
              alt="Espace professionnel moderne pour un projet Phoenix"
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,23,45,0.96)_0%,rgba(7,23,45,0.78)_55%,rgba(10,91,216,0.42)_100%)]" />
            <div className="relative max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase text-[#82b4ff]">
                Démarrer
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                Votre projet mérite un partenaire à la hauteur.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/76">
                Construction, rénovation, forage, immobilier ou solutions
                industrielles : discutons de vos objectifs.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <AnchorButton
                  href="mailto:contact@phoenixtechnoconcepts.com"
                  variant="light"
                >
                  Demander un devis
                </AnchorButton>
                <AnchorButton
                  href="mailto:contact@phoenixtechnoconcepts.com"
                  variant="secondary"
                >
                  Nous contacter
                </AnchorButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfe6f0] bg-white px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/logo-phoenix-blue.png"
              alt="Logo Phoenix TechnoConcept"
              width={168}
              height={55}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-[#5c6675]">
              Phoenix TechnoConcept Multicarte accompagne les projets de
              construction, rénovation, forage, immobilier et solutions
              industrielles avec exigence et clarté.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-[#07172d]">
              Services
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-[#5c6675]">
              {services.slice(0, 5).map((service) => (
                <a
                  key={service.title}
                  href="#services"
                  className="hover:text-[#0a5bd8]"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-[#07172d]">
              Contact
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-[#5c6675]">
              <a
                href="mailto:contact@phoenixtechnoconcepts.com"
                className="hover:text-[#0a5bd8]"
              >
                contact@phoenixtechnoconcepts.com
              </a>
              <span>Adresse à compléter</span>
              <span>Téléphone à compléter</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-[#dfe6f0] pt-6 text-sm text-[#5c6675]">
          © 2026 Phoenix TechnoConcept Multicarte. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
