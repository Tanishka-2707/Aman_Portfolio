import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background — more visible */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-55 brightness-110 contrast-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Top bar — single row, properly spaced */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 px-6 md:px-12 py-5 flex items-center justify-between z-20"
      >
        {/* Left: logo + badges */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest-xl text-muted-foreground">
            AK<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-[10px] tracking-widest text-accent/70 border border-accent/20 px-2.5 py-0.5 rounded-sm">
            DEV MODE
          </span>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground border border-border px-2.5 py-0.5 rounded-sm hidden sm:inline-block">
            PORTFOLIO
          </span>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-5">
          <a href="https://github.com/Amanjaiswal027" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Github size={17} />
          </a>
          <a href="https://linkedin.com/in/aman-kumar-861905261" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Linkedin size={17} />
          </a>
          <a href="mailto:amanjais1327@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Mail size={17} />
          </a>
        </div>
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-ultra text-foreground glow-white"
        >
          WELCOME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-mono text-xs md:text-sm tracking-widest-xl text-muted-foreground mt-6"
        >
          AMAN KUMAR <span className="text-accent">//</span> FULL STACK DEVELOPER
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2"
      >
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground/50"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL TO EXPLORE
        </p>
      </motion.div>

      {/* Bottom Hashtags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-6 md:left-12"
      >
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground/40">
          #developer #fullstack #ai #ml #innovation
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
