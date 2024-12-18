import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Ali Laith</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Full Stack Developer | Web Designer
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/AliLaith88"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github size={24} />
          </a>
          {/* <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={24} />
          </a> */}
          {/* <a
            href="alilaith160@outlook.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail size={24} />
          </a> */}
        </div>
        <a
          href="#about"
          className="animate-bounce inline-block text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
}
