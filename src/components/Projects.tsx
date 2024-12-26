import { ExternalLink, Github } from "lucide-react";
import floraProject from "../assets/flora.png";
import mehatProject from "../assets/mehat.jpg";
import pharmacyProject from "../assets/pharmacy.png";
const projects = [
  {
    title: "Travel Agency",
    description: "",
    image: floraProject,
    technologies: ["React", "Tailwind css", "Figma"],
    liveUrl: "https://flora-one-delta.vercel.app/",
    githubUrl: "https://github.com/AliLaith88/Flora",
  },
  {
    title: "Landing Page",
    description: "",
    image: mehatProject,
    technologies: ["React", "Tailwind", "Figma"],
    liveUrl:
      "https://john-doe-landing-page-git-ali88-alilaith88s-projects.vercel.app/",
    githubUrl:
      "https://john-doe-landing-page-466d1fuzq-alilaith88s-projects.vercel.app",
  },
  {
    title: "Pharmacy Landing Page",
    description: "",
    image: pharmacyProject,
    technologies: ["React", "Tailwind"],
    liveUrl: "https://pharmacy-landing-page-topaz.vercel.app/",
    githubUrl: "https://github.com/AliLaith88/pharmacy-landing-page",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
