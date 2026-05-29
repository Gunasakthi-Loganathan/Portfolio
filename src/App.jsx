import React, { useEffect, useState } from "react";
import "iconify-icon";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "Software Developer",
  "AI & ML Undergraduate",
  "Python Developer",
  "Full-Stack Enthusiast",
];

const FLOATING_ICONS = [
  { icon: "simple-icons:python", color: "#3776AB", top: "12%", left: "8%", delay: "0s" },
  { icon: "simple-icons:react", color: "#61DAFB", top: "20%", right: "10%", delay: "1s" },
  { icon: "simple-icons:tensorflow", color: "#FF6F00", bottom: "22%", left: "12%", delay: "2s" },
  { icon: "simple-icons:javascript", color: "#F7DF1E", top: "55%", right: "6%", delay: "1.5s" },
  { icon: "simple-icons:nodedotjs", color: "#5FA04E", bottom: "15%", right: "18%", delay: "0.5s" },
  { icon: "solar:graph-up-linear", color: "#A78BFA", top: "38%", left: "4%", delay: "2.5s" },
];

const PROFILE_IMAGE = `${import.meta.env.BASE_URL}profile.png`;

const SKILLS = [
  {
    title: "Programming",
    icon: "solar:code-square-linear",
    items: [
      { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
      { name: "Java", icon: "simple-icons:openjdk", color: "#ED8B00" },
      { name: "C++", icon: "simple-icons:cplusplus", color: "#00599C" },
      { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: "solar:cpu-bolt-linear",
    items: [
      { name: "TensorFlow", icon: "simple-icons:tensorflow", color: "#FF6F00" },
      { name: "Scikit-learn", icon: "simple-icons:scikitlearn", color: "#F7931E" },
      { name: "CNN", icon: "solar:layers-minimalistic-linear", color: "#A78BFA" },
      { name: "Model Training", icon: "solar:test-tube-linear", color: "#22D3EE" },
      { name: "Data Preprocessing", icon: "solar:filter-linear", color: "#34D399" },
      { name: "NumPy", icon: "simple-icons:numpy", color: "#013243" },
      { name: "Pandas", icon: "simple-icons:pandas", color: "#150458" },
      { name: "OpenCV", icon: "simple-icons:opencv", color: "#5C3EE8" },
      { name: "Image Processing", icon: "solar:gallery-linear", color: "#F472B6" },
    ],
  },
  {
    title: "Web Development",
    icon: "solar:global-linear",
    items: [
      { name: "HTML", icon: "simple-icons:html5", color: "#E34F26" },
      { name: "CSS", icon: "simple-icons:css3", color: "#1572B6" },
      { name: "React.js", icon: "simple-icons:react", color: "#61DAFB" },
      { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#5FA04E" },
      { name: "Vue.js", icon: "simple-icons:vuedotjs", color: "#4FC08D" },
      { name: "Express.js", icon: "simple-icons:express", color: "#FFFFFF" },
    ],
  },
  {
    title: "Tools",
    icon: "solar:settings-linear",
    items: [
      { name: "Git", icon: "simple-icons:git", color: "#F05032" },
      { name: "GitHub", icon: "simple-icons:github", color: "#FFFFFF" },
      { name: "VS Code", icon: "simple-icons:visualstudiocode", color: "#007ACC" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "solar:users-group-rounded-linear",
    items: [
      { name: "Problem-solving", icon: "solar:lightbulb-linear", color: "#FBBF24" },
      { name: "Debugging", icon: "solar:bug-linear", color: "#F87171" },
      { name: "Communication", icon: "solar:chat-round-line-linear", color: "#60A5FA" },
      { name: "Collaboration", icon: "solar:hand-shake-linear", color: "#34D399" },
      { name: "Motivation", icon: "solar:fire-linear", color: "#F59E0B" },
    ],
  },
];

const PROJECTS = [
  {
    title: "AI Image to Text OCR System using Tesseract.js",
    desc:
      "Built an OCR web app using React, Vite, FastAPI, Tesseract.js, TrOCR, and GOT-OCR to extract text from images and handwritten documents. Added browser OCR and backend AI model support for flexible text recognition.",
    tech: [
      "React.js",
      "JavaScript",
      "Tesseract.js",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Tailwind CSS",
      "Image Processing",
      "Render",
      "Vercel",
    ],
    icon: "solar:document-text-linear",
    gradient: "from-cyan-500/30 via-blue-500/20 to-purple-500/30",
    github:
      "https://github.com/Gunasakthi-Loganathan/ROCT-recognition-of-characters-using-Tesseract",
  },
  {
    title: "Machine Learning & Data Analytics",
    desc:
      "During my internship at GTS Company, I worked on Machine Learning and Data Analytics projects using Python to implement the techniques on real time datas.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Linear Regression",
      "Logistic Regression",
      "Decision Tree",
      "K-Means Clustering",
    ],
    icon: "solar:chart-2-linear",
    gradient: "from-purple-500/30 via-pink-500/20 to-blue-500/30",
    github:
      "https://github.com/Gunasakthi-Loganathan/Machine-Learning-Data-Analytics-GTS-Internship-",
  },
  {
    title: "SAFEHEX - Integrity Framework",
    desc: "Developed a cybersecurity dashboard using React, TypeScript, Tailwind CSS, and Convex for ethical target validation, CVSS-based risk classification, vulnerability analysis, scan history, and CSV report export.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Convex", "TypeScript"],
    icon: "solar:monitor-smartphone-linear",
    gradient: "from-emerald-500/30 via-cyan-500/20 to-blue-500/30",
    github: "https://github.com/Gunasakthi-Loganathan/SAFEHEX_project",
  },
];

const EDUCATION = [
  {
    title: "B.E. Computer Science & Engineering",
    sub: "Specialization in Artificial Intelligence and Machine Learning",
    org: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    date: "2023 - 2027",
    meta: "CGPA: 8.02",
    icon: "solar:square-academic-cap-linear",
  },
  {
    title: "Higher Secondary Education (HSE)",
    sub: "Computer Science Stream",
    org: "Nazareth Matriculation Higher Secondary School",
    date: "2023",
    meta: "Percentage: 81.5%",
    icon: "solar:book-2-linear",
  },
];

const EXPERIENCE = [
  {
    title: "ML & Data Analytics using Python",
    org: "Global Techno Solutions, Ashok Nagar, Chennai",
    date: "June 2025",
    desc:
      "Completed internship training focused on machine learning, Python-based data analytics, preprocessing, and model development.",
    icon: "solar:cpu-linear",
  },
  {
    title: "UI/UX Designer",
    org: "Kubbera, IIT Madras, Chennai",
    date: "Feb 11, 2026 – May 12, 2026",
    desc:
      "Worked on user interface and user experience design, focusing on clean layouts, usability, design consistency, and user-centered digital experiences.",
    icon: "solar:palette-linear",
  },
];

function useTyping(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;

    if (!del && text === word) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(() => {
        setText((cur) =>
          del ? word.substring(0, cur.length - 1) : word.substring(0, cur.length + 1)
        );
      }, del ? speed / 2 : speed);
    }

    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [profileOpen, setProfileOpen] = useState(false);

  const role = useTyping(ROLES);

  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const ys = window.scrollY + 140;

      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (!el) continue;

        if (ys >= el.offsetTop && ys < el.offsetTop + el.offsetHeight) {
          setActive(n.id);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [profileOpen]);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-root">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      {/* NAV */}
      <header className="navbar">
        <div className="nav-inner">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            className="logo"
          >
            <img
              src={PROFILE_IMAGE}
              alt="Gunasakthi Loganathan"
              className="logo-img"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setProfileOpen(true);
              }}
            />

            <span className="logo-text">
              Gunasakthi Loganathan<span className="dot">.</span>
            </span>
          </a>

          <nav className="nav-links">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(n.id);
                }}
                className={active === n.id ? "active" : ""}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-btn"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <iconify-icon
                icon={theme === "dark" ? "solar:sun-linear" : "solar:moon-linear"}
                width="20"
              ></iconify-icon>
            </button>

            <button
              className="burger"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <iconify-icon
                icon={open ? "solar:close-square-linear" : "solar:hamburger-menu-linear"}
                width="22"
              ></iconify-icon>
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-menu">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(n.id);
                }}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* PROFILE IMAGE MODAL */}
      {profileOpen && (
        <div className="profile-modal" onClick={() => setProfileOpen(false)}>
          <div
            className="profile-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="profile-close"
              onClick={() => setProfileOpen(false)}
              aria-label="Close profile image"
            >
              ×
            </button>

            <img
              src={PROFILE_IMAGE}
              alt="Gunasakthi Loganathan"
              className="profile-large-img"
            />

            <h3>Gunasakthi Loganathan</h3>
            <p>Full Stack Developer · AI & ML Undergraduate</p>
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="hero">
        {FLOATING_ICONS.map((f, i) => (
          <span
            key={i}
            className="float-icon"
            style={{
              ...f,
              color: f.color,
              animationDelay: f.delay,
            }}
          >
            <iconify-icon icon={f.icon} width="38"></iconify-icon>
          </span>
        ))}

        <div className="hero-inner">
          <div className="hero-badge" data-reveal>
            <span className="pulse-dot" /> Available for internships & opportunities
          </div>

          <h1 className="hero-title" data-reveal>
            Hi, I'm <span className="grad-text">GUNASAKTHI L</span>
          </h1>

          <h2 className="hero-role" data-reveal>
            <span className="typed">{role}</span>
            <span className="caret">|</span>
          </h2>

          <p className="hero-tag" data-reveal>
            Building intelligent software solutions with Python, Machine Learning,
            and modern web technologies.
          </p>

          <div className="hero-meta" data-reveal>
            <span>
              <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
              Chennai, Tamil Nadu, India
            </span>
            <span>
              <iconify-icon icon="solar:graduation-cap-linear" width="16"></iconify-icon>
              AI & ML Undergraduate
            </span>
          </div>

          <div className="hero-btns" data-reveal>
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("projects")}
            >
              <iconify-icon icon="solar:rocket-linear" width="18"></iconify-icon>
              View Projects
            </button>

            <a
              className="btn btn-ghost"
              href="https://drive.google.com/uc?export=download&id=1gAPhayegeoKsKA84Q9HvzicGPAfRclv3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
              Download Resume
            </a>

            <button
              className="btn btn-outline"
              onClick={() => scrollTo("contact")}
            >
              <iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
              Contact Me
            </button>
          </div>
        </div>

        <button
          className="scroll-down"
          onClick={() => scrollTo("about")}
          aria-label="Scroll"
        >
          <iconify-icon
            icon="solar:double-alt-arrow-down-linear"
            width="26"
          ></iconify-icon>
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <SectionHeader
          kicker="About Me"
          title="Crafting intelligent, human-centered software"
        />

        <div className="about-grid">
          <div className="glass about-card" data-reveal>
            <p>
              I am an{" "}
              <strong>Artificial Intelligence and Machine Learning undergraduate</strong>{" "}
              with hands-on experience in building real-world applications using Python,
              TensorFlow, OpenCV, and modern web technologies. I enjoy developing
              intelligent software solutions, working with data, designing clean user
              interfaces, and building practical applications that solve real-world problems.
            </p>

            <ul className="about-list">
              <li>
                <iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
                AI & ML undergraduate focused on real-world impact
              </li>
              <li>
                <iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
                Strong foundation in ML, data processing, and backend development
              </li>
              <li>
                <iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
                Passionate about software development, ML applications, UI/UX, and
                full-stack work
              </li>
            </ul>
          </div>

          <div className="about-stats">
            {[
              { v: "8.02", l: "Current CGPA", i: "solar:medal-star-linear" },
              { v: "3+", l: "Featured Projects", i: "solar:widget-5-linear" },
              { v: "25+", l: "Technologies", i: "solar:layers-linear" },
              { v: "2027", l: "Graduating", i: "solar:calendar-linear" },
            ].map((s, i) => (
              <div
                key={i}
                className="glass stat-card"
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <iconify-icon icon={s.i} width="28"></iconify-icon>
                <div className="stat-v">{s.v}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <SectionHeader kicker="Skills & Tools" title="Technologies I work with" />

        <div className="skills-grid">
          {SKILLS.map((g, gi) => (
            <div
              key={g.title}
              className="glass skill-group"
              data-reveal
              style={{ transitionDelay: `${gi * 60}ms` }}
            >
              <div className="skill-head">
                <span className="skill-icon">
                  <iconify-icon icon={g.icon} width="22"></iconify-icon>
                </span>
                <h3>{g.title}</h3>
              </div>

              <div className="skill-chips">
                {g.items.map((it) => (
                  <span key={it.name} className="chip" title={it.name}>
                    <iconify-icon
                      icon={it.icon}
                      width="18"
                      style={{ color: it.color }}
                    ></iconify-icon>
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <SectionHeader kicker="Featured Work" title="Selected projects & experiments" />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="project-card glass"
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={`project-thumb bg-gradient-to-br ${p.gradient}`}>
                <iconify-icon icon={p.icon} width="62"></iconify-icon>
                <div className="thumb-grid" />
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="tech-row">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button className="btn btn-sm btn-primary">
                    <iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
                    View Details
                  </button>

                  <a
                    className="btn btn-sm btn-outline"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <iconify-icon icon="simple-icons:github" width="16"></iconify-icon>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <SectionHeader kicker="Education" title="Academic background" />

        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <div
              key={i}
              className="tl-item"
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="tl-dot">
                <iconify-icon icon={e.icon} width="18"></iconify-icon>
              </div>

              <div className="glass tl-card">
                <div className="tl-date">{e.date}</div>
                <h3>{e.title}</h3>
                <p className="tl-sub">{e.sub}</p>
                <p className="tl-org">
                  <iconify-icon
                    icon="solar:buildings-2-linear"
                    width="16"
                  ></iconify-icon>
                  {e.org}
                </p>
                <span className="tl-meta">{e.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <SectionHeader kicker="Experience" title="Internships & training" />

        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div
              key={i}
              className="tl-item"
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="tl-dot tl-dot-alt">
                <iconify-icon icon={e.icon} width="18"></iconify-icon>
              </div>

              <div className="glass tl-card">
                <div className="tl-date">{e.date}</div>
                <h3>{e.title}</h3>
                <p className="tl-org">
                  <iconify-icon
                    icon="solar:buildings-2-linear"
                    width="16"
                  ></iconify-icon>
                  {e.org}
                </p>
                <p className="tl-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME CTA */}
      <section className="section">
        <div className="glass cta-card" data-reveal>
          <div className="cta-glow" />
          <h2>Want to know more about my background?</h2>
          <p>
            Download my full resume for a detailed look at my projects, skills, and
            journey.
          </p>

          <a
            className="btn btn-primary"
            href="https://drive.google.com/uc?export=download&id=1YeEbukR2j7oPdHMJrVTkhQuaitYxVODZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iconify-icon icon="solar:download-linear" width="20"></iconify-icon>
            Download Resume
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <SectionHeader kicker="Get in touch" title="Let's build something together" />

        <div className="contact-grid">
          <div className="glass contact-info" data-reveal>
            <h3>Contact Information</h3>
            <p>
              Open to internships, collaborations, and interesting AI/ML or software
              opportunities.
            </p>

            <ul>
              <li>
                <span className="ci-ic">
                  <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                </span>
                <div>
                  <label>Email</label>
                  <a href="mailto:gunasakthi2006@gmail.com">
                    gunasakthi2006@gmail.com
                  </a>
                </div>
              </li>

              <li>
                <span className="ci-ic">
                  <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
                </span>
                <div>
                  <label>LinkedIn</label>
                  <a
                    href="https://www.linkedin.com/in/gunasakthi-loganathan-8709b136b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gunasakthi-loganathan
                  </a>
                </div>
              </li>

              <li>
                <span className="ci-ic">
                  <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
                </span>
                <div>
                  <label>GitHub</label>
                  <a
                    href="https://github.com/Gunasakthi-Loganathan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gunasakthi-Loganathan
                  </a>
                </div>
              </li>

              <li>
                <span className="ci-ic">
                  <iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                </span>
                <div>
                  <label>Location</label>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </li>
            </ul>
          </div>

          <form
  className="glass contact-form"
  data-reveal
  action="https://formspree.io/f/xreddeng"
  method="POST"
>
  <div className="row-2">
    <div className="field">
      <label>Name</label>
      <input name="name" required type="text" placeholder="Your name" />
    </div>

    <div className="field">
      <label>Email</label>
      <input name="email" required type="email" placeholder="you@email.com" />
    </div>
  </div>

  <div className="field">
    <label>Subject</label>
    <input name="subject" required type="text" placeholder="What's this about?" />
  </div>

  <div className="field">
    <label>Message</label>
    <textarea
      name="message"
      required
      rows="5"
      placeholder="Tell me a bit about your project or opportunity..."
    ></textarea>
  </div>

  <button className="btn btn-primary btn-lg" type="submit">
    <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
    Send Message
  </button>
</form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="foot-left">
            <span className="logo-mark sm">GL</span>

            <div>
              <div className="foot-name">GUNASAKTHI L</div>
              <div className="foot-sub">Full Stack Developer · AI & ML</div>
            </div>
          </div>

          <div className="foot-social">
            <a href="mailto:gunasakthi2006@gmail.com" aria-label="Email">
              <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
            </a>

            <a
              href="https://www.linkedin.com/in/gunasakthi-loganathan-8709b136b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
            </a>

            <a
              href="https://github.com/Gunasakthi-Loganathan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          © GUNASAKTHI LOGANATHAN. Built with passion for software, AI, and innovation.
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ kicker, title }) {
  return (
    <div className="sec-head" data-reveal>
      <span className="kicker">{kicker}</span>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-line" />
    </div>
  );
}
