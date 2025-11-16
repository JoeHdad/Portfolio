import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from 'lucide-react';

// Project categories
type ProjectCategory = 'All' | 'Web Development' | 'AI/ML' | 'Computer Vision' | 'Systems';

// Extended project interface - now supports multiple categories
interface ExtendedProject extends Project {
  categories: ProjectCategory[]; // Changed to array for multiple categories
}

// Sample projects data - Professional Experience and GitHub Projects
const projectsData: ExtendedProject[] = [
  {
    id: 1,
    title: "Software Developer - Wood Industries Union",
    description: "Contract role developing web solutions for Wood Industries Union. Led strategic thinking initiatives while managing team collaboration and web project development. Applied attention to detail throughout the development lifecycle, ensuring high-quality deliverables for both remote and on-site operations in the Gaza Strip region.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1470&q=80",
    tags: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "Team Leadership", "Web Project Management"],
    categories: ["Web Development"],
    githubUrl: "https://github.com/JoeHdad"
  },
  {
    id: 2,
    title: "ATM Maintenance System",
    description: "Complete ATM maintenance management system for Saudi National Bank. Built with React frontend and Django backend, featuring role-based dashboards for Data Host, Technician, and Supervisor. Includes Excel file processing, photo upload workflows, PDF report generation, and automated email notifications. Manages maintenance operations across multiple Saudi cities with comprehensive tracking and approval workflows.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Django", "PostgreSQL", "JWT Authentication", "PDF Generation", "Email Automation", "Excel Processing", "Role-Based Access"],
    categories: ["Web Development", "Systems"],
    githubUrl: "https://github.com/JoeHdad/atm_maintenance-"
  },
  {
    id: 3,
    title: "Palestinian Heritage",
    description: "Cultural preservation project showcasing Palestinian heritage and traditions. This project aims to document and present the rich cultural heritage of Palestine through digital platforms, preserving historical narratives and traditional practices for future generations.",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1470&q=80",
    tags: ["Cultural Preservation", "Digital Heritage", "Web Development", "Documentation"],
    categories: ["Web Development"],
    githubUrl: "https://github.com/JoeHdad/Palestinian_Heritage"
  },
  {
    id: 4,
    title: "RAG Story Engine",
    description: "Fully modular Retrieval-Augmented Generation pipeline built for long-form narrative processing. Features preprocessing, chunking, Gemini embeddings, ChromaDB vector storage, retrieval, and complete inference workflow. Includes both CLI interface and Streamlit web application for querying and analyzing Arabic stories, specifically designed for narrative text processing with semantic search capabilities.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1470&q=80",
    tags: ["Python", "RAG", "Gemini Embeddings", "ChromaDB", "Streamlit", "Vector Search", "NLP", "Arabic NLP"],
    categories: ["AI/ML"],
    githubUrl: "https://github.com/JoeHdad/rag-story-engine"
  },
  {
    id: 5,
    title: "Blockchain-Based Document Verification with IPFS",
    description: "Decentralized document verification system combining blockchain technology with IPFS storage. Provides secure, fast verification without intermediaries, featuring user-friendly interface for document upload and verification. Supports multiple document types with encryption, hash-based verification, and smart contract integration for authenticity confirmation.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1470&q=80",
    tags: ["Blockchain", "IPFS", "Solidity", "Web3.js", "Smart Contracts", "Cryptography", "Decentralized Storage", "Ethereum"],
    categories: ["Systems", "Web Development"],
    githubUrl: "https://github.com/JoeHdad/BlockChain-Based-Document-Verfication-With-IPFS"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [showMore, setShowMore] = useState(false);
  
  const categories: ProjectCategory[] = ['All', 'Web Development', 'AI/ML', 'Computer Vision', 'Systems'];
  
  // Filter projects based on selected category (now supports multiple categories per project)
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.categories.includes(selectedCategory));
  }, [selectedCategory]);
  
  // Show first 6 projects, or all if showMore is true
  const displayedProjects = useMemo(() => {
    return showMore ? filteredProjects : filteredProjects.slice(0, 6);
  }, [filteredProjects, showMore]);
  
  // Check if there are more projects to show
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => {
          const projectCount = category === 'All' 
            ? projectsData.length 
            : projectsData.filter(project => project.categories.includes(category)).length;
          
          return (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowMore(false); // Reset show more when changing category
              }}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                  : "bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">({projectCount})</span>
            </Button>
          );
        })}
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
      
      {/* Show More/Less Button */}
      {hasMoreProjects && (
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            {showMore ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less Projects
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Show More Projects ({filteredProjects.length - 6} more)
              </>
            )}
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
