function Projects() {
    const projects = [
      { name: "Project One", description: "A cool project I worked on.", link: "#" },
      { name: "Project Two", description: "Another interesting project.", link: "#" },
      { name: "Project Three", description: "Something awesome I built.", link: "#" },
    ];
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 inline-block">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  