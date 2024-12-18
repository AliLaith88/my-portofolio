import { Code2, Palette } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Working on laptop"
              className="rounded-lg shadow-lg max-w-96"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-16">
              I am a Computer Science graduate with experience in web
              development and design. I focus on creating responsive websites
              with clean code and effective layouts, emphasizing usability and
              performance.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code2 className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-600 text-sm">
                  Writing maintainable and scalable code
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-gray-600 text-sm">
                  Creating beautiful user interfaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
