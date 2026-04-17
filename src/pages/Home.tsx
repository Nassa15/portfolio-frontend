/* eslint-disable @typescript-eslint/no-unused-vars */
import Layout from "../components/Layout";
import sary from "../assets/images/photoTena Ilaina.jpg";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaWhatsapp,
  FaTiktok,
  FaGithub,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import About from "./ About"; 
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const separatorAnim = {
    hidden: { width: 0, opacity: 0 },
    show: { width: "100%", opacity: 1, transition: { duration: 1 } },
  };

  const randomFloatAnim = (xRange: number, yRange: number, duration: number) => ({
    x: [0, xRange, -xRange / 2, 0],
    y: [0, -yRange, yRange / 2, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  });

  return (
    <Layout>
      <div className="flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20  py-12 md:py-20 gap-10 lg:gap-16"
      >
        {/* Colonne gauche */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl w-full space-y-4 sm:space-y-6"
        >
          <p className="text-gray-300 text-sm sm:text-base select-none">
            Salut, je suis{" "}
            <span className="text-indigo-400 font-semibold">Nassa ANDRIATSILAVO</span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-snug drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]">
            Développeur Web Full-Stack
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Je conçois des applications web <span className="text-white font-medium">performantes</span>,{" "}
            <span className="text-white font-medium">scalables</span> et{" "}
            <span className="text-white font-medium">orientées utilisateur</span>.
          </p>

          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Je transforme des visions en solutions web robustes — combinant{" "}
            <span className="text-indigo-300 font-medium">architecture solide</span>,{" "}
            <span className="text-indigo-300 font-medium">code de qualité</span> et{" "}
            <span className="text-indigo-300 font-medium">innovation technologique</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-2">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 sm:px-10 py-3 rounded-md font-semibold shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] hover:scale-105 transition duration-300">
              Télécharger mon Curriculum Vitae
            </button>
            <a
              href="#contact"
              className="border border-gray-400 text-gray-300 hover:text-white hover:border-indigo-400 px-8 sm:px-10 py-3 rounded-md transition duration-300 hover:shadow-[0_0_20px_#6366f1]"
            >
              Me Contacter
            </a>
          </div>

          {/* Icônes sociales */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            {[
              { href: "#", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
              { href: "#", icon: <FaWhatsapp size={22} />, label: "WhatsApp" },
              { href: "#", icon: <FaTiktok size={22} />, label: "TikTok" },
              { href: "#", icon: <FaGithub size={22} />, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-full p-3 hover:bg-indigo-600 hover:shadow-[0_0_20px_#6366f1] transition"
                whileHover={{ scale: 1.2 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Colonne droite */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex items-center justify-center w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[320px] sm:h-[360px]"
        >
          {/* Halo lumineux */}
          <div className="absolute rounded-full bg-indigo-400 opacity-30 blur-3xl w-60 h-60"></div>

          {/* Image principale */}
          <motion.img
            src={sary}
            alt="Avatar Nassa ANDRIATSILAVO"
            className="relative rounded-full w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-cover shadow-xl shadow-indigo-500/40 border-4 border-indigo-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* Icônes animées aléatoirement */}
          {[
            { icon: <FaReact size={40} />, top: "-10%", left: "10%", x: 40, y: 60, duration: 6, color: "text-blue-400" },
            { icon: <FaJs size={34} />, top: "20%", right: "-10%", x: 60, y: 40, duration: 7, color: "text-yellow-400" },
            { icon: <FaCss3Alt size={36} />, bottom: "5%", left: "0%", x: 50, y: 70, duration: 5, color: "text-blue-500" },
            { icon: <FaHtml5 size={36} />, bottom: "-5%", right: "20%", x: 70, y: 50, duration: 8, color: "text-orange-400" },
            { icon: <FaNodeJs size={38} />, top: "10%", left: "70%", x: 30, y: 60, duration: 6.5, color: "text-green-400" },
          ].map(({ icon, top, bottom, left, right, x, y, duration, color }, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${color}`}
              animate={randomFloatAnim(x, y, duration)}
              style={{ top, bottom, left, right }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Séparateur animé */}
      <motion.div
        className="w-full h-1 my-6 sm:my-12 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: "100%", transition: { duration: 1 } }}
      />

      {/* Sections About, Projects, Contact */}
      <section id="about" className="w-full py-10 px-6 sm:px-10 lg:px-20">
        <About />
      </section>

      <motion.div
        className="w-full h-1 my-6 sm:my-12 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: "100%", transition: { duration: 1 } }}
      />

      <section id="projects">
        <Projects />
      </section>

      <motion.div
        className="w-full h-1 my-6 sm:my-12 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: "100%", transition: { duration: 1 } }}
      />

      <section id="contact">
        <Contact />
      </section>
      </div>
    </Layout>
  );
}
