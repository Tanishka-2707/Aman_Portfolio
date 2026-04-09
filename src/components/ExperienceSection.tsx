import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Nixona Technologies",
    points: [
      "Successfully completed internship with hands-on experience in real-world projects",
      "Worked in a collaborative development environment and contributed to production-level tasks",
    ],
  },
  {
    role: "Android App Developer",
    company: "Prodigy Infotech",
    points: [
      "Worked on real-world Android projects",
      "Contributed to full app lifecycle",
    ],
  },
  {
    role: "Business Analyst",
    company: "SpeakX",
    points: [
      "Analyzed campaign performance",
      "Conducted market research",
    ],
  },
];

const smooth = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] };

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={smooth}
      >
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">Experience</h2>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-0" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ ...smooth, delay: i * 0.15 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute left-0 top-2 w-[14px] h-[14px] rounded-full border-2 border-accent bg-background md:left-[-7px]" />

              <h3 className="font-heading text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="font-mono text-xs tracking-widest text-accent mb-3">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
