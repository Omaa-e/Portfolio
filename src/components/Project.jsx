import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Clock, CheckCircle } from "lucide-react";
import img1 from "../assets/restaurant-work.png";
import img2 from "../assets/brand-work.png";
import img3 from "../assets/netflix-work.png";
import img4 from "../assets/finance-work.png";
import img5 from "../assets/vans-workk.png";
import { RiGithubFill } from "react-icons/ri";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      id: 1,
      image: img1,
      title: "Restaurant Website",
      description:
        "A responsive restaurant website built with HTML, CSS, JavaScript, and Bootstrap, featuring a modern design, menu showcase, reservation form, and contact information to enhance user experience.",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoUrl: "#",
      githubUrl: "https://github.com/Omaa-e/restaurant",
      status: "completed",
    },
    {
      id: 2,
      image: img2,
      title: "Brand",
      description:
        "A cloud management website clone built with ReactJS and TailwindCSS featuring responsive design and user-friendly UI components to enhance user experience.",
      stack: ["ReactJS", "TailwindCSS"],
      demoUrl: "https://cloud-management-clone.vercel.app/",
      githubUrl: "https://github.com/Omaa-e/cloud-management-clone",
      status: "completed",
    },
    {
    id: 3,
    image: img3,
    title: "Netflix Clone",
    description:
    "A Netflix clone built with ReactJS and TailwindCSS, featuring responsive design and dynamic content fetching from TMDB API to showcase popular movies and TV shows.",
    stack: ["ReactJS", "TailwindCSS", "TMDB API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Omaa-e/#",
    status: "in-progress",
  },
    {
      id: 4,
      image: img4,
      title: "Finance Website",
      description:
        " A finance website built built with ReactJS and TailwindCSS from plum lunar server,a figma design, featuring responsive design and interactive UI components to enhance user experience.",
      stack: [ "TailwindCSS", "ReactJS"],
      demoUrl: "https://finance-kappa-lovat.vercel.app",
      githubUrl: "https://github.com/Omaa-e/finance-website",
      status: "Completed",
    },
    {
      id: 5,
      image: img5,
      title: "Vans Clone",
      description:
      "A cloned work to improve my skills using tailwind and reactJs to make a fully responsive, fully functional website",
      stack: ["ReactJs", "TailwindCSS", "FastAPI"],
      demoUrl: "#",
      githubUrl: "https://github.com/Omaa-e/base",
      status: "in-progress",
    }
   
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case "completed":
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          text: "Completed",
          bgColor: "bg-green-100 dark:bg-green-900",
          textColor: "text-green-600 dark:text-green-400",
          borderColor: "border-green-200 dark:border-green-700",
        };
      case "in-progress":
        return {
          icon: <Clock className="w-3 h-3" />,
          text: "In Progress",
          bgColor: "bg-yellow-100 dark:bg-yellow-500",
          textColor: "text-yellow-700 dark:text-yellow-900",
          borderColor: "border-yellow-200 dark:border-yellow-700",
        };
      default:
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          text: "Completed",
          bgColor: "bg-green-100 dark:bg-green-900",
          textColor: "text-green-600 dark:text-green-400",
          borderColor: "border-green-200 dark:border-green-700",
        };
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];
  const statusConfig = getStatusConfig(currentProject.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
      className="w-full max-w-7xl mx-auto py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center mb-8 border-t border-gray-300 dark:border-gray-600 lg:pt-20">
        <h2 className="text-3xl font-semibold dark:text-white mt-8 mb-3 font-heading">
          Featured Projects 👩🏽‍🍳
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* ✅ Desktop Layout (grid with side navs) */}
      <div className="hidden md:flex items-center justify-center mb-6">
        <button
          onClick={goToPrevious}
          className="p-2.5 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-950"
        >
          <ChevronLeft className="text-rose-500" />
        </button>

        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .slice(currentIndex, currentIndex + 3)
            .concat(
              currentIndex + 3 > projects.length
                ? projects.slice(0, (currentIndex + 3) % projects.length)
                : []
            )
            .map((project) => {
              const statusConfig = getStatusConfig(project.status);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white dark:bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl"
                >
                  {/* Status Badge */}
                  <div
                    className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}
                  >
                    {statusConfig.icon}
                    <span>{statusConfig.text}</span>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center justify-center gap-2 px-4 py-2 text-gray-900 dark:text-white text-sm font-medium rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
                            <span className="block h-full w-full rounded-lg bg-white dark:bg-[#0a0a0a] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors"></span>
                          </span>

                          <span className="relative z-10 flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#232323] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 transition"
                        >
                          <RiGithubFill className="text-lg" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

        <button
          onClick={goToNext}
          className="p-2.5 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-950"
        >
          <ChevronRight className="text-rose-500" />
        </button>
      </div>

      {/* ✅ Mobile Layout (overlay navigation) */}
      <div className="relative flex flex-col items-center md:hidden">
        <div className="relative w-full max-w-sm">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <div
              className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}
            >
              {statusConfig.icon}
              <span>{statusConfig.text}</span>
            </div>

            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {currentProject.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {currentProject.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={currentProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#232323] text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600"
                >
                  <RiGithubFill className="text-lg" /> Code
                </a>
              </div>
            </div>
          </motion.div>

          {/* Overlay navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/70 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft className="text-rose-500 w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/70 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronRight className="text-rose-500 w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
