import { useEffect, useRef, useState } from "react"
import {
  Monitor,
  Layers,
  Palette,
  PenTool,
  LayoutTemplate,
  Smartphone,
  Brush,
  Image,
  ArrowRight,
  X,
  Menu,
  Mail,
} from "lucide-react"
import ideaxWebImg from "@/imports/ideax_web.png"
import rohanHeadshot from "@/imports/rohan-headshot.png"
import nepalAirlinesImg from "@/imports/nepal-airlines.png"
import livoraWebappImg from "@/imports/livora-webapp.png"
import nabilBankImg from "@/imports/nabil-bank.png"
import nepalAirlinesLogo from "@/imports/nepal-airlines-logo.webp"
import ideaxLogo from "@/imports/ideax-logo.png"
import livoraLogo from "@/imports/livora-logo.png"
import nabilLogo from "@/imports/nabil-logo.png"

const LOGO_MARK =
  "data:image/png;base64,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"

const SPARKLE_SVG = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M12 3.2v6M12 14.8v6M3.2 12h6M14.8 12h6M5.8 5.8l4.2 4.2M14 14l4.2 4.2M18.2 5.8 14 10M10 14l-4.2 4.2" />
  </svg>
)

export default function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [openService, setOpenService] = useState("web")
  const [csOpen, setCsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [projectCount, setProjectCount] = useState(0)
  const statRef = useRef<HTMLSpanElement>(null)

  const navSections = ["about", "work", "process", "contact"]
  const navLabels: Record<string, string> = {
    about: "About",
    work: "Work",
    process: "Process",
    contact: "Contact",
  }

  useEffect(() => {
    const update = () => setHeaderScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.animationPlayState = "running"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => {
      ;(el as HTMLElement).style.animationPlayState = "paused"
      el.addEventListener(
        "animationend",
        (e) => {
          if (e.target === el) {
            el.classList.remove("reveal")
            ;(el as HTMLElement).style.animationPlayState = ""
          }
        },
        { once: true },
      )
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const targets = navSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    if (!targets.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setMobileNavOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileNavOpen(false)
        setCsOpen(false)
      }
    }
    window.addEventListener("resize", onResize)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileNavOpen)
  }, [mobileNavOpen])

  useEffect(() => {
    document.body.classList.toggle("cs-open", csOpen)
  }, [csOpen])

  useEffect(() => {
    const el = statRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const target = projects.length
        const step = (now: number) => {
          const t = Math.min((now - start) / 1000, 1)
          const eased = 1 - (1 - t) ** 3
          setProjectCount(Math.round(eased * target))
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 110,
        behavior: "smooth",
      })
    }
  }

  const projects = [
    {
      id: "nepal-airlines",
      title: "Nepal Airlines",
      meta: "Booking & trip management UX audit",
      year: "2026",
      tag: "Case study",
      chip: "chip-solid",
      practice: false,
      headline: "Booking a flight shouldn't feel like three apps.",
      blurb:
        "An end to end audit of Nepal Airlines' booking flow, and a redesign direction that unifies three disconnected systems into one consistent experience.",
      short: "A self-directed audit of a national carrier's booking flow.",
      img: nepalAirlinesImg,
      alt: "The Nepal Airlines website redesign, shown on a laptop with the homepage hero and flight search panel",
      logo: nepalAirlinesLogo,
      logoAlt: "Nepal Airlines logo",
    },
    {
      id: "ideax",
      title: "IdeaX 2026",
      meta: "Hackathon design lead: website, brand & social",
      year: "2026",
      tag: "Hackathon",
      chip: "chip-quiet",
      practice: false,
      blurb:
        "Led the visual direction, website interface, and brand identity for MBMC IdeaX 2026 across the website, social media, and print material.",
      img: ideaxWebImg,
      alt: "The IdeaX 2026 website design being reviewed on a tablet",
      logo: ideaxLogo,
      logoAlt: "IdeaX 2026 logo",
    },
    {
      id: "livora",
      title: "Livora",
      meta: "Blood donation & bank web app",
      year: "2025",
      tag: "Self-directed practice",
      chip: "chip-outline",
      practice: true,
      blurb:
        "Designed a web app concept for Livora, a blood bank platform where people can donate, find donors, and get help faster.",
      img: livoraWebappImg,
      alt: "The Livora blood bank web app, showing the landing page and sign-in panel",
      logo: livoraLogo,
      logoAlt: "Livora logo",
    },
    {
      id: "nabil-bank",
      title: "Nabil Bank",
      meta: "Mobile banking app UI redesign",
      year: "2025",
      tag: "Self-directed practice",
      chip: "chip-outline",
      practice: true,
      blurb:
        "Redesigned Nabil Bank's everyday screens, from splash to login to scan to pay, into a calmer, card-based layout.",
      img: nabilBankImg,
      alt: "Mobile app design mockups for a Nabil Bank banking app UI redesign, including splash, login, home, and scan-to-pay screens",
      logo: nabilLogo,
      logoAlt: "Nabil Bank logo",
    },
  ]

  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)

  const services = [
    {
      id: "web",
      label: "Web Design",
      icon: <Monitor size={16} />,
      heading: "Sites that are easy to scan and act on",
      desc: "Responsive, fast websites built to be easy to scan and act on.",
      points: [
        {
          icon: <Monitor size={16} />,
          text: "Landing pages, portfolios, and full product sites",
        },
        {
          icon: <LayoutTemplate size={16} />,
          text: "Clean visual hierarchy and intuitive navigation",
        },
        {
          icon: <Layers size={16} />,
          text: "Performance and accessibility built in from the start",
        },
      ],
      img: ideaxWebImg,
      alt: "The IdeaX 2026 website design being reviewed on a tablet",
    },
    {
      id: "product",
      label: "Product Design",
      icon: <Smartphone size={16} />,
      heading: "End-to-end product design, from research to UI",
      desc: "End-to-end product design focused on real user problems.",
      points: [
        {
          icon: <Smartphone size={16} />,
          text: "Research, wireframes, flows, and high-fidelity UI",
        },
        {
          icon: <Layers size={16} />,
          text: "Simple, consistent interfaces that scale",
        },
        {
          icon: <Monitor size={16} />,
          text: "Designed for how a product feels, not just looks",
        },
      ],
      img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=900&h=900&fit=crop&auto=format",
      alt: "Abstract product design imagery",
    },
    {
      id: "brand",
      label: "Brand Identity",
      icon: <PenTool size={16} />,
      heading: "Identity systems that stay consistent everywhere",
      desc: "Visual identity systems that give brands a consistent presence.",
      points: [
        {
          icon: <PenTool size={16} />,
          text: "Logos, color, typography, and voice",
        },
        {
          icon: <Palette size={16} />,
          text: "Scales from business cards to full product UI",
        },
        {
          icon: <Layers size={16} />,
          text: "Consistency and clarity across every touchpoint",
        },
      ],
      img: "https://images.unsplash.com/photo-1763705857736-2b4f16a33758?w=900&h=900&fit=crop&auto=format",
      alt: "Abstract brand identity imagery",
    },
    {
      id: "graphic",
      label: "Graphic Design",
      icon: <Brush size={16} />,
      heading: "Print and digital graphics that communicate fast",
      desc: "Print and digital graphics that communicate clearly and boldly.",
      points: [
        {
          icon: <Image size={16} />,
          text: "Posters, social assets, and marketing collateral",
        },
        {
          icon: <Brush size={16} />,
          text: "Visual communication that fits the brand",
        },
        {
          icon: <Palette size={16} />,
          text: "Grabs attention without losing clarity",
        },
      ],
      img: "https://images.unsplash.com/photo-1686164439898-9790e48910ab?w=900&h=900&fit=crop&auto=format",
      alt: "Abstract graphic design imagery",
    },
  ]

  const onTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    if (
      e.key !== "ArrowRight" &&
      e.key !== "ArrowLeft" &&
      e.key !== "Home" &&
      e.key !== "End"
    )
      return
    e.preventDefault()
    let next = idx
    if (e.key === "ArrowRight") next = (idx + 1) % services.length
    if (e.key === "ArrowLeft")
      next = (idx - 1 + services.length) % services.length
    if (e.key === "Home") next = 0
    if (e.key === "End") next = services.length - 1
    setOpenService(services[next].id)
    document.querySelectorAll<HTMLButtonElement>("[data-tab]")[next]?.focus()
  }

  const processSteps = [
    {
      num: "01",
      title: "Discover",
      text: "Audit the brief, the users, and the existing systems, the way I broke down Nepal Airlines' three disconnected booking flows before sketching anything.",
    },
    {
      num: "02",
      title: "Define",
      text: "Map information structure, user flows, and key interactions, and sketch multiple directions before committing to one.",
    },
    {
      num: "03",
      title: "Design",
      text: "Build and iterate in Figma, using Claude and Stitch AI to explore directions faster before final polish.",
    },
    {
      num: "04",
      title: "Deliver",
      text: "Package files for handoff, review the result against the brief, and make the final calls.",
    },
  ]

  const toolBadges = [
    { mark: <span className="tool-mark figma-mark" />, name: "Figma" },
    { mark: <span className="tool-mark ps-mark">Ps</span>, name: "Photoshop" },
    {
      mark: <span className="tool-mark ai-mark">Ai</span>,
      name: "Illustrator",
    },
    {
      mark: <span className="tool-mark claude-mark">{SPARKLE_SVG}</span>,
      name: "Claude",
    },
    {
      mark: <span className="tool-mark chatgpt-mark">GPT</span>,
      name: "ChatGPT",
    },
    { mark: <span className="tool-mark id-mark">Id</span>, name: "InDesign" },
    {
      mark: <span className="tool-mark stitch-mark">S</span>,
      name: "Stitch AI",
    },
  ]

  return (
    <>
      <div className="page" id="top">
        <header className={headerScrolled ? "scrolled" : ""}>
          <div className="nav-pill enter-nav">
            <a
              className="logo"
              href="#top"
              aria-label="Rohan Parajuli, back to top"
            >
              <img
                className="logo-mark"
                src={LOGO_MARK}
                alt=""
                aria-hidden="true"
              />
              Rohan Parajuli
            </a>
            <nav className="site-nav" aria-label="Sections">
              {["about", "work", "process"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  aria-current={activeSection === id ? "true" : undefined}
                >
                  {navLabels[id]}
                </a>
              ))}
            </nav>
            <a
              className="nav-cta"
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
              <span className="btn-chip">
                <ArrowRight strokeWidth={2} />
              </span>
            </a>
            <button
              className="nav-toggle"
              type="button"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              aria-controls="mobileNav"
              onClick={() => setMobileNavOpen((v) => !v)}
            >
              {mobileNavOpen ? <X strokeWidth={2} /> : <Menu strokeWidth={2} />}
            </button>
          </div>
        </header>
        <nav
          id="mobileNav"
          className={mobileNavOpen ? "open" : ""}
          aria-label="Menu"
          aria-hidden={!mobileNavOpen}
        >
          {navSections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                setMobileNavOpen(false)
                scrollToSection(e, id)
              }}
            >
              {navLabels[id]}
            </a>
          ))}
        </nav>
        <div
          className={`nav-scrim${mobileNavOpen ? " open" : ""}`}
          aria-hidden="true"
          onClick={() => setMobileNavOpen(false)}
        />
        <main>
          <div className="container">
            <section className="hero">
              <div className="hero-text">
                <h1>
                  <span className="line">
                    <span style={{ "--d": ".15s" } as React.CSSProperties}>
                      Design that makes
                    </span>
                  </span>
                  <span className="line">
                    <span style={{ "--d": ".24s" } as React.CSSProperties}>
                      complicated things
                    </span>
                  </span>
                  <span className="line">
                    <span style={{ "--d": ".33s" } as React.CSSProperties}>
                      feel obvious.
                    </span>
                  </span>
                </h1>
                <p
                  className="hero-sub enter-fade"
                  style={{ "--d": ".46s" } as React.CSSProperties}
                >
                  {"I'm"} Rohan Parajuli, a UI/UX and graphic designer in
                  Kathmandu, Nepal. I audit real systems, sketch the directions
                  nobody asked for, and design interfaces that are easy to scan
                  and act on.
                </p>
                <div
                  className="hero-actions enter-fade"
                  style={{ "--d": ".56s" } as React.CSSProperties}
                >
                  <a
                    className="btn btn-primary"
                    href="#work"
                    onClick={(e) => scrollToSection(e, "work")}
                  >
                    See the work
                    <span className="btn-chip">
                      <ArrowRight strokeWidth={2} />
                    </span>
                  </a>
                  <a
                    className="btn btn-ghost"
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                  >
                    Get in touch
                  </a>
                </div>
                <p
                  className="hero-meta enter-fade"
                  style={{ "--d": ".66s" } as React.CSSProperties}
                >
                  <span className="dot" aria-hidden="true" />
                  Available for freelance projects and full-time roles
                </p>
              </div>
              <div className="hero-stack">
                <div className="work-card enter-stack">
                  <div className="work-card-head">
                    <h2>Selected work</h2>
                    <span>2025-2026</span>
                  </div>
                  {projects.map((p) => {
                    const isFeatured = p.id === featuredProject.id
                    const rowBody = (
                      <>
                        <span className="wrow-thumb">
                          <img src={p.logo} alt={p.logoAlt} loading="lazy" />
                        </span>
                        <span className="wrow-text">
                          <span className="wrow-title">{p.title}</span>
                          <span className="wrow-meta">{p.meta}</span>
                        </span>
                        <span className="wrow-chip">
                          <span className={`chip ${p.chip}`}>{p.tag}</span>
                        </span>
                      </>
                    )
                    return isFeatured ? (
                      <div key={p.id} className="wrow feat">
                        {rowBody}
                      </div>
                    ) : (
                      <div key={p.id} className="wrow">
                        {rowBody}
                      </div>
                    )
                  })}
                  <div className="work-card-foot">
                    <a
                      className="link-action"
                      href="#work"
                      onClick={(e) => scrollToSection(e, "work")}
                    >
                      All work
                      <span className="circle">
                        <ArrowRight strokeWidth={2} />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="case-peek enter-peek">
                  <div className="case-peek-img">
                    <img src={featuredProject.img} alt={featuredProject.alt} />
                  </div>
                  <div className="case-peek-body">
                    <h3>{featuredProject.title}</h3>
                    <button
                      className="case-peek-cta"
                      type="button"
                      onClick={() => setCsOpen(true)}
                    >
                      Read the audit
                      <ArrowRight strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Tools ── */}
            <div className="marquee-wrap reveal">
              <p className="marquee-caption">The tools I work in every day</p>
              <div
                className="marquee"
                aria-label="Tools: Figma, Photoshop, Illustrator, Claude, ChatGPT, InDesign, and Stitch AI"
              >
                <div className="marquee-track">
                  {[...toolBadges, ...toolBadges].map((b, i) => (
                    <div
                      className="tool-badge"
                      key={i}
                      aria-hidden={i >= toolBadges.length}
                    >
                      {b.mark}
                      <span className="tool-name">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── About ── */}
            <section id="about" className="about">
              <figure className="about-photo reveal">
                <img src={rohanHeadshot} alt="Rohan Parajuli" />
                <figcaption className="about-photo-chip">
                  <span className="dot" aria-hidden="true" />
                  Kathmandu, Nepal · open to work
                </figcaption>
              </figure>
              <div
                className="about-copy reveal"
                style={{ "--delay": ".08s" } as React.CSSProperties}
              >
                <h2>Product thinking, not just polish.</h2>
                <p>
                  {"I'm"} a UI/UX and graphic designer based in Kathmandu,
                  Nepal, focused on web and app design with a strong grounding
                  in product design. I care about balancing how something looks
                  with how it actually works for the people using it. Every
                  screen should feel intentional, not just visually clean.
                </p>
                <p>
                  My work centers on designing intuitive, purposeful interfaces
                  for web and mobile products, backed by product thinking that
                  considers the bigger picture: user goals, flow, and real world
                  usability. Through self directed and freelance projects,{" "}
                  {"I've"} learned to design with intention, iterate based on
                  feedback, and refine every detail until it earns its place on
                  the screen.
                </p>
                <div className="about-facts">
                  <div className="fact">
                    <span className="k">Based in</span>
                    <span className="v">Kathmandu, NP</span>
                  </div>
                  <div className="fact">
                    <span className="k">Focus</span>
                    <span className="v">UI/UX · Product · Brand</span>
                  </div>
                  <div className="fact">
                    <span className="k">Availability</span>
                    <span className="v">Freelance & contract</span>
                  </div>
                  <div className="fact">
                    <span className="k">Projects on this site</span>
                    <span className="v">
                      <span className="tally" ref={statRef}>
                        {String(projectCount).padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Work ── */}
            <section id="work" className="section">
              <div className="section-head reveal">
                <h2>Selected work</h2>
                <p>
                  One full case study, one hackathon build, and two
                  self-directed practice projects, labelled for what they
                  actually are.
                </p>
              </div>
              <article
                className="work-feature reveal"
                onClick={() => setCsOpen(true)}
              >
                <div className="work-feature-img">
                  <img
                    src={featuredProject.img}
                    alt={featuredProject.alt}
                    loading="lazy"
                  />
                </div>
                <div className="work-feature-body">
                  <span className="label">
                    {featuredProject.tag} · {featuredProject.year}
                  </span>
                  <p className="work-feature-name">{featuredProject.title}</p>
                  <h3>{featuredProject.headline}</h3>
                  <p>{featuredProject.blurb}</p>
                  <button
                    className="link-action"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setCsOpen(true)
                    }}
                  >
                    Read the case study
                    <span className="circle">
                      <ArrowRight strokeWidth={2} />
                    </span>
                  </button>
                </div>
              </article>
              <div className="work-grid">
                {otherProjects.map((p, i) => (
                  <article
                    key={p.id}
                    className={`work-tile reveal${
                      p.practice ? " is-practice" : ""
                    }`}
                    style={{ "--delay": `${i * 0.07}s` } as React.CSSProperties}
                  >
                    <div
                      className={`work-tile-img${
                        p.id === "ideax" ? " tile-top" : ""
                      }`}
                    >
                      <img src={p.img} alt={p.alt} loading="lazy" />
                    </div>
                    <div className="work-tile-body">
                      <span className={`chip ${p.chip}`}>
                        {p.tag} · {p.year}
                      </span>
                      <h3>{p.title}</h3>
                      <p>{p.blurb}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="work-note reveal">
                Write-ups for these three are still in progress.
              </p>
            </section>

            {/* ── Process ── */}
            <section id="process" className="section">
              <div className="section-head reveal">
                <h2>How I work</h2>
                <p>
                  Four steps, in order. The Nepal Airlines audit is the whole
                  sequence run end to end on a real system.
                </p>
              </div>
              <div className="process-grid">
                {processSteps.map((step, i) => (
                  <div
                    key={step.title}
                    className="process-card reveal"
                    style={{ "--delay": `${i * 0.07}s` } as React.CSSProperties}
                  >
                    <span className="process-num">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Services ── */}
            <section id="services" className="section">
              <div className="section-head reveal">
                <h2>What I do</h2>
                <p>
                  Four ways I usually get hired, across web, product, brand, and
                  print.
                </p>
              </div>
              <div className="tabs reveal" role="tablist" aria-label="Services">
                {services.map((s, i) => (
                  <button
                    key={s.id}
                    data-tab
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-controls={`panel-${s.id}`}
                    aria-selected={openService === s.id}
                    tabIndex={openService === s.id ? 0 : -1}
                    className={`tab${openService === s.id ? " active" : ""}`}
                    onClick={() => setOpenService(s.id)}
                    onKeyDown={(e) => onTabKeyDown(e, i)}
                  >
                    {s.icon}
                    {s.label}
                  </button>
                ))}
              </div>
              <div
                className="panel reveal"
                style={{ "--delay": ".06s" } as React.CSSProperties}
              >
                {services.map((s) => (
                  <div
                    key={s.id}
                    id={`panel-${s.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${s.id}`}
                    className={`tabpanel${
                      openService === s.id ? " visible" : ""
                    }`}
                  >
                    <div className="panel-grid">
                      <div
                        className={`panel-media${
                          s.id === "web" ? " media-top" : ""
                        }`}
                      >
                        <img src={s.img} alt={s.alt} loading="lazy" />
                      </div>
                      <div className="panel-body">
                        <span className="panel-label">{s.label}</span>
                        <h3>{s.heading}</h3>
                        <p>{s.desc}</p>
                        <ul className="panel-points">
                          {s.points.map((pt, i) => (
                            <li key={i} className="panel-point">
                              <span className="panel-point-icon">
                                {pt.icon}
                              </span>
                              <span>{pt.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Contact ── */}
            <section id="contact" className="section">
              <div className="contact-card reveal">
                <h2>{"Let's"} work together</h2>
                <p>
                  Have a project, a role, or a rough idea you want pulled into
                  shape? Send it over. I read everything that lands.
                </p>
                <div className="contact-actions">
                  <a
                    className="btn btn-light"
                    href="mailto:rohanparajuli78@gmail.com"
                  >
                    rohanparajuli78@gmail.com
                    <span className="btn-chip">
                      <Mail strokeWidth={2} />
                    </span>
                  </a>
                </div>
                <div className="socials">
                  <a
                    className="social-link"
                    href="https://www.instagram.com/rohan.parajuli_/"
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="16.2"
                        cy="7.8"
                        r=".7"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </a>
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/rohanparajuli/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="5" />
                      <circle
                        cx="8.3"
                        cy="8.6"
                        r=".9"
                        fill="currentColor"
                        stroke="none"
                      />
                      <path d="M8.3 11.2v5.3" />
                      <path d="M12 16.5v-3.3c0-1.4 1-2.3 2.2-2.3s2.1.9 2.1 2.3v3.3" />
                      <path d="M12 11.2v5.3" />
                    </svg>
                  </a>
                  <a
                    className="social-link"
                    href="https://dribbble.com/rohan-parajuli"
                    target="_blank"
                    rel="noopener"
                    aria-label="Dribbble"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="8.5" />
                      <path d="M4.5 9.5c3 1 12 1.2 15 0" />
                      <path d="M8 4.5c2.5 3 4 8 3.3 15" />
                      <path d="M20 15c-3-1.4-9-1-13 2.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <footer>
            <div className="container footer-line">
              <span>© 2026 Rohan Parajuli</span>
              <span>Kathmandu, Nepal</span>
            </div>
          </footer>
        </main>
      </div>
      <div
        className={`cs-scrim${csOpen ? " open" : ""}`}
        aria-hidden="true"
        onClick={() => setCsOpen(false)}
      />
      <div
        className={`cs-overlay${csOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="csTitle"
        aria-hidden={!csOpen}
      >
        <div className="cs-panel">
          <button
            className="cs-close"
            type="button"
            aria-label="Close case study"
            onClick={() => setCsOpen(false)}
          >
            <X strokeWidth={2} />
          </button>
          <span className="cs-label">Case study</span>
          <h2 id="csTitle">
            Booking a flight {"shouldn't"} feel like three apps.
          </h2>
          <p className="cs-sub">
            A Nepal Airlines booking & trip management UX audit
          </p>

          <div className="cs-block">
            <h3>The problem</h3>
            <p>
              Nepal Airlines is the national carrier. For a lot of people,{" "}
              {"it's"} not really a choice. But the booking flow feels like
              three separate products stitched together:
            </p>
            <ul>
              <li>
                Domestic bookings bounce to a different subdomain with a
                completely different look and feel.
              </li>
              <li>
                International bookings land on a third party engine, another
                distinct interface again.
              </li>
              <li>
                {"There's"} no single "manage my trip." Check in and booking
                status depend on which system you originally booked through.
              </li>
              <li>
                Small inconsistencies (mixed 12/24 hour time formats, a promo
                heavy homepage) add friction on top.
              </li>
            </ul>
            <p>
              None of this is a visual polish problem, {"it's"} a trust problem.
              Every hand off to a new looking site quietly makes you wonder if{" "}
              {"you're"} still on the real Nepal Airlines site.
            </p>
          </div>

          <div className="cs-block">
            <h3>Problem statement</h3>
            <blockquote>
              Nepal Airlines passengers must navigate three disconnected booking
              and management systems with inconsistent design, creating
              confusion and eroding trust. How might we unify booking, check in,
              and trip management into one consistent experience?
            </blockquote>
          </div>

          <div className="cs-block">
            <h3>Approach</h3>
            <p>
              This round was a self directed audit rather than user interviews.
              I ran the full search → book → manage → check in flow myself, on
              desktop and mobile, across both domestic and international paths,
              and sketched three directions before touching Figma:
            </p>
            <ul>
              <li>
                <strong>Unified Search</strong>, one homepage search for both
                domestic and international, feeding a single consistent flow.
              </li>
              <li>
                <strong>Trip Hub First</strong>, a dashboard where entering a
                booking reference surfaces search, manage, and check in in one
                place.
              </li>
              <li>
                <strong>Shared Visual System</strong>, keep the backends
                separate, but unify the look and merge Manage Booking.
              </li>
            </ul>
            <p>
              <strong>I went with Unified Search.</strong> The
              domestic/international split is likely a real backend or vendor
              constraint I {"can't"} redesign away, but the jarring visual hand
              off is fixable, and {"it's"} the moment where trust breaks first.
            </p>
          </div>

          <div className="cs-block">
            <h3>Design iterations</h3>
            <div className="cs-table-wrap">
              <table className="cs-table">
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>What changed</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wireframe v1</td>
                    <td>
                      One homepage search feeding two separate result layouts
                    </td>
                    <td>
                      Testing whether a single entry point could still respect
                      different backend logic downstream
                    </td>
                  </tr>
                  <tr>
                    <td>Wireframe v2</td>
                    <td>
                      Merged results and booking into one shared layout; flight
                      type became a toggle, not a redirect
                    </td>
                    <td>
                      The full page redirect was itself the biggest source of
                      the "different app" feeling
                    </td>
                  </tr>
                  <tr>
                    <td>Hi fi v1</td>
                    <td>
                      Added a persistent "My Trip" access point in the header;
                      unified type and color system across both flows
                    </td>
                    <td>
                      Solves the check in fragmentation without needing a
                      separate dashboard page
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cs-block">
            <h3>Reflection</h3>
            <p>
              <strong>What {"I'd"} do differently:</strong> Talk to a few real
              passengers before ideation, even three or four quick conversations
              would tell me whether the search hand off is really the highest
              friction moment.
            </p>
            <p>
              <strong>What I learned:</strong> Fragmentation like this usually{" "}
              {"isn't"} a design choice, {"it's"} legacy systems stitched
              together over time. Fixing it {"isn't"} just visual polish;{" "}
              {"it's"} making disconnected backends feel like one product on the
              front end.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
