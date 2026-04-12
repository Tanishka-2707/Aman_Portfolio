import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import leetcode from "@/assets/leetcode.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-[1.0]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Top Left - shifted right to avoid AK overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-6 left-24 md:left-32 flex gap-4"
      >
        <span className="font-mono text-[10px] tracking-widest-xl text-accent/70 border border-accent/20 px-3 py-1 rounded-sm">
          DEV MODE
        </span>
        <span className="font-mono text-[10px] tracking-widest-xl text-muted-foreground border border-border px-3 py-1 rounded-sm">
          PORTFOLIO
        </span>
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-ultra text-foreground glow-white"
        >
          WELCOME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
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

      {/* Bottom row: hashtags left, social icons right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between"
      >
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground/40">
          #developer #fullstack #ai #ml #innovation
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Amanjaiswal027" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Github size={18} />
          </a>
          <a href="https://leetcode.com/u/Aman_jaiswal013/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
            <img
              src={leetcode}
              alt="LeetCode"
              className="w-[18px] h-[18px] object-contain"
            />
          </a>
          <a href="https://linkedin.com/in/aman-kumar-861905261" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Linkedin size={18} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amanjais1327@gmail.com&su=Let's%20Connect&body=Hi%20Aman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          >
            <Mail size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
