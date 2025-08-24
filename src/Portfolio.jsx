import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Sun,
  Moon,
  MapPin,
  Phone,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiMysql, SiPostman, SiMongodb, SiExpress, SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { FaNode, FaPython, FaGitAlt } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

import HeroText from './HeroText';
import CodingProfiles from './CodingProfiles.jsx';

const techStack = [
  { name: 'JavaScript', icon: <IoLogoJavascript color='#e7ed32' />, category: 'Frontend' },

  { name: 'React', icon: <FaReact color='Blue' />, category: 'Frontend' },

  { name: 'TypeScript', icon: <SiTypescript color='Skyblue' />, category: 'Frontend' },

  { name: 'Node.js', icon: <FaNode color='Green' />, category: 'Backend' },

  { name: 'Java', icon: <FaJava color='Brown' />, category: 'Backend' },

  { name: 'MongoDB', icon: <SiMongodb color='Green' />, category: 'Database' },

  { name: 'PostgreSQL', icon: <BiLogoPostgresql color='darkblue' />, category: 'Database' },

  { name: 'Git', icon: <FaGitAlt color='red' />, category: 'Tools' },

  { name: 'Postman', icon: <SiPostman color='#f1340b' />, category: 'Tools' },

  { name: 'MySQL', icon: <SiMysql color='blue' />, category: 'Database' },

  { name: 'Express', icon: <SiExpress />, category: 'Backend' },

  { name: 'Python', icon: <FaPython />, category: 'Frontend' }
];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'tech-stack', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gray-50 text-gray-900';

  const cardClasses = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';


  const profileData = {
    leetcode: {
      title: "LeetCode",
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-500/10 to-yellow-500/10",
      hoverBgColor: "from-orange-500/20 to-yellow-500/20",
      textColor: "orange-500",
      stats: {
        "Problems Solved": "200+",
        "Contest Rating": "--",
        "Global Ranking": "--",
        "Contest Attended": "--",
        "Acceptance Rate": "--",
        "Languages Used": "--",
        "Favorite Topics": "--",
        "Current Streak": "--"
      },
      description: "Consistent problem solver with focus on algorithmic thinking and optimization. Regular contest participant with strong performance in weekly and biweekly contests.",
      profileLink: "https://leetcode.com/u/SauvikDas/",
      icon: <SiLeetcode />
    },
    gfg: {
      title: "GeeksForGeeks",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-white-500/10 to-emerald-500/10",
      hoverBgColor: "from-green-500/20 to-emerald-500/20",
      textColor: "green-500",
      stats: {
        "Problems Solved": "100+",
        "Contest Rating": "--",
        "Global Ranking": "--",
        "Contest Attended": "--",
        "Acceptance Rate": "--",
        "Languages Used": "--",
        "Favorite Topics": "--",
        "Current Streak": "--"
      },
      description: "Achieved multiple gold badges across various domains. Strong foundation in data structures, algorithms, and multiple programming languages with certified skills.",
      profileLink: "https://www.geeksforgeeks.org/user/sgcburdwan/",
      icon: <SiGeeksforgeeks />
    },
    hackerrank: {
      title: "HackerRank",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      hoverBgColor: "from-green-500/20 to-emerald-500/20",
      textColor: "green-500",
      stats: {
        "Problem Solving": "--",
        "Java": "--",
        "Python": "--",
        "Algorithms": "--",
        "Data Structures": "--",
        "Mathematics": "--",
        "SQL": "--",
        "Certificates": "--"
      },
      description: "Achieved multiple gold badges across various domains. Strong foundation in data structures, algorithms, and multiple programming languages with certified skills.",
      profileLink: "https://www.hackerrank.com/profile/sgc_burdwan",
      icon: <SiHackerrank />
    },
    codeforces: {
      title: "Codeforces",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-500/10 to-purple-500/10",
      hoverBgColor: "from-blue-500/20 to-purple-500/20",
      textColor: "blue-500",
      stats: {
        "Current Rating": "--",
        "Max Rating": "--",
        "Contest Participated": "--",
        "Problems Solved": "--",
        "Global Rank": "--",
        "Best Contest Rank": "--",
        "Favorite Categories": "--",
        "Contribution": "--"
      },
      description: "Active competitive programmer with Expert rating. Regular participation in Div. 2 contests with consistent performance and problem-solving skills.",
      profileLink: "https://codeforces.com/profile/dassauvik08",
      icon: <SiCodeforces />
    },
    // codechef: {
    //   title: "CodeChef",
    //   color: "from-amber-500 to-red-500",
    //   bgColor: "from-amber-500/10 to-red-500/10",
    //   hoverBgColor: "from-amber-500/20 to-red-500/20",
    //   textColor: "amber-500",
    //   stats: {
    //     "Current Rating": "",
    //     "Max Rating": "",
    //     "Global Ranking": "",
    //     "Country Ranking": "",
    //     "Long Challenge": "",
    //     "Cook-Off": "",
    //     "Lunchtime": "",
    //     "Problems Solved": ""
    //   },
    //   description: "Consistent 4-star rated programmer with strong performance in monthly contests. Regular participant in Long Challenge, Cook-Off, and Lunchtime contests.",
    //   profileLink: "/under-maintenance",
    //   icon: <SiCodechef />
    // },
    github: {
      title: "GitHub",
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-600/10 to-gray-800/10",
      hoverBgColor: "from-gray-600/20 to-gray-800/20",
      textColor: "gray-600",
      stats: {
        "Public Repositories": "20",
        "Total Commits": "--",
        "Pull Requests": "--",
        "Issues Resolved": "--",
        "Followers": "--",
        "Following": "--",
        "Organizations": "--",
        "Most Used Language": "--"
      },
      description: "Active open-source contributor with diverse project portfolio. Strong collaboration skills with multiple contributions to community projects and personal repositories.",
      profileLink: "https://github.com/Sauvik2308"
    }
  };

  const projects = [
    {
      title: 'BitShelf',
      description: 'A one-stop solution for all essential developer utilities such as JSON Formatter, Base64 Encoder/Decoder',
      tech: ['React', 'Node.js', 'Tailwind', 'Javascript'],
      github: 'https://github.com/Sauvik2308/BitShelf',
      live: 'https://bitshelf-flame.vercel.app/'
    },
    {
      title: 'LearnTube',
      description: 'A full-stack learning management system to manage course content, assignments and real-time progress tracking',
      tech: ['React', 'Express', 'Stripe', 'MongoDB'],
      github: 'https://github.com/Sauvik2308/LearnTube',
      live: 'https://learn-tube-taupe.vercel.app/'
    },
    {
      title: 'Sign Language Detection',
      description: 'A Computer Vision Model to recognize and interpret hand gestures in real time using a webcam',
      tech: ['Python', 'Tensorflow', 'Keras', 'NumPy'],
      github: 'https://github.com/Sauvik2308/Sign-Language-Detection',
      live: '/under-maintenance'
    }
  ];

  const education = [
    {
      year: '2024 - Present',
      degree: 'Master of Computer Application',
      field: 'Computer Science & Engineering',
      institution: 'Jadavpur University, Kolkata',
      grade: 'CGPA: 7.9',
      description: 'Specialized in software development, data structures, algorithms, and database management.'
    },
    {
      year: '2021 - 2024',
      degree: 'Bachelor of Science(Hons.)',
      field: 'Computer Science',
      institution: 'Burdwan Raj College',
      grade: 'CGPA: 9.44',
      description: 'Computer Science, Mathematics & Electronics with focus on analytical problem-solving.'
    },
    {
      year: '2019 - 2021',
      degree: 'Higher Secondary Education',
      field: 'Science(PCM)',
      institution: 'St Paul\'s Academy, Burdwan',
      grade: 'Percentage: 80%',
      description: 'Strong foundation in mathematics, physics, chemistry and English literature.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  <img src="/logo3.png" alt="" />
                </span>
              </div>
              <span className="font-bold text-xl text-teal-600"></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'education', 'projects', 'tech-stack', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-teal-600 transition-colors ${activeSection === item ? 'text-teal-600 font-semibold' : ''
                    }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} py-4`}>
              {['home', 'about', 'education', 'projects', 'tech-stack', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:text-teal-600 transition-colors"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* <div className="w-full px-4 lg:px-20"> */}

          <div className="text-center py-20 animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-4xl">
                  <img className="w-full h-full object-cover rounded-full" src="/selfGhibli.png" alt="Image" />
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl  mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent" >
              Sauvik Das
            </h1>
            <HeroText />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('/resume.pdf', '_blank', 'noopener,noreferrer')}
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-teal-600">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
          </div>
          <div className={`${cardClasses} border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Hello, I'm Sauvik!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  I'm a passionate Computer Science student with a strong foundation in full-stack development.
                  I love solving complex problems and turning ideas into reality through code.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  My journey in software development has equipped me with skills in modern web technologies,
                  database management, and cloud services. I'm always eager to learn new technologies and
                  contribute to meaningful projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Kolkata, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Available for opportunities</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className={`${cardClasses} border rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300`}>
                  <Code className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Frontend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, JS, Tailwind</p>
                </div>
                <div className={`${cardClasses} border rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300`}>
                  <Database className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Express</p>
                </div>
                <div className={`${cardClasses} border rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300`}>
                  <Globe className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Cloud</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AWS, Firebase</p>
                </div>
                <div className={`${cardClasses} border rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300`}>
                  <Smartphone className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Mobile</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-teal-600">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-teal-500 to-emerald-500"></div>
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } mb-12`}
              >

                <div className={`w-full md:w-5/12 mt-6 md:mt-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>

                  <div className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center gap-2 mb-3 text-teal-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{edu.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-teal-600 font-semibold mb-2">{edu.field}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-emerald-500" />
                      <span className="font-semibold text-emerald-600">{edu.grade}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-teal-600">Coding Profiles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out my coding journey across various competitive programming platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {/* LeetCode */}
            <div
              className="coding-profile-card group cursor-pointer"
              onClick={() => setSelectedProfile('leetcode')}
            >
              <div className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden hover-bounce`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${profileData.leetcode.bgColor} group-hover:${profileData.leetcode.hoverBgColor} transition-all duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${profileData.leetcode.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg pulse-animation`}>
                    <SiLeetcode />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 group-hover:text-${profileData.leetcode.textColor} transition-colors`}>LeetCode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Problem Solving</p>
                  <div className={`mt-3 px-3 py-1 bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs wiggle-animation`}>
                    200+ Problems
                  </div>
                </div>
              </div>
            </div>

            {/* GeeksForGeeks */}
            <div
              className="coding-profile-card group cursor-pointer"
              onClick={() => setSelectedProfile('gfg')}
            >
              <div className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden hover-shake`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${profileData.gfg.bgColor} group-hover:${profileData.gfg.hoverBgColor} transition-all duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${profileData.gfg.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg glow-animation`}>
                    <SiGeeksforgeeks />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 group-hover:text-${profileData.gfg.textColor} transition-colors`}>GeeksForGeeks</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Problem Solving</p>
                  <div className={`mt-3 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs star-animation`}>
                    100+ Problems
                  </div>
                </div>
              </div>
            </div>

            {/* HackerRank */}
            <div
              className="coding-profile-card group cursor-pointer"
              onClick={() => setSelectedProfile('hackerrank')}
            >
              <div className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden hover-shake`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${profileData.hackerrank.bgColor} group-hover:${profileData.hackerrank.hoverBgColor} transition-all duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${profileData.hackerrank.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg glow-animation`}>
                    <SiHackerrank />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 group-hover:text-${profileData.hackerrank.textColor} transition-colors`}>HackerRank</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Algorithms & DS</p>
                  <div className={`mt-3 px-3 py-1 bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs star-animation`}>
                    5⭐ Gold Badge
                  </div>
                </div>
              </div>
            </div>

            {/* Codeforces */}
            <div
              className="coding-profile-card group cursor-pointer"
              onClick={() => setSelectedProfile('codeforces')}
            >
              <div className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden hover-tilt`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${profileData.codeforces.bgColor} group-hover:${profileData.codeforces.hoverBgColor} transition-all duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${profileData.codeforces.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg rotate-animation`}>
                    <SiCodeforces />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 group-hover:text-${profileData.codeforces.textColor} transition-colors`}>Codeforces</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Competitive</p>
                  <div className={`mt-3 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs float-animation`}>
                    ---
                  </div>
                </div>
              </div>
            </div>

            {/* CodeChef */}
            {/* <div
              className="coding-profile-card group cursor-pointer"
              onClick={() => setSelectedProfile('codechef')}
            >
              <div className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden hover-flip`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${profileData.codechef.bgColor} group-hover:${profileData.codechef.hoverBgColor} transition-all duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${profileData.codechef.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg zoom-animation`}>
                    <SiCodechef />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 group-hover:text-${profileData.codechef.textColor} transition-colors`}>CodeChef</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Monthly Contests</p>
                  <div className={`mt-3 px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-xs bounce-animation`}>
                    ---
                  </div>
                </div>
              </div>
            </div> */}

            {/* GitHub */}
            <div
              className="coding-profile-card group cursor-pointer"
              onClick={() => setSelectedProfile('github')}
            >
              <div className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden hover-wobble`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${profileData.github.bgColor} group-hover:${profileData.github.hoverBgColor} transition-all duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${profileData.github.color} rounded-xl flex items-center justify-center text-white shadow-lg slide-animation`}>
                    <Github className="w-8 h-8" />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors`}>GitHub</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Open Source</p>
                  <div className={`mt-3 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 rounded-full text-xs heartbeat-animation`}>
                    15+ Repos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProfile(null)}>
          <div className={`${cardClasses} border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`} onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${profileData[selectedProfile].color} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {selectedProfile === 'github' ? <Github className="w-8 h-8" /> : profileData[selectedProfile].icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-teal-600">{profileData[selectedProfile].title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">Coding Profile Statistics</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProfile(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {profileData[selectedProfile].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(profileData[selectedProfile].stats).map(([key, value], index) => (
                  <div key={index} className={`${cardClasses} border rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{key}</span>
                      <span className={`font-bold text-${profileData[selectedProfile].textColor}`}>{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4 justify-center">
                <button 
                  onClick={() => window.open(profileData[selectedProfile].profileLink, '_blank')}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Profile
                </button>
                <button 
                  onClick={() => setSelectedProfile(null)}
                  className="border-2 border-teal-500 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-teal-600">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${cardClasses} border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}>
                <h3 className="text-xl font-bold mb-3 text-teal-600 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target='blank' className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.live} target='blank'  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-teal-600">Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className={`${cardClasses} border rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}>
                <div className="flex justify-center items-center text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                <h3 className="font-semibold mb-1 group-hover:text-teal-600 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-teal-600">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${cardClasses} border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-teal-600">Let's Connect!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
              </p>
              <div className="space-y-4">
                <a href="mailto:sgc.burdwan@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  sgc.burdwan@gmail.com
                </a>
                <a href="tel:9002486020" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  +91 90024 86020
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5" />
                  Kolkata, West Bengal, India
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/Sauvik2308" className="p-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/sauvik-das-0a8a67244" className="p-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:sgc.burdwan@gmail.com" className="p-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className={`${cardClasses} border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6 text-teal-600">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className={`w-full p-3 rounded-lg border ${isDarkMode
                    ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:border-teal-500 focus:outline-none
        transition-colors`} />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className={`w-full p-3 rounded-lg border ${isDarkMode
                    ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:border-teal-500 focus:outline-none
        transition-colors`} />
                </div>
                <div>
                  <textarea rows="4" placeholder="Your Message" className={`w-full p-3 rounded-lg border ${isDarkMode
                    ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:border-teal-500 focus:outline-none
        transition-colors resize-none`}></textarea>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">
                <img src="/logo3.png" alt="" />
              </span>
            </div>
            <span className="font-bold text-lg text-teal-600">Sauvik Das</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Aspiring Software Engineer • Building the future, one line of code at a time
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/Sauvik2308" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sauvik-das-0a8a67244" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sgc.burdwan@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Sauvik Das. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;