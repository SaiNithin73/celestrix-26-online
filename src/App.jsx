import { useEffect, useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, ChevronRight, Clock3, Gem, Menu, MapPin, Phone, QrCode, Shield, Sparkles, Trophy, Users, X } from 'lucide-react'
import './App.css'
import thorPfp from './assets/thor pfp.jpg'
import doctorStrangePfp from './assets/doc strange pfp.jpg'
import captainMarvelPfp from './assets/captain marvel pfp.jpg'

const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfglS5RGWzcukXuaGPZ2kcFDpsQykOsrpQDJ5NvPykxzL0KLg/viewform?usp=header'

const events = [
  {
    slug: 'quizverse', name: 'QUIZVERSE', subtitle: 'Enter the Space of Knowledge. Think Fast. Score High.', category: 'Technical', stone: 'SPACE STONE', accent: '#46b9ff', soft: 'rgba(70,185,255,.15)', icon: '◆', pfp: thorPfp,
    blurb: 'Three progressive levels of CSBS knowledge, logic, speed, and technical pressure. One participant will become the QUIZVERSE Champion.',
    description: 'QUIZVERSE is a competitive CSBS technical quiz that tests knowledge, concepts, logic, and speed through syllabus-based questions. Across three progressive levels, participants face rising difficulty and time pressure while competing for the highest score.',
    rules: ['LEVEL 1 / THE GATEWAY — Begin your journey with basic-level questions covering fundamental concepts from the CSBS syllabus. This level tests core knowledge and quick recall.', 'LEVEL 2 / INFINITY — The challenge expands with moderate-level conceptual, application-based, and logical questions from various CSBS subjects. Participants must think quickly and manage their time effectively.', 'LEVEL 3 / ENDGAME — Face the ultimate technical challenge with advanced CSBS questions, followed by a rapid-fire and buzzer round. Participants must demonstrate technical knowledge, quick decision-making, and accuracy under intense time pressure.', 'WINNING CRITERIA — Participants are evaluated on score and performance within the allotted time. The participant with the highest score will be crowned the QUIZVERSE Champion. As the levels progress, the difficulty and time pressure increase, making every question and every second count.'],
    eligibility: 'Open to Computer Science and Business Systems (CSBS) students. Prepare to compete across three levels based on the CSBS syllabus, with increasing difficulty and time pressure at every stage.',
    coordinators: [['Aysha', 'Event Coordinator', '7358226653'], ['Sai Nithin', 'Event Coordinator', '7358775215']],
  },
  {
    slug: 'innoverse', name: 'INNOVERSE', subtitle: 'Make tomorrow remember your name.', category: 'Technical', stone: 'TIME STONE', accent: '#67e8a5', soft: 'rgba(103,232,165,.14)', icon: '✦', pfp: doctorStrangePfp,
    blurb: 'Create. Think. Build. Three rounds that turn ideas into impact.',
    description: 'INNOVERSE is a two-stage challenge that moves from visual communication to prompt-powered web development. Participants progress from creating a clear, engaging poster to solving a real-world problem with a working responsive website.',
    rules: ['C1 / POSTER DESIGNING — Understand the given theme, create an attractive and informative poster, communicate the main idea clearly, and submit it within the time limit. Free tools: Canva, Figma, Adobe Express, or Google Slides. Judging: creativity 25, theme relevance 25, visual design 20, content 20, presentation 10.', 'C2 / FINAL WEB DEVELOPMENT — Solve a real-world problem with AI, prompt engineering, and web development. Understand the brief, write effective prompts, inspect the generated result, fix errors, improve the UI, and demonstrate a working responsive website. Judging: problem understanding 15, prompt quality 20, functionality 25, UI/UX 15, implementation 15, presentation 10.', 'Use only the tools approved by the organizers. Possible tools include ChatGPT, Gemini, Claude, VS Code, CodePen, Replit, and GitHub. This is a problem-solving challenge, not an AI-copying competition.'],
    eligibility: 'Open to undergraduate students. Participants or teams advance from C1 to C2 based on performance. Prepare to create, think, and build across both stages.',
    coordinators: [['Gowtham', 'Event Coordinator', '93458 27047'], ['Indhuja', 'Event Coordinator', '73053 56327']],
  },
  {
    slug: 'marvel-mayhem', name: 'MARVEL MAYHEM', subtitle: 'For the heroes between timelines.', category: 'Non-Technical', stone: 'MIND STONE', accent: '#ffd447', soft: 'rgba(255,212,71,.14)', icon: '●', pfp: captainMarvelPfp,
    blurb: 'No Logic. No Limits. Just CHAOS. A Marvel-inspired arena of trivia, memes, music, acting, creativity, and unpredictable challenges.',
    description: 'Get ready for Marvel Mayhem, a thrilling non-technical event inspired by Deadpool and the Marvel Multiverse. This event combines Marvel trivia, memes, music, acting, creativity, and unpredictable challenges. Participants will compete in three exciting rounds, each testing quick thinking, teamwork, creativity, and problem-solving.',
    rules: ['C1 / SNAP — Rapid-fire Marvel challenges: guess the Marvel character, identify movies using emojis, identify Marvel memes, and complete 10-second challenges.', 'C2 / VARIANT — Team creativity and acting: Marvel dumb charades, Pictionary, acting like a Marvel character, and the Who Am I? challenge.', 'C3 / CHAOS — The unpredictable final round: Marvel puzzles and surprise Marvel tasks.', 'Teams must have 3–4 participants and complete challenges within the given time.', 'Phones are allowed only when permitted. Unsafe or offensive challenges are not allowed, and the judges’ decision is final.'],
    eligibility: 'Open to teams of 3–4 participants. Bring your squad, be ready to work together, and complete every challenge within the time given. Phones may be used only when permitted by the organizers.',
    coordinators: [['Bhavani', 'Event Coordinator', '733 941 2968'], ['Monisha', 'Event Coordinator', '97898 79827']],
  },
]

