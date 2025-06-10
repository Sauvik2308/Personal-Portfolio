import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef } from 'react-icons/si';
import { Github } from 'lucide-react';
import LeetCodeSauvik from './LeetCodeSauvik';

const profiles = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    icon: <SiLeetcode />,
    color: 'from-yellow-400 to-orange-500',
    description: 'Problem Solving',
    tagLine: '100+ Problems',
    details: <LeetCodeSauvik />,
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    icon: <SiHackerrank />,
    color: 'from-green-400 to-emerald-500',
    description: 'Algorithms & DS',
    tagLine: '5⭐ Gold Badge',
    details: 'Details will be updated shortly...',
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    icon: <SiCodeforces />,
    color: 'from-indigo-500 to-purple-600',
    description: 'Competitive',
    tagLine: '---',
    details: 'Details will be updated shortly...',
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    icon: <SiCodechef />,
    color: 'from-orange-400 to-red-500',
    description: 'Monthly Contests',
    tagLine: '---',
    details: 'Details will be updated shortly...',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: <Github className="w-8 h-8" />,
    color: 'from-gray-700 to-gray-900',
    description: 'Open Source',
    tagLine: '---',
    details: 'Details will be updated shortly...',
  },
];

export default function CodingProfiles() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="coding-profiles" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-600">Coding Profiles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto my-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tap on a card to see more about my journey on each platform.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className="relative w-48 h-48 cursor-pointer group"
              onClick={() => setExpanded(expanded === profile.id ? null : profile.id)}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <motion.div
                className={`rounded-2xl shadow-lg border relative z-10 p-5 flex flex-col items-center justify-center bg-white dark:bg-gray-900 overflow-hidden`}
                whileHover={{ boxShadow: '0 0 20px rgba(0, 255, 180, 0.4)' }}
              >
                <motion.div
                  className={`w-16 h-16 mb-4 rounded-xl flex items-center justify-center text-white text-2xl bg-gradient-to-r ${profile.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                >
                  {profile.icon}
                </motion.div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-200 group-hover:text-teal-500">
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">{profile.description}</p>

                  <div className={`mt-3 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs star-animation`}>
                    {profile.tagLine}
                  </div>

                {/* Background animation glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl z-0 opacity-20 group-hover:opacity-30 transition-all duration-300 blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${profile.color.replace('from-', '').replace('to-', '').replace(/ /g, ', ')})`,
                  }}
                />
              </motion.div>

              <AnimatePresence>
                {expanded === profile.id && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-white dark:bg-gray-800 text-sm rounded-xl shadow-md w-72 text-gray-800 dark:text-gray-100 z-20"
                  >
                    {profile.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
