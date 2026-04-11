import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

const smoothTransition = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] };

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={smoothTransition}
        className="flex flex-col md:flex-row gap-10 md:gap-12 items-stretch"
      >
        {/* Text */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <User size={16} className="text-accent" />
            <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">About</h2>
          </div>
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

        {/* Profile image — spans full height of text block */}
        <div className="w-full md:w-48 lg:w-56 shrink-0 flex">
          <div className="w-full rounded-lg border border-foreground/10 bg-card/30 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out hover:scale-[1.04] hover:shadow-[0_0_30px_hsl(var(--glow-beige)/0.2),0_0_60px_hsl(var(--glow-teal)/0.1)] hover:border-foreground/20 cursor-pointer min-h-[280px] md:min-h-0">
            <img
              src="/Profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