const coordinators = [
  ['Aysha', 'Student Coordinator', '7358775215'], ['Bhavani', 'Student Coordinator', '73394 12968'], ['Gowtham', 'Student Coordinator', '93458 27047'], ['Mrs. Pavithra', 'Staff Coordinator', '7904721623'],
]

function Countdown() {
  const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  useEffect(() => {
    const tick = () => {
      const difference = Math.max(0, new Date('2026-09-26T09:00:00+05:30') - new Date())
      const seconds = Math.floor(difference / 1000)
      setTime({ days: String(Math.floor(seconds / 86400)).padStart(2, '0'), hours: String(Math.floor((seconds % 86400) / 3600)).padStart(2, '0'), minutes: String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'), seconds: String(seconds % 60).padStart(2, '0') })
    }
    tick(); const interval = setInterval(tick, 1000); return () => clearInterval(interval)
  }, [])
  return <div className="countdown" aria-label="Countdown to September 26"><span><b>{time.days}</b><small>days</small></span><i>:</i><span><b>{time.hours}</b><small>hours</small></span><i>:</i><span><b>{time.minutes}</b><small>minutes</small></span><i>:</i><span><b>{time.seconds}</b><small>seconds</small></span></div>
}

function PortalTransition() {
  const location = useLocation()
  return <AnimatePresence mode="wait"><motion.div key={location.pathname} className="route-wash" initial={{ scale: 0, opacity: .8 }} animate={{ scale: 0, opacity: 0 }} exit={{ scale: 3, opacity: 0 }} transition={{ duration: .55, ease: 'easeInOut' }} /></AnimatePresence>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    const resetScroll = () => window.scrollTo(0, 0)
    const frame = window.requestAnimationFrame(resetScroll)
    const timeout = window.setTimeout(() => {
      resetScroll()
      root.style.scrollBehavior = previousScrollBehavior
    }, 50)
    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [pathname])
  return null
}

function Navbar() {
  const [open, setOpen] = useState(false); const [eventsOpen, setEventsOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="navbar"><div className="nav-inner"><Link to="/" className="crest" onClick={close}><span>GSBT</span><small>20 YEARS</small></Link><nav className={open ? 'nav-links open' : 'nav-links'}><NavLink to="/" onClick={close}>Home</NavLink><div className="event-menu"><button type="button" onClick={() => setEventsOpen(!eventsOpen)}>Events <ChevronDown size={14} /></button>{eventsOpen && <div className="dropdown">{events.map(event => <Link to={`/events/${event.slug}`} key={event.slug} onClick={close}><span style={{ color: event.accent }}>{event.icon}</span>{event.name}<ChevronRight size={13} /></Link>)}</div>}</div><a href="/#prizes" onClick={close}>Prizes</a><a href="/#coordinators" onClick={close}>Coordinators</a><a href={registrationUrl} target="_blank" rel="noreferrer" onClick={close}>Register <ArrowUpRight size={14} /></a><a href="/#contact" onClick={close}>Contact</a></nav><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}

function Portal({ accent = '#b6e34b' }) { return <div className="portal" style={{ '--portal': accent }}><div className="portal-core" /><div className="portal-ring ring-one" /><div className="portal-ring ring-two" /><div className="portal-ring ring-three" /></div> }

function Button({ children, to, href, secondary = false }) { const content = <>{children}<ArrowUpRight size={15} /></>; return to ? <Link className={secondary ? 'button secondary' : 'button'} to={to}>{content}</Link> : <a className={secondary ? 'button secondary' : 'button'} href={href} target="_blank" rel="noreferrer">{content}</a> }

function SectionHeading({ eyebrow, title, copy }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div> }

function QuizverseLevels() {
  const [activeLevel, setActiveLevel] = useState(0)
  const levels = [
    ['01', 'THE GATEWAY', 'Core knowledge and quick recall.'],
    ['02', 'INFINITY', 'Concepts, application, and logic.'],
    ['03', 'ENDGAME', 'Advanced questions, rapid-fire, and buzzer pressure.'],
  ]
  const level = levels[activeLevel]
  return <div className="quizverse-levels" aria-label="Quizverse level preview"><div className="level-orbit" /><span className="eyebrow">LEVEL SELECT</span><strong>{level[0]}</strong><b>{level[1]}</b><p>{level[2]}</p><div className="level-tabs">{levels.map(([number, name], index) => <button type="button" className={activeLevel === index ? 'active' : ''} onClick={() => setActiveLevel(index)} key={number} aria-label={`Show ${name}`}><span>{number}</span></button>)}</div></div>
}

function PrizeStrip({ compact = false }) { return <div className={compact ? 'prize-strip compact' : 'prize-strip'}><span><Trophy size={17} /> <b>1st</b> ₹3000</span><span><Trophy size={17} /> <b>2nd</b> ₹2000</span><span><Trophy size={17} /> <b>3rd</b> ₹1000</span></div> }

function EventCard({ event, index }) { return <motion.div className="event-card" style={{ '--accent': event.accent, '--soft': event.soft, '--card-image': `url("${event.pfp}")` }} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .1 }}><div className="card-top"><span className="card-index">0{index + 1}</span><span className="stone-label">{event.stone}</span></div><div className="gem-mark" aria-hidden="true">{event.icon}</div><h3>{event.name}</h3><p>{event.blurb}</p><Link to={`/events/${event.slug}`} className="card-link">Enter universe <ArrowUpRight size={16} /></Link></motion.div> }

