import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
  logoSrc?: string;
  logoAlt?: string;
  organization?: string;
  organizationUrl?: string;
  location?: string;
  techStack?: Array<{ src: string; alt: string; url?: string }>;
  highlights?: string[];
}

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "Aug 2026 – Present",
    title: "Social Media Management Officer",
    organization: "CupTime Trading W.L.L.",
    location: "Remote",
    description: "",
    highlights: [
      "Manage organic and paid social media for CUPTIME brands (Aroom, Cuptime Services, Bincoo, Barsetto) across Instagram, Facebook, TikTok, YouTube and Snapchat.",
      "Track reach, engagement, follower growth and conversions, and deliver weekly and monthly performance reports with actionable insights.",
      "Run paid boosts and ad campaigns: budgets, audience targeting and ROI optimization.",
      "Build ChatBot workflows in ManyChat and Chatfuel for Messenger, Instagram DM and website chat, improved through A/B testing.",
    ],
    type: "experience",
  },
  {
    id: 2,
    year: "Oct 2025 – Dec 2025",
    title: "Full-Stack Developer",
    organization: "ATM Maintenance System – Saudi National Bank",
    location: "Cairo",
    description: "",
    highlights: [
      "Engineered an ATM maintenance management system serving multiple cities across Saudi Arabia.",
      "Built role-based access control with JWT authentication for Data Host, Technician and Supervisor roles.",
      "Created an automated reporting engine with PDF reports, email notifications and Excel bulk imports.",
      "Designed the PostgreSQL schema for maintenance tracking and audit trails, plus a responsive React dashboard with live status updates.",
    ],
    type: "experience",
    techStack: [
      { src: `${DEVICON}/react/react-original.svg`, alt: "React" },
      { src: `${DEVICON}/django/django-plain.svg`, alt: "Django" },
      { src: `${DEVICON}/postgresql/postgresql-original.svg`, alt: "PostgreSQL" },
    ],
  },
  {
    id: 3,
    year: "Apr 2025 – Present",
    title: "Full-Stack & AI Engineer",
    organization: "Tmooh | طموح",
    location: "Remote",
    description: "",
    highlights: [
      "Design and build full-stack web applications for clients with React, Next.js, Node.js and Django.",
      "Integrate AI features into client products, including LLM-powered workflows and automation.",
      "Take projects from requirements and architecture through development, testing and deployment.",
    ],
    type: "experience",
    techStack: [
      { src: `${DEVICON}/nextjs/nextjs-original.svg`, alt: "Next.js" },
      { src: `${DEVICON}/nodejs/nodejs-original.svg`, alt: "Node.js" },
      { src: `${DEVICON}/python/python-original.svg`, alt: "Python" },
    ],
  },
  {
    id: 4,
    year: "Mar 2025 – Dec 2025",
    title: "Social Media Manager & AI Video Creator",
    organization: "FOR-Palestine",
    location: "Remote",
    description: "",
    highlights: [
      "Managed the organization's social media channels, from content planning to publishing.",
      "Produced written, visual and audio content with generative AI tools, including AI-generated video, to deliver humanitarian messages to a global audience.",
    ],
    type: "experience",
  },
  {
    id: 5,
    year: "Apr 2023 – Present",
    title: "Software Developer (Contract)",
    organization: "Wood Industries Union",
    location: "Gaza",
    description: "",
    highlights: [
      "Lead the design and development of the organization's digital systems as Software Lead and Full-Stack Developer.",
      "Architect and build MERN applications, from requirements gathering through testing and deployment.",
      "Coordinate a cross-functional remote and on-site team, and set standards for code quality, version control and documentation.",
    ],
    type: "experience",
    techStack: [
      { src: `${DEVICON}/mongodb/mongodb-original.svg`, alt: "MongoDB" },
      { src: `${DEVICON}/express/express-original.svg`, alt: "Express.js" },
      { src: `${DEVICON}/react/react-original.svg`, alt: "React" },
      { src: `${DEVICON}/nodejs/nodejs-original.svg`, alt: "Node.js" },
    ],
  },
];

const certifications = [
  { title: "The LLM Course", org: "Hugging Face", year: "2025", href: "https://huggingface.co/learn/llm-course", icon: "https://avatars.githubusercontent.com/u/25720743?s=200&v=4" },
  { title: "How to Use AI as a Personal Assistant", org: "Gaza Sky Geeks", year: "2025", href: "https://gaza-sky-geeks.org/" },
  { title: "Software Testing & Quality Assurance", org: "BTI", year: "2023" },
  { title: "Web Development with Python & Django", org: "San'a' Al-Mustaqbal Academy", year: "2022" },
  { title: "ReactJS Bootcamp", org: "Gaza Sky Geeks", year: "2021", href: "https://gaza-sky-geeks.org/" },
];

