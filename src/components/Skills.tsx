const skills = [
  "JavaScript",
  "React",
  "Figma",
  "Node.js",
  "MongoDB",
  "Git",
  "REST APIs",
  "Tailwind CSS",
  "Next.js",
  "Express",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
