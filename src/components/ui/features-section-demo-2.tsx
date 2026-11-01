import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconBrain,
  IconCode,
  IconDatabase,
  IconDevices,
  IconRocket,
  IconShield,
  IconBolt,
  IconPalette,
} from "@tabler/icons-react";

// Helper function to highlight keywords in text with simple bold and colors
const highlightKeywords = (text: string) => {
  const keywords = [
    'React', 'Node.js', 'TypeScript', 'AI', 'OpenAI', 'Python', 
    'SQL', 'NoSQL', 'Django', 'Next.js', 'PostgreSQL', 'MongoDB', 'Claude', 'Gemini', 'LangChain', 'RAG'
  ];
  
  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    highlightedText = highlightedText.replace(regex, `<span class="keyword-simple">${keyword}</span>`);
  });
  
  return highlightedText;
};

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Full Stack Development",
      description:
        "Complete web applications from database to UI with React, Next.js, Node.js, Django and TypeScript.",
      icon: <IconCode className="w-6 h-6" />,
    },
    {
      title: "AI & LLM Integration",
      description:
        "LLM features, RAG pipelines and agent workflows using OpenAI, Claude, Gemini, LangChain and Python, in Arabic and English.",
      icon: <IconBrain className="w-6 h-6" />,
    },
    {
      title: "Automation Workflows",
      description:
        "Workflow automation, OCR pipelines and chatbots that remove manual work from operations, sales and support.",
      icon: <IconRouteAltLeft className="w-6 h-6" />,
    },
    {
      title: "Database Design",
      description:
        "SQL and NoSQL data modeling with PostgreSQL and MongoDB, built for audit trails, reporting and performance.",
      icon: <IconDatabase className="w-6 h-6" />,
    },
    {
      title: "Responsive Interfaces",
      description:
        "Clean, accessible dashboards and interfaces that work across devices, built with Tailwind CSS and modern React.",
      icon: <IconDevices className="w-6 h-6" />,
    },
    {
      title: "Security & Access Control",
      description:
        "Role-based access, JWT authentication and secure handling of data for production systems.",
      icon: <IconShield className="w-6 h-6" />,
    },
    {
      title: "Social Media & Growth",
      description:
        "Content planning, paid campaigns and performance reporting across Instagram, TikTok, Facebook and YouTube.",
      icon: <IconBolt className="w-6 h-6" />,
    },
    {
      title: "Team Leadership",
      description:
        "Leading small teams through requirements, development, testing and deployment, remote and on-site.",
      icon: <IconRocket className="w-6 h-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 feature-icon group-hover/feature:text-blue-300 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block feature-title group-hover/feature:text-blue-100 font-semibold">
          {title}
        </span>
      </div>
      <div 
        className="text-sm feature-description group-hover/feature:text-gray-100 max-w-xs relative z-10 px-10 leading-relaxed"
        dangerouslySetInnerHTML={{ 
          __html: highlightKeywords(description) 
        }}
      />
    </div>
  );
}; 