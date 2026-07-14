"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronRight,
  Code2,
  Fingerprint,
  Globe2,
  Menu,
  MessageCircle,
  Network,
  Radar,
  ShieldCheck,
  Terminal,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const telegramUrl = "https://t.me/+vvxMjHuYEOgxMWI1";
const instagramUrl = "https://www.instagram.com/spectrasec.id/";

const insights = [
  {
    number: "01",
    category: "Web Defense",
    title: "Mengenal Apa Itu WAF",
    excerpt: "Lapisan penjaga aplikasi web yang membaca, menyaring, dan memblokir request berbahaya sebelum mencapai server.",
    body: "Web Application Firewall memonitor lalu lintas HTTP/HTTPS berdasarkan rules dan pola serangan. Materi ini membahas posisi WAF dalam arsitektur web, perbedaannya dengan firewall jaringan, serta alasan WAF tetap harus dipadukan dengan secure coding.",
    icon: ShieldCheck,
    className: "md:col-span-2 md:row-span-2 insight-photo",
  },
  {
    number: "02",
    category: "Fundamental",
    title: "Basic Command di Linux",
    excerpt: "Navigasi file, permission, process, dan command penting untuk membangun workflow security yang solid.",
    body: "Linux adalah lingkungan utama banyak server dan tooling security. Mulai dari pwd, ls, cd, cat, grep, chmod, ps, sampai piping, materi ini membantu pemula memahami sistem sebelum menggunakan tool yang lebih kompleks.",
    icon: Terminal,
    className: "md:col-span-1 md:row-span-1 insight-terminal",
  },
  {
    number: "03",
    category: "Web Security",
    title: "Kenalan Sama SQL Injection",
    excerpt: "Pahami bagaimana input yang tidak tervalidasi dapat mengubah query dan membuka akses yang tidak semestinya.",
    body: "SQL Injection terjadi ketika input pengguna masuk ke query tanpa penanganan yang aman. Pelajari konsep payload secara legal di lab, dampaknya terhadap data, dan mitigasi utama melalui parameterized queries serta validasi input.",
    icon: Code2,
    className: "md:col-span-1 md:row-span-1 insight-code",
  },
  {
    number: "04",
    category: "Cyber Culture",
    title: "Jenis Hacker yang Perlu Kamu Ketahui",
    excerpt: "Kenali perbedaan white hat, black hat, grey hat, dan mengapa izin serta scope selalu menjadi batas utama.",
    body: "Istilah hacker sering disederhanakan. Pembahasan ini memetakan motivasi dan cara kerja white hat, grey hat, black hat, hacktivist, serta security researcher dengan fokus pada izin, dampak, dan tanggung jawab hukum.",
    icon: Fingerprint,
    className: "md:col-span-2 md:row-span-1 insight-grid",
  },
];

type Member = {
  name: string;
  initials: string;
  role: string;
  summary: string;
  tags: string[];
  links: { label: string; href: string }[];
  image?: string;
  imagePosition?: string;
  credit?: string;
};

