import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CyVox",
    subtitle: "Voice Authentication & Scam Reporting System",
    description: "Secure voice-based authentication platform with admin dashboard",
    tech: ["Node.js", "APIs", "Voice Processing"],
    github: "#",
  },
  {
    title: "SAMAYA",
    subtitle: "SIH Project",
    description: "NLP-powered chatbot with scalable backend",
    tech: ["Python", "Transformers", "MongoDB", "Express.js"],
    github: "#",
  },
  {
    title: "Voice Assistant App",
    subtitle: "AI-Powered Assistant",
    description: "AI assistant with ChatGPT + DALL·E integration",
    tech: ["Flutter", "AI APIs"],
    github: "#",
  },
  {
    title: "Anibud",
    subtitle: "Backend Infrastructure",
    description: "Backend infrastructure and team leadership project",
    tech: ["Firebase", "Firestore"],
    github: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Rocket size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">Projects</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeInOut" }}
            className="bg-card border border-border rounded-lg overflow-hidden card-hover group"
          >
            {/* Image placeholder */}
            <div className="h-48 bg-secondary/50 flex items-center justify-center border-b border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <span className="font-mono text-xs text-muted-foreground/40 tracking-widest">PROJECT IMAGE</span>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-3 uppercase">
                {project.subtitle}
              </p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 bg-secondary border border-border rounded-sm text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Github size={14} /> CODE
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <ExternalLink size={14} /> VIEW
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
