import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="about" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        variants={fade}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 mb-12">
          <User size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">About</h2>
        </div>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
          Building the future,<br />
          <span className="text-gradient-accent">one line at a time.</span>
        </h3>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          Electronics and Communication Engineering student at IIIT Kalyani with strong expertise
          in full-stack development, AI/ML, and application development. Passionate about building
          scalable systems and impactful tech solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
