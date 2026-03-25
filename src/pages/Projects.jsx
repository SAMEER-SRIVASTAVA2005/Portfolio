import { useState, useEffect } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Enhanced project data with categories and featured flag
  const projects = [
    {
      title: "Nivana",
      description:
        "A full-stack mental wellness platform that provides personalized emotional insights and helps users track their mental well-being over time.",
      longDescription:
        "Built using the MERN stack, the platform allows users to perform self-assessments, track mood patterns, and maintain wellness activities such as journaling and meditation. It includes a scalable backend with multiple RESTful APIs secured through JWT authentication. An AI-powered assessment engine integrated with the Gemini API dynamically generates questions and insights for users. The system also features mood analytics dashboards and structured data storage using MongoDB for efficient performance and scalability.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Gemini API"],
      demoLink: "https://nivana.vercel.app/",
      codeLink: "https://github.com/SAMEER-SRIVASTAVA2005/Nivana",
      screenshot: "/images/nivana.png",
      categories: ["Full Stack", "AI Integration"],
      featured: true
    },
    {
      title: "Planova",
      description:
        "A full-stack project management application designed to help teams organize tasks, manage projects, and track progress efficiently.",
      longDescription:
        "Developed with the MERN stack, Planova enables users to create projects, assign tasks, and monitor project progress through an intuitive dashboard. The application includes user authentication, task categorization, and collaborative workflow features. A modular backend architecture ensures scalability and maintainability, while MongoDB manages project and task data efficiently. The responsive interface allows seamless usage across different devices.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      demoLink: "https://planova-ten.vercel.app/",
      codeLink: "https://github.com/SAMEER-SRIVASTAVA2005/Planova",
      screenshot: "/images/planova.png",
      categories: ["Full Stack", "Productivity"],
      featured: true
    },
    {
      title: "Shortest Path Finder",
      description:
        "A front-end visualization tool that demonstrates how shortest path algorithms work on a grid-based layout.",
      longDescription:
        "This application visually represents pathfinding algorithms by allowing users to set start and end nodes and observe how the algorithm computes the shortest route. Built entirely with front-end technologies, it focuses on algorithm visualization and interactive UI. The tool helps users understand pathfinding logic through animated steps and grid-based navigation.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "https://github.com/SAMEER-SRIVASTAVA2005/shortest-pathFinder",
      screenshot: "/images/shortest-path.png",
      categories: ["Frontend", "Algorithm Visualization"],
      featured: false
    }
  ];

  // Get unique categories from projects
  const categories = ["all", ...new Set(projects.flatMap(project => project.categories))];

  // Filter projects based on active category
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>

      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {/* Header with animated gradient */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            Featured Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of my work spanning web applications, APIs, and responsive interfaces.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid/List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 flex flex-col`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveProject(project)}
            >
              {/* Project Image with overlay */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                    Featured
                  </div>
                )}

                {/* Project categories */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800/80 backdrop-blur-sm text-gray-200 px-3 py-1 rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-indigo-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-indigo-500 text-indigo-400 px-4 py-2 rounded-lg text-sm hover:bg-indigo-900/30 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project count */}
        <div className="mt-10 text-center text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 text-center border border-indigo-800/30">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;