function Home() {
  return <><Navbar /><main><section className="hero"><div className="hero-grain" /><Portal /><div className="hero-copy"><div className="hero-meta"><span><Sparkles size={15} /> GOJAN / CHENNAI</span><span>26.09.26 / SATURDAY</span></div><p className="hero-kicker">A COLLEGE TECH SYMPOSIUM</p><h1>CELESTRIX <em>'26</em></h1><p className="tagline">Unleash the Unknown</p><div className="hero-actions"><Button href={registrationUrl}>Register now</Button><a className="text-link" href="#events">Explore events <ChevronRight size={16} /></a></div><div className="hero-details"><span><MapPin size={15} /> S5 / S4 / S6, 2nd Floor</span><span><Clock3 size={15} /> Free entry for all events</span></div></div><div className="milestone"><span>20</span><div><b>Years of</b><strong>Excellence</strong></div></div><div className="scroll-cue">SCROLL TO DISCOVER <span>↓</span></div></section><section className="countdown-band"><div><span className="eyebrow">THE NEXT ALIGNMENT</span><h2>September 26 is approaching.</h2></div><Countdown /></section><section className="section events-section" id="events"><SectionHeading eyebrow="THE EVENT MAP" title="Choose your universe." copy="Three arenas. Three energies. One day to make your mark across the multiverse." /><div className="event-grid">{events.map((event, index) => <EventCard key={event.slug} event={event} index={index} />)}</div></section><section className="prizes-section" id="prizes"><div className="prize-copy"><span className="eyebrow">EVERY UNIVERSE HAS A REWARD</span><h2>Bring your best.<br /><i>Leave legendary.</i></h2><p>Registration is free across all three events. The only entry requirement is the nerve to step through.</p><Button href={registrationUrl} secondary>Claim your spot</Button></div><div className="prize-display"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><Trophy size={68} /><div className="prize-values"><strong>₹3000</strong><span>1st prize</span><strong>₹2000</strong><span>2nd prize</span><strong>₹1000</strong><span>3rd prize</span></div></div></section><section className="section about-section"><div className="about-number">20<span>yrs</span></div><div><SectionHeading eyebrow="THE HOST UNIVERSE" title="Built at Gojan." copy="Gojan School of Business and Technology is an autonomous institution in Chennai, built for the next generation of builders, thinkers, and leaders." /><div className="accreditations"><span>AICTE APPROVED</span><span>ANNA UNIVERSITY AFFILIATED</span><span>NAAC ACCREDITED</span></div></div></section><section className="section coordinator-section" id="coordinators"><SectionHeading eyebrow="THE PEOPLE BEHIND THE PORTAL" title="Your guides through the unknown." /><div className="coordinator-grid">{coordinators.map(([name, role, phone]) => <a className="coordinator" href={`tel:${phone.replaceAll(' ', '')}`} key={name}><span className="coordinator-icon"><Users size={19} /></span><span><b>{name}</b><small>{role}</small></span><Phone size={15} /></a>)}</div></section></main><Footer /></>
}

