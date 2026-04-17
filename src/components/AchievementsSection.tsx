import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, Award, Users, X } from "lucide-react";

// 👇 images
import sih1 from "../assets/sih1.png";
import sih2 from "../assets/sih2.png";
import sc1 from "../assets/sc1.png";
import sc3 from "../assets/sc3.png";
import sc4 from "../assets/sc4.png";
import sc5 from "../assets/sc5.png";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l4 from "../assets/l4.png";
import l5 from "../assets/l5.png";
import e3 from "../assets/e3.png";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import ch1 from "../assets/ch1.png";
import ch2 from "../assets/ch2.png";
import ch3 from "../assets/ch3.png";
import ch4 from "../assets/ch4.png";

const achievements = [
  { 
    icon: Trophy, 
    text: "Finalist – Smart India Hackathon 2023",
    images: [sih1, sih2],
  },
  { 
    icon: Award, 
    text: "Winner – MLH Hackathon (StatusCode 0)",
    images: [sc1, sc3, sc4, sc5],
  },
  { 
    icon: Award, 
    text: "Winner – Enigma Maze Robot Competition",
    images: [e3, e1, e2],
  },
  { 
    icon: Trophy, 
    text: "Finalist – Cyber Hackathon 2025",
    images: [ch1, ch2, ch3, ch4], 
  },
  { 
    icon: Users, 
    text: "Leadership: GDSC, Sports Secretary, Event Organizer",
    images: [l1, l2, l4, l5],
  },
];

// ✅ FIXED: proper tuple type
const smooth = {
  duration: 0.7,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  // ✅ FIXED: proper typing
  const [activeImages, setActiveImages] = useState<string[] | null>(null);

  return (
    <section id="achievements" className="section-padding max-w-5xl mx-auto" ref={ref}>
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={smooth}
      >
        <div className="flex items-center gap-3 mb-12">
          <Trophy size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">
            Achievements
          </h2>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="space-y-4">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ ...smooth, delay: i * 0.08 }}
            className={`flex items-center justify-between p-4 bg-card border border-border rounded-lg card-hover ${
              i % 2 === 0 ? "glow-beige" : "glow-teal"
            }`}
          >
            <div className="flex items-center gap-4">
              <ach.icon size={18} className="text-accent shrink-0" />
              <p className="text-foreground text-sm md:text-base">{ach.text}</p>
            </div>

            {/* ✅ VIEW BUTTON */}
            {ach.images.length > 0 && (
              <button
                type="button"
                aria-label="View achievement images"
                onClick={() => setActiveImages(ach.images)}
                className="font-mono text-[10px] tracking-widest text-accent border border-accent/30 px-3 py-1 rounded-sm hover:bg-accent/10 transition-all duration-300 hover:scale-105"
              >
                VIEW
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* ✅ MODAL */}
      {activeImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={smooth}
            className="bg-card border border-border rounded-xl p-6 max-w-3xl w-full relative"
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setActiveImages(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
            >
              <X size={18} />
            </button>

            {/* Image grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`achievement-${index}`}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;