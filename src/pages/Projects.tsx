import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Une plateforme e-commerce complète avec panier, paiement et tableau de bord admin.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Un site portfolio interactif avec animations modernes et design responsive.",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Application de gestion des tâches avec drag-and-drop et collaboration en temps réel.",
    imageUrl:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description:
      "Dashboard interactif pour visualiser les données en temps réel avec graphiques personnalisés.",
    imageUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "ChartJS", "Express"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const CARDS_PER_VIEW = 3;

const ProjectsCarousel: React.FC = () => {
  const [start, setStart] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer projets selon searchTerm (titre, description, tags)
  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  });

  const total = filteredProjects.length;
  const canGoPrev = start > 0;
  const canGoNext = start + CARDS_PER_VIEW < total;

  const handlePrev = () => setStart((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStart((prev) => (prev + CARDS_PER_VIEW < total ? prev + 1 : prev));

  // Slice les projets filtrés selon la pagination
  const visible = filteredProjects.slice(start, start + CARDS_PER_VIEW);

  const nbSteps = Math.max(1, total - CARDS_PER_VIEW + 1);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#111827] to-black text-white py-16 px-6 md:px-20"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
      >
        Mes Projets
      </motion.h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "6rem", opacity: 1, transition: { duration: 1 } }}
        className="mx-auto h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 rounded mb-8"
      />

      {/* Barre de recherche */}
      <div className="max-w-xl mx-auto mb-12">
        <input
          type="search"
          placeholder="Rechercher un projet (titre, techno...)"
          aria-label="Recherche de projet"
          className="w-full px-4 py-3 rounded bg-[#22244c] border border-indigo-600 text-indigo-200 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={searchTerm}
          onChange={(e) => {
            setStart(0); // reset pagination si recherche modifiée
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Flèches de navigation */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          aria-label="Projet précédent"
          className="absolute z-10 left-[-2.5rem] top-1/2 transform -translate-y-1/2 px-4 py-4 rounded-full bg-[#22244c] text-indigo-400 shadow hover:bg-indigo-600/80 transition disabled:opacity-50 disabled:pointer-events-none hidden md:block"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          aria-label="Projet suivant"
          className="absolute z-10 right-[-2.5rem] top-1/2 transform -translate-y-1/2 px-4 py-4 rounded-full bg-[#22244c] text-indigo-400 shadow hover:bg-indigo-600/80 transition disabled:opacity-50 disabled:pointer-events-none hidden md:block"
        >
          &#8594;
        </button>

        {/* Grille en carousel */}
        <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
          {visible.length > 0 ? (
            visible.map((project, index) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(99,102,241,0.7)" }}
                className="bg-[#1a1a2e]/80 backdrop-blur-sm rounded-xl shadow-xl transition-transform duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-300">{project.title}</h3>
                  <p className="text-gray-300 flex-grow mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-indigo-800/50 text-indigo-300 text-xs rounded-full px-3 py-1 font-mono border border-indigo-500/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    {project.liveDemoUrl && (
                      <motion.a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white rounded px-4 py-2 transition flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white rounded px-4 py-2 transition flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaGithub /> GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <p className="col-span-full text-center text-indigo-400">
              Aucun projet ne correspond à votre recherche.
            </p>
          )}
        </div>

        {/* Pagination dots */}
        {visible.length > 0 && (
          <div className="flex gap-3 justify-center mt-10">
            {Array.from({ length: nbSteps }, (_, idx) => (
              <button
                key={idx}
                aria-label={`Aller à la slide ${idx + 1}`}
                onClick={() => setStart(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  start === idx
                    ? "bg-indigo-400 scale-110 shadow-[0_0_10px_#6366f1]"
                    : "bg-indigo-200/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
