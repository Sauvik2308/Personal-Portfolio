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
import { IoLogoJavascript} from "react-icons/io5";
import { FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiMysql, SiPostman, SiMongodb, SiExpress, SiPostgresql, SiPython } from "react-icons/si";
import { FaNode, FaPython, FaGitAlt } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import HeroText from './HeroText';
import Logo1 from './pythonLogo.jsx';

  const techStack = [
    { name: 'JavaScript', icon: <IoLogoJavascript color='#e7ed32' />, category: 'Frontend' },

    { name: 'React', icon: <FaReact color='Blue' />, category: 'Frontend' },

    { name: 'TypeScript', icon: <SiTypescript color='Skyblue' />, category: 'Frontend' },

    { name: 'Node.js', icon: <FaNode color='Green' />, category: 'Backend' },

    { name: 'Java', icon: <FaJava color='Brown' />, category: 'Backend' },

    { name: 'MongoDB', icon: <SiMongodb color='Green' />, category: 'Database' },

    { name: 'PostgreSQL', icon: <BiLogoPostgresql color='darkblue' />, category: 'Database' },

    { name: 'Git', icon: <FaGitAlt color='red' /> , category: 'Tools' },

    { name: 'Postman', icon: <SiPostman color='#f1340b' />, category: 'Tools' },

    { name: 'MySQL', icon: <SiMysql color='blue' />, category: 'Database' },

    { name: 'Express', icon: <SiExpress />, category: 'Backend' },

    { name: 'Python', icon: <FaPython />, category: 'Frontend' }
  ];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const projects = [
    {
      title: 'LearnTube - LMS',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'Express', 'Stripe', 'MongoDB'],
      github: '/under-maintenance',
      live: '/under-maintenance'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '/under-maintenance',
      live: '/under-maintenance'
    },
    {
      title: 'Sign Language Detection',
      description: 'Weather data visualization dashboard with interactive charts, location-based forecasts, and historical data analysis.',
      tech: ['Python', 'Tensorflow', 'Keras', 'NumPy'],
      github: '/under-maintenance',
      live: '/under-maintenance'
    }
  ];

  const education = [
    {
      year: '2024 - Present',
      degree: 'Master of Computer Application',
      field: 'Computer Science & Engineering',
      institution: 'Jadavpur University, Kolkata',
      grade: 'CGPA: Appearing',
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
      grade: 'Percentage: 94%',
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
                  I'm a passionate software engineering student with a strong foundation in full-stack development.
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
                  <a href={project.github} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
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