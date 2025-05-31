import { RevealOnScroll } from "../RevealOnScroll";
import React from 'react';
export const About = () => {
  const networkSecuritySkills = [
    "Scapy",
    "DevSecOps",
    "Encryption",
    "Firewalls",
    "IDS/IPS",

  ];

  const cloudComputingSkills = ["AWS", "Azure", "GCP", "Docker", "Kubernetes"];

  const generativeAI = ["Agentic Workflow", "LLMs", "RAG", "Prompt Engineering", "Music Generation"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in Network Security and Cloud Computing along with the latest advancements in Generative AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Network Security</h3>
                <div className="flex flex-wrap gap-2">
                  {networkSecuritySkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-400/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20 
                                    hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Cloud Computing </h3>
                <div className="flex flex-wrap gap-2">
                  {cloudComputingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-400/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20 
                                    hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Generative AI </h3>
                <div className="flex flex-wrap gap-2">
                  {generativeAI.map((tech, key) => (
                    <span key={key} className="bg-yellow-400/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20 
                                    hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)] transition
                    ">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science </strong> - PES University
                  (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing, Network Security, Operating Systems, DBMS..
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Teaching Assistant at CIE PES University (2024 - Present){" "}
                  </h4>
                  <p>
                    Developed Coursework for the students of PES University for the entire 3rd and 4th semester batch teaching them about the basics of Entrepreneurship.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Co-Founder at Aalap.ai (2019){" "}
                  </h4>
                  <p>
                    Founding member of Aalap.ai, a startup that is building a platform to generate music for advertisements using AI and hyperpersonalisation of music for each demograph.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};