const members: Member[] = [
  {
    name: "Musa Hamonangan Lubis", initials: "MH", role: "Instruktur · Security Researcher",
    summary: "Instruktur SpectraSec dan ethical hacker peringkat #1 KOMDIGI-CSIRT. Fokus pada web application security dan responsible disclosure.",
    tags: ["KOMDIGI #1", "Web Security"], image: "/members/musa.webp", imagePosition: "center center", credit: "Foto: Instagram / sumber anggota",
    links: [{ label: "Instagram", href: "https://www.instagram.com/p/DajTmMsgdiy/" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/musa-hamonangan-lubis-a719b9282" }, { label: "KOMDIGI", href: "https://csirt.komdigi.go.id/hunter/musa_hamonangan_lubis" }],
  },
  {
    name: "Rakha Hayya Ilhamsyah", initials: "RH", role: "Bug Hunter · Network Engineer",
    summary: "Pelajar dan security researcher yang memperoleh rekognisi NASA bersama Balqis melalui pelaporan kerentanan yang bertanggung jawab.",
    tags: ["NASA Recognition", "Pentesting"], image: "/members/rakha-balqis.webp", imagePosition: "left center", credit: "Foto: RRI / SMK Taruna Bhakti",
    links: [{ label: "LinkedIn", href: "https://id.linkedin.com/in/rakha-hayya-ilhamsyah-840252378" }, { label: "Instagram", href: "https://www.instagram.com/rakha.hayya/" }],
  },
  {
    name: "Radit Restu Juniarko", initials: "RR", role: "Network Engineer · Junior Pentester",
    summary: "Praktisi jaringan dan mahasiswa Teknik Multimedia dan Jaringan yang aktif mendalami bug bounty, routing, dan keamanan siber.",
    tags: ["MTCNA", "Network Security"], image: "/members/radit.webp", imagePosition: "center center", credit: "Foto: Instagram / sumber anggota",
    links: [{ label: "Instagram", href: "https://www.instagram.com/p/Dak25LCE5Wb/" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/radit-restu-juniarko-526b94301/" }],
  },
  {
    name: "Muhammad Rizki Aulia", initials: "MR", role: "Security Researcher",
    summary: "Peneliti keamanan yang tercatat di Nokia Coordinated Vulnerability Disclosure Hall of Fame edisi April 2026.",
    tags: ["Nokia Hall of Fame", "CVD"], image: "/members/rizki.webp", imagePosition: "center center", credit: "Foto profil: LinkedIn",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-rizki-aulia-ab921b329/" }],
  },
  {
    name: "Ferry Farhan", initials: "FF", role: "Cloud & Security Enthusiast",
    summary: "Talenta lintas disiplin dengan fokus cloud engineering dan kontribusi responsible disclosure pada institusi internasional.",
    tags: ["Cloud", "Responsible Disclosure"], links: [{ label: "LinkedIn", href: "https://id.linkedin.com/in/ferryfarhan/en" }, { label: "Hall of Fame", href: "https://www.surf.nl/en/hall-of-fame-0" }],
  },
  {
    name: "Malik Ibrahim", initials: "MI", role: "Bug Hunter · Security Researcher",
    summary: "Kontributor KOMDIGI-CSIRT dengan alias likkk_39. Aktif melaporkan kerentanan sistem pemerintah melalui jalur legal.",
    tags: ["KOMDIGI #4", "Bug Hunting"], image: "/members/malik.webp", imagePosition: "center center", credit: "Foto: Instagram / sumber anggota",
    links: [{ label: "Instagram", href: "https://www.instagram.com/p/Dao-Rl9xYS3/" }, { label: "KOMDIGI", href: "https://csirt.komdigi.go.id/hunter/likkk_39" }],
  },
  {
    name: "Hammad Matt", initials: "HM", role: "Fullstack Developer · Security Researcher",
    summary: "Builder produk fullstack dan security automation, termasuk BLH Hunter. Fokus pada sistem bisnis dan responsible disclosure.",
    tags: ["Fullstack", "Security Automation"], image: "/members/hammad-instagram.webp", imagePosition: "center center", credit: "Foto: Instagram / sumber anggota",
    links: [{ label: "Instagram", href: "https://www.instagram.com/p/DZPbw4FkkpH/" }, { label: "Website", href: "https://www.hammad.biz.id/" }, { label: "LinkedIn", href: "https://id.linkedin.com/in/hmatt28" }],
  },
  {
    name: "Firoos Ghathfaan Ramadhan", initials: "FG", role: "Young Security Researcher",
    summary: "Peneliti muda dari Subang dengan rekognisi NASA atas responsible disclosure dan dukungan pengembangan riset dari BRIN.",
    tags: ["NASA Recognition", "OSINT"], image: "/members/firoos.webp", imagePosition: "75% center", credit: "Foto: Detik / dokumentasi publik",
    links: [{ label: "Profil Publik", href: "https://www.detik.com/edu/edutainment/d-8477411/brin-bakal-biayai-riset-firoos-anak-smp-yang-temukan-celah-keamanan-nasa/amp" }],
  },
  {
    name: "Balqis Amanda", initials: "BA", role: "Security Researcher · Network Student",
    summary: "Pelajar SMK Taruna Bhakti dan rekan riset Rakha yang memperoleh letter of recognition setelah melaporkan temuan ke NASA.",
    tags: ["NASA Recognition", "Networking"], image: "/members/rakha-balqis.webp", imagePosition: "right center", credit: "Foto: RRI / SMK Taruna Bhakti",
    links: [{ label: "Liputan RRI", href: "https://rri.co.id/en/technology/2401578/indonesian-high-school-students-recognized-by-nasa-for-finding-its-security-gaps" }],
  },
];

const memberNames = members.map((member) => member.name);
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://spectrasec.id/#organization",
      name: "SpectraSec.id",
      alternateName: ["SpectraSec", "SpectraSec Cyber Security Community"],
      url: "https://spectrasec.id",
      logo: "https://spectrasec.id/images/spectrasec-hero.webp",
      sameAs: [instagramUrl, telegramUrl],
      description: "Komunitas belajar dan media edukasi keamanan cyber Indonesia dengan fokus ethical hacking, web security, bug hunting, OSINT, dan responsible disclosure.",
      member: members.map((member) => ({
        "@type": "Person",
        name: member.name,
        roleName: member.role,
        description: member.summary,
        image: member.image ? `https://spectrasec.id${member.image}` : undefined,
        sameAs: member.links.map((link) => link.href),
      })),
    },
    {
      "@type": "WebSite",
      "@id": "https://spectrasec.id/#website",
      url: "https://spectrasec.id",
      name: "SpectraSec.id",
      publisher: { "@id": "https://spectrasec.id/#organization" },
      inLanguage: "id-ID",
      keywords: ["SpectraSec", "SpectraSec.id", "komunitas cybersecurity Indonesia", "ethical hacking", "bug hunting", ...memberNames],
    },
    {
      "@type": "ItemList",
      "@id": "https://spectrasec.id/#core-members",
      name: "Core Members SpectraSec.id",
      itemListElement: members.map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: member.name,
        item: {
          "@type": "Person",
          name: member.name,
          url: `https://spectrasec.id/#${member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
        },
      })),
    },
  ],
};

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
} as const;

function SignalMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "signal-mark signal-mark-compact" : "signal-mark"} aria-hidden="true">
      <i /><i /><i /><i />
      <b />
    </span>
  );
}

function SectionTitle({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <motion.div className="section-title" {...reveal}>
      <div>
        <p className="eyebrow"><span />{label}</p>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </motion.div>
  );
}

export default function Home() {
  const [activeInsight, setActiveInsight] = useState<(typeof insights)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeInsight ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeInsight]);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".insight-card, .member-card, .value-panel, .header-cta, .desktop-nav a, .hero-actions a, .member-links a, .footer-links a, .instructor-copy a",
      ),
    );

    const cleanups = targets.map((element) => {
      let frame = 0;
      const isButton = element.matches(
        ".header-cta, .desktop-nav a, .hero-actions a, .member-links a, .footer-links a, .instructor-copy a",
      );
      const strength = isButton ? 0.12 : 0.035;

      const onMove = (event: MouseEvent) => {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
          const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
          const glowX = ((event.clientX - rect.left) / rect.width) * 100;
          const glowY = ((event.clientY - rect.top) / rect.height) * 100;

          element.style.setProperty("--hover-x", `${x.toFixed(2)}px`);
          element.style.setProperty("--hover-y", `${y.toFixed(2)}px`);
          element.style.setProperty("--glow-x", `${glowX.toFixed(2)}%`);
          element.style.setProperty("--glow-y", `${glowY.toFixed(2)}%`);
        });
      };

      const onLeave = () => {
        window.cancelAnimationFrame(frame);
        element.style.setProperty("--hover-x", "0px");
        element.style.setProperty("--hover-y", "0px");
        element.style.setProperty("--glow-x", "50%");
        element.style.setProperty("--glow-y", "35%");
      };

      element.addEventListener("mousemove", onMove);
      element.addEventListener("mouseleave", onLeave);
      return () => {
        window.cancelAnimationFrame(frame);
        element.removeEventListener("mousemove", onMove);
        element.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SpectraSec.id beranda">
          <SignalMark compact />
          <span>SPECTRASEC<span>.ID</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#materi">Insight</a>
          <a href="#tim">Tim</a>
          <a href="#instruktur">Instruktur</a>
        </nav>
        <a className="header-cta" href={telegramUrl} target="_blank" rel="noreferrer">
          Gabung Komunitas <ArrowUpRight size={15} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka navigasi" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navigasi mobile">
            {[["Tentang", "#tentang"], ["Insight", "#materi"], ["Tim", "#tim"], ["Instruktur", "#instruktur"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href={telegramUrl} target="_blank" rel="noreferrer">Gabung Komunitas</a>
          </nav>
        )}
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <Image src="/images/spectrasec-hero.webp" alt="Security researcher memantau jaringan dari pusat operasi keamanan" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="hero-kicker"><Radar size={15} /> SPECTRASEC.ID CYBER SECURITY COMMUNITY</p>
            <h1 id="hero-heading">SpectraSec.id<br /><span>Belajar keamanan cyber.</span></h1>
            <p className="hero-copy">Ruang belajar dan media edukasi cybersecurity untuk talenta Indonesia: fundamental yang kuat, diskusi yang terbuka, dan praktik ethical hacking yang legal.</p>
            <div className="hero-actions">
              <Button href={telegramUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Gabung Komunitas <ArrowRight size={17} />
              </Button>
              <Button href="#materi" variant="secondary"><BookOpen size={18} /> Pelajari Materi</Button>
            </div>
          </motion.div>
        </div>
        <div className="hero-status" aria-label="Status komunitas">
          <span><i /> COMMUNITY ONLINE</span>
          <span>BASED IN INDONESIA</span>
          <span>ETHICAL BY DEFAULT</span>
        </div>
      </section>

      <section id="tentang" className="section-pad about-section">
        <div className="container">
          <SectionTitle label="Tentang SpectraSec" title="Fondasi kuat sebelum eksploitasi." copy="SpectraSec.id membedah konsep keamanan siber menjadi materi yang terarah, relevan, dan aman dipraktikkan. Fokusnya jelas: belajar dalam scope legal, memahami dampak, lalu melaporkan dengan etika." />
          <div className="values-grid">
            <article className="value-panel">
              <span className="value-index">01</span>
              <div className="icon-box"><Zap size={22} /></div>
              <h3>Edukasi Terarah</h3>
              <p>Mulai dari fundamental Linux dan jaringan, berlanjut ke web security, vulnerability research, dan responsible disclosure.</p>
              <ul><li><CheckCircle2 size={15} /> Konsep sebelum tools</li><li><CheckCircle2 size={15} /> Materi dasar hingga advanced</li></ul>
            </article>
            <article className="value-panel">
              <span className="value-index">02</span>
              <div className="icon-box cyan"><Users size={22} /></div>
              <h3>Sharing Community</h3>
              <p>Ruang terbuka bagi pemula dan security researcher untuk bertanya, bertukar referensi, dan bertumbuh bersama.</p>
              <ul><li><CheckCircle2 size={15} /> Diskusi tanpa gatekeeping</li><li><CheckCircle2 size={15} /> Etika sebagai standar</li></ul>
            </article>
            <div className="signal-panel">
              <SignalMark />
              <div className="signal-copy"><span>OUR SIGNAL</span><strong>EXPLORE<br />LEARN<br />SECURE</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="materi" className="section-pad insights-section">
        <div className="container">
          <SectionTitle label="Latest Insights" title="Baca. Pahami. Uji secara etis." copy="Materi ringkas dari kanal edukasi SpectraSec untuk membangun dasar teknis sebelum masuk ke praktik security research." />
          <div className="insights-grid">
            {insights.map((item, index) => {
              const Icon = item.icon;
              return (
                <button key={item.title} className={`insight-card ${item.className}`} onClick={() => setActiveInsight(item)}>
                  <span className="card-scanline" aria-hidden="true" />
                  <div className="insight-overlay" />
                  <div className="insight-top"><span>{item.number} / {item.category}</span><span className="insight-icon"><Icon size={20} /></span></div>
                  <div className="insight-bottom"><h3>{item.title}</h3><p>{item.excerpt}</p><span className="read-link">BACA RINGKASAN <ChevronRight size={15} /></span></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tim" className="section-pad team-section">
        <div className="container">
          <SectionTitle label="Core Members" title="Operator di balik SpectraSec." copy="Anggota inti yang menggerakkan riset, materi, diskusi, dan praktik responsible disclosure di lingkungan SpectraSec." />
          <div className="team-grid">
            {members.map((member, index) => (
              <article id={member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className={`member-card ${index === 0 ? "member-featured" : ""}`} key={member.name}>
                <span className="card-scanline" aria-hidden="true" />
                <div className="member-portrait">
                  {member.image ? (
                    <Image src={member.image} alt={`Foto ${member.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{ objectPosition: member.imagePosition }} />
                  ) : (
                    <div className="member-monogram"><SignalMark /><strong>{member.initials}</strong><span>PHOTO PENDING VERIFICATION</span></div>
                  )}
                  <span className="member-number">{String(index + 1).padStart(2, "0")}</span>
                  {member.credit && <small className="photo-credit">{member.credit}</small>}
                </div>
                <div className="member-body">
                  <div className="member-heading">
                    <p className="member-role">{member.role}</p>
                    <h3>{member.name}</h3>
                  </div>
                  <p className="member-summary">{member.summary}</p>
                  <div className="member-tags">{member.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="member-links">
                    {member.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><Globe2 size={14} />{link.label}<ArrowUpRight size={13} /></a>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="team-note"><ShieldCheck size={15} /> Profil memakai sumber profesional dan publik yang dapat dicocokkan. Foto yang belum terverifikasi ditandai dan tidak digantikan dengan wajah dari hasil pencarian homonim.</p>
        </div>
      </section>

      <section id="instruktur" className="section-pad instructor-section">
        <div className="container instructor-grid">
          <div className="instructor-visual">
            <Image src="/images/security-research-desk.webp" alt="Meja riset keamanan dengan visualisasi jaringan dan catatan threat model" fill sizes="(max-width: 768px) 100vw, 48vw" />
            <div className="instructor-scan" />
            <div className="profile-stamp"><span>SS</span><small>OFFICIAL<br />INSTRUCTOR</small></div>
          </div>
          <div className="instructor-copy">
            <p className="eyebrow"><span />Official Instructor</p>
            <h2>Belajar langsung dari praktisi yang memahami lapangan.</h2>
            <p className="handle">@ouashxy <ShieldCheck size={18} /></p>
            <p>Instruktur resmi SpectraSec.id yang memandu komunitas memahami mindset security researcher: teliti saat mengamati, sistematis saat menguji, dan bertanggung jawab saat melaporkan.</p>
            <div className="expertise">
              <span><Terminal size={16} /> Ethical Hacking</span>
              <span><Network size={16} /> Web Security</span>
              <span><Fingerprint size={16} /> Vulnerability Research</span>
            </div>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Lihat aktivitas di Instagram <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-rings" />
        <div className="container cta-inner">
          <p className="eyebrow light"><span />Build Your Cyber Foundation</p>
          <h2>Siap memperkuat<br />pertahanan digital?</h2>
          <p>Masuk ke ruang belajar yang membahas cybersecurity dengan bahasa yang jelas, praktik yang terarah, dan batas etika yang tegas.</p>
          <div className="hero-actions centered">
            <Button href={telegramUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Gabung Komunitas</Button>
            <Button href={instagramUrl} target="_blank" rel="noreferrer" variant="secondary"><Camera size={18} /> @spectrasec.id</Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div><a className="brand" href="#top"><SignalMark compact /><span>SPECTRASEC<span>.ID</span></span></a><p>Komunitas belajar dan media edukasi keamanan cyber Indonesia.</p></div>
          <div className="footer-links"><span>NAVIGASI</span><a href="#tentang">Tentang</a><a href="#materi">Insight</a><a href="#tim">Tim</a><a href="#instruktur">Instruktur</a></div>
          <div className="footer-links"><span>TERHUBUNG</span><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href={telegramUrl} target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="container footer-bottom"><p>© 2026 SpectraSec.id</p><p><ShieldCheck size={14} /> Seluruh materi ditujukan untuk edukasi dan praktik ethical hacking yang legal.</p></div>
      </footer>

      <AnimatePresence>
        {activeInsight && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setActiveInsight(null)}>
            <motion.article className="insight-modal" initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25 }} role="dialog" aria-modal="true" aria-label={activeInsight.title}>
              <button className="modal-close" onClick={() => setActiveInsight(null)} aria-label="Tutup ringkasan"><X /></button>
              <p className="eyebrow"><span />{activeInsight.category}</p>
              <h2>{activeInsight.title}</h2>
              <p>{activeInsight.body}</p>
              <div className="modal-note"><ShieldCheck size={19} /><span>Praktikkan hanya pada lab, sistem milik sendiri, atau target dengan izin dan scope yang jelas.</span></div>
              <a href={instagramUrl} target="_blank" rel="noreferrer">Temukan materi lengkap <ArrowUpRight size={16} /></a>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
