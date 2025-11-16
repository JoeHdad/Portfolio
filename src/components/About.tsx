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

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2022",
    title: "ReactJS Bootcamp",
    organization: "Gaza Sky Geeks",
    location: "Gaza",
    logoSrc: "https://gaza-sky-geeks.org/wp-content/uploads/2020/07/cropped-logo-3.png",
    logoAlt: "Gaza Sky Geeks",
    description: "",
    highlights: [
      "Attended an intensive ReactJS bootcamp focused on advanced React concepts, JSX, hooks, and component-based architecture.",
      "Completed a final project that integrated routing, API calls, and reusable components to deliver a real-world web application.",
      "Strengthened front-end best practices, including responsive design, clean code structure, and deployment workflows.",
      "Worked in small teams, practicing collaboration, version control, and code reviews to ship features on time.",
    ],
    type: "education",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" }
    ]
  },
  {
    id: 2,
    year: "2021",
    title: "Web Development (Python & Django) Course",
    organization: "San’a’ Al-Mustaqbal Academy",
    location: "Gaza",
    logoAlt: "San’a’ Al-Mustaqbal Academy",
    description: "",
    highlights: [
      "Completed a 9-month program focused on backend web development using Python and Django.",
      "Learned to design and structure Django projects, manage models, views, templates, and URL routing.",
      "Built RESTful APIs, integrated relational databases, and handled authentication and authorization.",
      "Delivered a final full-stack project that combined Django on the backend with a responsive front-end interface.",
    ],
    type: "education",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" }
    ]
  },
  {
    id: 3,
    year: "2023",
    title: "Software Testing & Quality Assurance",
    organization: "BTI",
    location: "Gaza",
    logoAlt: "BTI",
    description: "",
    highlights: [
      "Completed a comprehensive Software Testing and QA course covering unit, integration, system, and acceptance testing.",
      "Practiced writing detailed test plans, test cases, and defect reports aligned with industry standards.",
      "Gained exposure to automated testing tools and workflows to improve reliability and regression coverage.",
      "Developed strong attention to detail and analytical skills to identify, document, and help resolve software defects.",
    ],
    type: "experience",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" }
    ]
  }
];

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
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                My name is <span className="font-semibold text-blue-400">Yousef Haddad</span>.
              </p>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">Full-Stack Developer</span> and a <span className="font-semibold text-blue-400">Creative Technologist</span> focused on AI-powered interactive experiences.
              </p>
              <p className="text-muted-foreground">
                I'm experienced in building modern web applications, <span className="font-semibold text-blue-400">AI-driven tools</span>, and high-impact digital products with clean architecture and smooth user experiences.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Education</h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20">
                  <img src="https://eng.asu.edu.eg/public/ext/images/logo-white.png" alt="Islamic University of Gaza" className="w-10 h-10 object-contain rounded" />
                  <div>
                    <div className="font-semibold text-blue-400">Islamic University of Gaza (IUG)</div>
                    <div className="text-sm text-muted-foreground">Bachelor's Degree</div>
                    <div className="text-xs text-muted-foreground">Computer Science • 2013 - 2018</div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
              <div className="flex flex-col gap-4">
                <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://avatars.githubusercontent.com/u/25720743?s=200&v=4" alt="THE LLM COURSE" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">THE LLM COURSE</div>
                    <div className="text-xs text-muted-foreground">Hugging Face</div>
                  </div>
                </a>
                <a href="https://learn.deeplearning.ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://cdn.simpleicons.org/deeplearningai/ffffff" alt="DeepLearning" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">DeepLearning</div>
                    <div className="text-xs text-muted-foreground">DeepLearning.AI</div>
                  </div>
                </a>
                <a href="https://gaza-sky-geeks.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://cdn.simpleicons.org/google/ffffff" alt="How to Use AI as a Personal Assistant" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">How to Use AI as a Personal Assistant</div>
                    <div className="text-xs text-muted-foreground">Gaza Sky Geeks</div>
                  </div>
                </a>
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
                            <span className="text-[10px] text-muted-foreground">Logo</span>
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
