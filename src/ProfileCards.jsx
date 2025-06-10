import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHackerrank, FaCode, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const profiles = [
  {
    id: 1,
    name: "HackerRank",
    icon: <FaHackerrank />,
    color: "from-green-400 to-green-600",
    description: "Practice problems and certifications",
    details: "5 stars in problem solving, SQL and Python certifications.",
  },
  {
    id: 2,
    name: "LeetCode",
    icon: <SiLeetcode />,
    color: "from-yellow-400 to-orange-500",
    description: "Daily coding challenges and contests",
    details: "Completed 500+ problems, Contest Rating: 1800+.",
  },
  {
    id: 3,
    name: "GitHub",
    icon: <FaGithub />,
    color: "from-gray-700 to-black",
    description: "Open-source contributions and projects",
    details: "Active contributor to web development projects, 50+ repositories.",
  },
  {
    id: 4,
    name: "Codeforces",
    icon: <FaCode />,
    color: "from-purple-400 to-purple-700",
    description: "Competitive programming platform",
    details: "Contest Rating: Expert, participated in 80+ contests.",
  },
];

const ProfileCards = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Coding Profiles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {profiles.map((profile) => (
          <motion.div
            key={profile.id}
            className="relative w-48 h-48 cursor-pointer group perspective"
            onClick={() => setExpanded(expanded === profile.id ? null : profile.id)}
            whileHover={{ rotateY: 360 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.div
              className="rounded-2xl shadow-lg border relative z-10 p-5 flex flex-col items-center justify-center bg-white dark:bg-gray-900 overflow-hidden backface-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-16 h-16 mb-4 rounded-xl flex items-center justify-center text-white text-2xl bg-gradient-to-r ${profile.color}`}
              >
                {profile.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200 group-hover:text-teal-500">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                {profile.description}
              </p>

              {/* Glow background effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl z-0 opacity-20 group-hover:opacity-30 transition-all duration-300 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${profile.color.replace("from-", "").replace("to-", "").replace(/ /g, ", ")})`,
                }}
              />
            </motion.div>

            <AnimatePresence>
              {expanded === profile.id && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-white dark:bg-gray-800 text-sm rounded-xl shadow-md w-72 text-gray-800 dark:text-gray-100 z-20"
                >
                  {profile.details}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCards;
