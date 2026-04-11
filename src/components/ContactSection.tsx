import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "amanjais1327@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=amanjais1327@gmail.com&su=Let's%20Connect&body=Hi%20Aman" },
  { icon: Phone, label: "8340233902", href: "tel:8340233902" },
  { icon: Github, label: "GitHub", href: "https://github.com/Amanjaiswal027" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/aman-kumar-861905261" },
];

const smooth = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] };

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={smooth}
      >
        <div className="flex items-center gap-3 mb-12">
          <Mail size={16} className="text-accent" />
          <h2 className="font-mono text-xs tracking-widest-xl text-accent uppercase">Contact</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...smooth, delay: 0.1 }}
          className="space-y-5"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
            Let's work<br />
            <span className="text-gradient-accent">together.</span>
          </h3>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <link.icon size={16} className="text-accent group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              <span className="font-mono text-sm">{link.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...smooth, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 font-mono focus:outline-none focus:border-accent/50 transition-colors duration-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 font-mono focus:outline-none focus:border-accent/50 transition-colors duration-300"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 font-mono focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 font-mono text-xs tracking-widest px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out glow-accent"
          >
            <Send size={14} /> SEND MESSAGE
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
