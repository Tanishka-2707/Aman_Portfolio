import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const smoothTransition = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] };

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={smoothTransition}
      >
        <div className="flex items-center gap-3 mb-12">
          <User size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">About</h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ ...smoothTransition, delay: 0.15 }}
        className="flex flex-col md:flex-row gap-10 md:gap-16"
      >
        {/* Text */}
        <div className="flex-1">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            Building the future,<br />
            <span className="text-gradient-accent">one line at a time.</span>
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Electronics and Communication Engineering student at IIIT Kalyani with strong expertise
            in full-stack development, AI/ML, and application development. Passionate about building
            scalable systems and impactful tech solutions.
          </p>
        </div>

        {/* Profile image placeholder */}
        <div className="w-full md:w-72 lg:w-80 shrink-0">
          <div className="aspect-[3/4] rounded-lg border border-border bg-card/50 flex items-center justify-center">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground/30 uppercase">
              Profile Image
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
