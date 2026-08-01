import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { socialLinks } from "../data/content";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const body = encodeURIComponent(
`Name: ${form.name}

Email: ${form.email}

Message:

${form.message}`
    );

    window.location.href = `mailto:aaditya.mahashabde@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:p-14">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something thoughtful together"
          description="I would be excited to connect with recruiters, teams, and collaborators who value strong fundamentals and clean execution."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              ["Email", socialLinks[0].href, FiMail],
              ["GitHub", socialLinks[1].href, FiGithub],
              ["LinkedIn", socialLinks[2].href, FiLinkedin],
              ["LeetCode", socialLinks[3].href, FiCode],
            ].map(([label, value, Icon]) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-[1.1rem] border border-white/10 bg-slate-900/70 p-4"
              >
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                  <Icon />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    {label}
                  </p>

                  <p className="mt-1 text-white">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
                />
              </label>

              <label className="text-sm text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm text-slate-300">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about the opportunity."
                className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 hover:bg-cyan-400/20 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;