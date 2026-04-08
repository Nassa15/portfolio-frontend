import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl mx-auto mt-20  mb-16 px-4 sm:px-6 gap-8 sm:gap-10 md:gap-16">
      
      {/* Texte + Skills */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1"
      >
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-white mb-4 flex items-center">
          À propos de moi
          <span className="w-16 xs:w-20 h-1 ml-2 xs:ml-4 bg-gradient-to-r from-indigo-400 to-blue-500 rounded block md:hidden"></span>
        </h2>

        <div className="w-20 xs:w-24 h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 rounded mb-6 xs:mb-8 hidden md:block"></div>

        <p className="mb-4 text-gray-300 text-sm xs:text-base sm:text-lg leading-relaxed">
          Je suis un développeur web passionné, dédié à créer des expériences digitales engageantes et fonctionnelles.
          Avec une expertise en <span className="text-indigo-300 font-medium">HTML5</span>, <span className="text-indigo-300 font-medium">CSS3</span>, <span className="text-indigo-300 font-medium">JavaScript</span>, <span className="text-indigo-300 font-medium">React</span> et <span className="text-indigo-300 font-medium">Node.js</span>, je fournis des solutions numériques de haute qualité.
        </p>

        <p className="mb-6 text-gray-300 text-sm xs:text-base sm:text-lg leading-relaxed">
          Je crois que la technologie doit être accessible et apporter une réelle valeur aux utilisateurs.
          Chaque projet est une opportunité d’apprendre, de grandir et de contribuer positivement à la communauté des développeurs.
        </p>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="font-bold text-white mb-3 text-lg xs:text-xl">Compétences & Technologies</h3>
          <div className="flex flex-wrap gap-2 xs:gap-3">
            {[
              "HTML5","CSS3","JavaScript","React","Node.js","Git","Responsive Design","UI/UX"
            ].map(skill => (
              <motion.span
                key={skill}
                className="bg-indigo-700/90 text-white px-3 xs:px-4 py-1 rounded-full text-xs xs:text-sm sm:text-base font-semibold cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                whileHover={{ scale: 1.1, backgroundColor: "#6366f1" }}
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                tabIndex={0} // Pour accessibilité clavier
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Carte Code */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
      >
        <div className="bg-[#1b0f15c6]/90 border border-indigo-700 rounded-lg shadow-lg px-4 xs:px-6 sm:px-8 py-4 xs:py-6 w-full max-w-sm xs:max-w-md md:max-w-lg xl:max-w-xl text-left overflow-hidden">
          <pre className="text-indigo-400 text-sm xs:text-base md:text-lg font-mono leading-relaxed">
{`const developer = {
  name: 'Nassa ANDRIATSILAVO',
  role: 'Développeur Web',
  passion: 'Créer des expériences web
                 engageantes'
};`}
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
