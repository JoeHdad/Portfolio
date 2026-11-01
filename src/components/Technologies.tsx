import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const techGroups = [
  {
    label: 'Languages & Frameworks',
    items: [
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg`, docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg`, docs: 'https://www.typescriptlang.org/docs/' },
      { name: 'React', icon: `${DEVICON}/react/react-original.svg`, docs: 'https://react.dev/' },
      { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg`, docs: 'https://nextjs.org/docs' },
      { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg`, docs: 'https://nodejs.org/en/docs' },
      { name: 'Express.js', icon: `${DEVICON}/express/express-original.svg`, docs: 'https://expressjs.com/' },
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg`, docs: 'https://docs.python.org/3/' },
      { name: 'Django', icon: `${DEVICON}/django/django-plain.svg`, docs: 'https://docs.djangoproject.com/' },
    ],
  },
  {
    label: 'Data & Tools',
    items: [
      { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg`, docs: 'https://www.postgresql.org/docs/' },
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg`, docs: 'https://www.mongodb.com/docs/' },
      { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, docs: 'https://tailwindcss.com/docs' },
      { name: 'REST APIs', icon: `${DEVICON}/fastapi/fastapi-original.svg`, docs: 'https://restfulapi.net/' },
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg`, docs: 'https://git-scm.com/doc' },
      { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg`, docs: 'https://docs.github.com/' },
    ],
  },
  {
    label: 'AI & Automation',
    items: [
      { name: 'OpenAI APIs', icon: 'https://cdn.simpleicons.org/openai/ffffff', docs: 'https://platform.openai.com/docs' },
      { name: 'Claude (Anthropic)', icon: 'https://cdn.simpleicons.org/anthropic/ffffff', docs: 'https://docs.claude.com/' },
      { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini', docs: 'https://ai.google.dev/' },
      { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/ffffff', docs: 'https://python.langchain.com/' },
      { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface', docs: 'https://huggingface.co/docs' },
      { name: 'RAG & Vector DBs', icon: `${DEVICON}/python/python-original.svg`, docs: 'https://docs.trychroma.com/' },
      { name: 'Google Veo 3', icon: 'https://cdn.simpleicons.org/google/ffffff', docs: 'https://deepmind.google/models/veo/' },
      { name: 'Runway', icon: 'https://cdn.simpleicons.org/runway/ffffff', docs: 'https://runwayml.com/' },
    ],
  },
  {
    label: 'Social & Growth',
    items: [
      { name: 'Meta Ads Manager', icon: 'https://cdn.simpleicons.org/meta', docs: 'https://www.facebook.com/business/tools/ads-manager' },
      { name: 'ManyChat', icon: 'https://cdn.simpleicons.org/messenger', docs: 'https://manychat.com/' },
      { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram', docs: 'https://business.instagram.com/' },
      { name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/ffffff', docs: 'https://www.tiktok.com/business/' },
      { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva', docs: 'https://www.canva.com/' },
      { name: 'Analytics & Reporting', icon: 'https://cdn.simpleicons.org/googleanalytics', docs: 'https://analytics.google.com/' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

// Tabs and the group labels they display
const TAB_DEFINITIONS: { key: string; label: string; groups: string[] }[] = [
  {
    key: 'core',
    label: 'Core Technologies',
    groups: ['Languages & Frameworks', 'Data & Tools', 'AI & Automation', 'Social & Growth'],
  },
];

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = React.useState<string>('core');

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  const currentTab = TAB_DEFINITIONS.find((t) => t.key === activeTab) ?? TAB_DEFINITIONS[0];
  const visibleGroups = techGroups.filter((group) => currentTab.groups.includes(group.label));

  const gridColsClass = visibleGroups.length >= 8
    ? 'lg:grid-cols-8'
    : visibleGroups.length >= 6
      ? 'lg:grid-cols-6'
      : visibleGroups.length >= 4
        ? 'lg:grid-cols-4'
        : 'lg:grid-cols-3';

  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Technologies I Work With
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The stack I use to ship web apps, AI features and automations
        </p>
      </motion.div>
      {TAB_DEFINITIONS.length > 1 && (
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {TAB_DEFINITIONS.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? 'default' : 'outline'}
            className={activeTab === tab.key ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-500/30 text-blue-400 hover:bg-blue-900/20'}
            onClick={() => setActiveTab(tab.key)}
            aria-pressed={activeTab === tab.key}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      )}
      <div className={`w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-y-16 gap-x-12`}>
        {visibleGroups.map((group) => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {group.label}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group no-underline"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.08)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                    {!imageErrors[tech.name] ? (
                      <motion.img 
                        src={tech.icon} 
                        alt={tech.name} 
                        loading="lazy"
                        className="w-10 h-10 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onError={() => handleImageError(tech.name)}
                      />
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500/40 rounded-lg bg-black/30 text-blue-400 font-bold text-lg z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <motion.span 
                    className="mt-1 text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center w-24 truncate h-5"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Technologies;