function RegistrationForm({ event }) { const fields = ['Full name', 'College / institution', 'Department', 'Year of study', 'Email address', 'Phone number']; return <div className="registration-panel" id="register"><div className="form-intro"><span className="eyebrow">STEP THROUGH</span><h2>Reserve your place in {event.name}.</h2><p>Entry is free. Complete the form below and you’ll be redirected to the official registration portal.</p></div><form onSubmit={(e) => { e.preventDefault(); window.location.href = registrationUrl }}><div className="form-grid">{fields.map(field => <label key={field}>{field}<input required placeholder={field === 'Year of study' ? '[EDIT ME] e.g. II Year' : `Enter ${field.toLowerCase()}`} /></label>)}</div><label>Team members, if applicable<input placeholder="[EDIT ME] Add names separated by commas" /></label><button className="button form-button" type="submit">Continue to registration <ArrowUpRight size={15} /></button></form></div> }

function EventPage() { const { slug } = useParams(); const event = events.find(item => item.slug === slug) || events[0]; return <div className="event-page" style={{ '--accent': event.accent, '--soft': event.soft }}><Navbar /><main><section className="event-hero"><div className="event-hero-copy"><Link className="back-link" to="/">← Back to all events</Link><span className="category-tag">{event.category} / {event.stone}</span><h1>{event.name}</h1><p>{event.subtitle}</p><Button href={registrationUrl}>Free entry / register</Button>{event.slug === 'quizverse' && <QuizverseLevels />}</div><div className="event-gem"><div className="gem-halo" /><div className="large-gem">{event.icon}</div><span>UNIVERSE 0{events.indexOf(event) + 1}</span></div></section><section className="event-content"><div className="event-main"><span className="eyebrow">MISSION BRIEF</span><h2>{event.description}</h2><div className="rules-block"><div><span className="eyebrow">01 / RULES & REGULATIONS</span><ul>{event.rules.map(rule => <li key={rule}>{rule}</li>)}</ul></div><div><span className="eyebrow">02 / ELIGIBILITY</span><p>{event.eligibility}</p><div className="free-entry"><Shield size={16} /> FREE ENTRY / ALL EVENTS</div></div></div></div><aside className="event-aside"><span className="eyebrow">COORDINATE WITH</span>{event.coordinators.map(([name, role, phone]) => <a href={`tel:${phone.replaceAll(' ', '')}`} className="mini-contact" key={name}><b>{name}</b><small>{role} · {phone}</small></a>)}<div className="qr-placeholder"><QrCode size={50} /><span>SCAN TO REGISTER</span><small>QR PLACEHOLDER</small></div></aside></section><section className="event-prizes"><SectionHeading eyebrow="THE STAKES" title="Three places in the record." copy="The same prize structure awaits every event universe." /><PrizeStrip /></section><section className="event-form-wrap"><RegistrationForm event={event} /></section></main><Footer /></div> }

function Footer() { return <footer id="contact"><div className="footer-brand"><span className="eyebrow">CELESTRIX '26</span><h2>Unleash<br /><i>the Unknown.</i></h2></div><div className="footer-details"><div><span className="eyebrow">WHERE</span><p>Gojan School of Business and Technology<br />Gojan College Road, Edapalayam,<br />Redhills, Chennai - 600052</p></div><div><span className="eyebrow">WHEN</span><p>September 26th, 2026<br />S5 / S4 / S6, 2nd Floor<br />Gojan Campus</p></div><div><span className="eyebrow">FOLLOW THE SIGNAL</span><p><a href="mailto:events@gojan.ac.in">events@gojan.ac.in</a><br /><a href={registrationUrl} target="_blank" rel="noreferrer">Official registration ↗</a></p></div></div><div className="footer-bottom"><span>© 2026 GOJAN SBT / AUTONOMOUS INSTITUTION</span><span>MADE BY SAI NITHIN</span></div></footer> }

function App() { return <BrowserRouter><ScrollToTop /><PortalTransition /><Routes><Route path="/" element={<Home />} /><Route path="/events/:slug" element={<EventPage />} /></Routes></BrowserRouter> }

export default App
