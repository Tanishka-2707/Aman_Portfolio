import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code, Smartphone, Brain } from "lucide-react";

const categories = [
  { title: "Web Development", icon: Globe, skills: ["HTML", "CSS", "JavaScript", "React.js", "Django", "MongoDB", "Firebase"] },
  { title: "Programming", icon: Code, skills: ["C++", "Python", "OOP", "Data Structures & Algorithms"] },
  { title: "App Development", icon: Smartphone, skills: ["Flutter", "REST APIs", "Deployment"] },
  { title: "AI / ML", icon: Brain, skills: ["TensorFlow", "OpenCV", "NLP", "Computer Vision"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Code size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">Skills</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeInOut" }}
            className="bg-card border border-border rounded-lg p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-5">
              <cat.icon size={18} className="text-accent" />
              <h3 className="font-heading text-sm font-semibold tracking-widest text-foreground uppercase">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 bg-secondary rounded-sm text-muted-foreground border border-border hover:border-accent/30 hover:text-foreground transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