const initials = (name = "") =>
  name
    .replace(/[^A-Za-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const COLLAPSED_MAX_HEIGHT_PX = 224; // ~ h-56

const About = () => {
  const [expandedById, setExpandedById] = useState<Record<number, boolean>>({});
  const [needsCollapseById, setNeedsCollapseById] = useState<Record<number, boolean>>({});
  const [maxHeightById, setMaxHeightById] = useState<Record<number, number | 'auto'>>({});
  const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const nextNeeds: Record<number, boolean> = {};
    for (const item of timelineData) {
      const el = contentRefs.current.get(item.id);
      if (el) {
        nextNeeds[item.id] = el.scrollHeight > COLLAPSED_MAX_HEIGHT_PX + 4;
      }
    }
    setNeedsCollapseById(nextNeeds);
  }, []);
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me & Experience</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm <span className="font-semibold text-blue-400">Yousef Haddad</span>, a <span className="font-semibold text-blue-400">Full-Stack Software Engineer</span> based in Cairo with 5+ years of experience building production web apps.
              </p>
              <p className="text-muted-foreground mb-4">
                For the past 3 years I've worked heavily with <span className="font-semibold text-blue-400">AI</span>: LLM integrations, RAG, agent workflows and automation, in both Arabic and English.
              </p>
              <p className="text-muted-foreground">
                I also manage social media and paid campaigns for consumer brands in the Gulf, so I care about how products actually perform with real users.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Education</h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20">
                  <div className="w-10 h-10 shrink-0 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">IUG</div>
                  <div>
                    <div className="font-semibold text-blue-400">Islamic University of Gaza (IUG)</div>
                    <div className="text-sm text-muted-foreground">Bachelor of Computer Science</div>
                    <div className="text-xs text-muted-foreground">2018 – 2023</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => {
                  const inner = (
                    <>
                      {cert.icon ? (
                        <img src={cert.icon} alt="" className="w-8 h-8 shrink-0 rounded" />
                      ) : (
                        <div className="w-8 h-8 shrink-0 rounded bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-300">{initials(cert.org)}</div>
                      )}
                      <div>
                        <div className="font-semibold text-blue-400 leading-snug">{cert.title}</div>
                        <div className="text-xs text-muted-foreground">{cert.org} • {cert.year}</div>
                      </div>
                    </>
                  );
                  const cls = "flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20";
                  return cert.href ? (
                    <a key={cert.title} href={cert.href} target="_blank" rel="noopener noreferrer" className={`${cls} hover:bg-blue-900/20 transition`}>{inner}</a>
                  ) : (
                    <div key={cert.title} className={cls}>{inner}</div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.year}
                        </div>
                        <div className="w-12 h-12 rounded-md bg-black/20 flex items-center justify-center overflow-hidden">
                          {item.logoSrc ? (
                            <img
                              src={item.logoSrc}
                              alt={item.logoAlt ?? 'Company logo'}
                              className="w-full h-full object-contain p-1"
                            />
                          ) : (
                            <span className="text-xs font-bold text-blue-300">{initials(item.organization)}</span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      {(item.organization || item.location) && (
                        <div className="mb-2 text-sm text-muted-foreground">
                          {item.organization ? (
                            item.organizationUrl ? (
                              <a
                                href={item.organizationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {item.organization}
                              </a>
                            ) : (
                              <span>{item.organization}</span>
                            )
                          ) : null}
                          {item.organization && item.location ? <span> • </span> : null}
                          {item.location ? <span>{item.location}</span> : null}
                        </div>
                      )}
                      {/* Collapsible content starts */}
                      <div
                        ref={(el) => {
                          if (el) {
                            contentRefs.current.set(item.id, el);
                          } else {
                            contentRefs.current.delete(item.id);
                          }
                        }}
                        style={{
                          maxHeight: expandedById[item.id]
                            ? maxHeightById[item.id] === 'auto'
                              ? 'none'
                              : `${maxHeightById[item.id] ?? COLLAPSED_MAX_HEIGHT_PX}px`
                            : `${COLLAPSED_MAX_HEIGHT_PX}px`,
                        }}
                        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        onTransitionEnd={(e) => {
                          if (e.propertyName === 'max-height' && expandedById[item.id]) {
                            setMaxHeightById((prev) => ({ ...prev, [item.id]: 'auto' }));
                          }
                        }}
                      >
                      {item.techStack && item.techStack.length > 0 && (
                        <div className="mt-2 mb-2 flex flex-wrap items-center gap-2">
                          {item.techStack.map((tech, index) => (
                            <a
                              key={`${item.id}-tech-${index}`}
                              href={tech.url ?? '#'}
                              target={tech.url ? "_blank" : undefined}
                              rel={tech.url ? "noopener noreferrer" : undefined}
                              className="group"
                              aria-label={tech.alt}
                            >
                              <div className="w-6 h-6 rounded-sm bg-black/20 border border-muted/40 flex items-center justify-center overflow-hidden group-hover:border-blue-500/40 transition">
                                <img src={tech.src} alt={tech.alt} className="w-full h-full object-contain" />
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-2 mb-1 list-disc marker:text-purple-500 pl-5 space-y-1 text-base text-muted-foreground">
                          {item.highlights.map((point, i) => (
                            <li key={`${item.id}-hl-${i}`}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {item.description && item.description.trim().length > 0 && (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {item.description}
                        </p>
                      )}

                      {!expandedById[item.id] && needsCollapseById[item.id] && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent flex items-end justify-center">
                          <div className="relative mb-2 pointer-events-auto">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-10 bg-gradient-to-t from-purple-600/30 to-transparent rounded-t-full blur-md" />
                            <Button
                              size="sm"
                              className="relative z-10 rounded-full px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow hover:opacity-90"
                              onClick={() => {
                                const el = contentRefs.current.get(item.id);
                                if (el) {
                                  // Set target height to scrollHeight for smooth expansion
                                  setMaxHeightById((prev) => ({ ...prev, [item.id]: el.scrollHeight }));
                                }
                                setExpandedById((prev) => ({ ...prev, [item.id]: true }));
                              }}
                            >
                              See more
                            </Button>
                          </div>
                        </div>
                      )}
                      </div>
                      {/* Collapsible content ends */}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
