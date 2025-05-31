import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <p className="text-center text-gray-300 mb-8">
            You can check out all my projects on{' '}
            <a href="https://github.com/ajayrao0904" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">GitHub</a>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-400/30
              hover:shadow-[0_4px_20px_rgba(250,204,21,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Clutch AI</h3>
              <p className="text-gray-400 mb-4">
                Agentic workflow for generating last minute notes for college students to help in exam prepration using langchain and openai.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Langchain", "Advanced RAG", "Vector Databases"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-yellow-400/10 text-yellow-400 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-yellow-400/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-400/30
              hover:shadow-[0_4px_20px_rgba(250,204,21,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Income Tax Calculator</h3>
              <p className="text-gray-400 mb-4">
                An income tax calculator that calculates the tax based on the income and the tax slab, which runs entirely on user input, using Java ,springboot and MySQL backend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "MySQL", "Spring", "REST APIs"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-yellow-400/10 text-yellow-400 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-yellow-400/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-400/30
              hover:shadow-[0_4px_20px_rgba(250,204,21,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Request monitoring dashboard</h3>
              <p className="text-gray-400 mb-4">
                Built a request monitoring dashboard which can track and account for the number of reuqests generated and what source and also track the network resources consumed by each resource using tools related to cloud computing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Graphana", "Docker", "Kubernetes", "Prometheus","PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-yellow-400/10 text-yellow-400 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-yellow-400/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-400/30
              hover:shadow-[0_4px_20px_rgba(250,204,21,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Network Utility Dashboard</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive network tool that allows you to:
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-300">
                  <li>Check if a given host (IP address or domain) is reachable.</li>
                  <li>Perform a TCP Connect Port Scan on specified ports.</li>
                  <li>Display a basic traceroute-like output.</li>
                  
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TCP", "Socket Programming", "Networking", "Traceroute"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-yellow-400/10 text-yellow-400 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-yellow-400/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};