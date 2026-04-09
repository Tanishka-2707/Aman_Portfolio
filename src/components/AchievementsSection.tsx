import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Users } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "Finalist – Smart India Hackathon 2023" },
  { icon: Award, text: "Winner – MLH Hackathon (StatusCode 0)" },
  { icon: Award, text: "Winner – Enigma Maze Robot Competition" },
  { icon: Trophy, text: "Finalist – Cyber Hackathon 2025" },
  { icon: Users, text: "Leadership: GDSC, Sports Secretary, Event Organizer" },
];

const smooth = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] };

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={smooth}
      >
        <div className="flex items-center gap-3 mb-12">
          <Trophy size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">Achievements</h2>
        </div>
      </motion.div>

      <div className="space-y-4">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ ...smooth, delay: i * 0.08 }}
            className={`flex items-center gap-4 p-4 bg-card border border-border rounded-lg card-hover ${i % 2 === 0 ? "glow-beige" : "glow-teal"}`}
          >
            <ach.icon size={18} className="text-accent shrink-0" />
            <p className="text-foreground text-sm md:text-base">{ach.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
