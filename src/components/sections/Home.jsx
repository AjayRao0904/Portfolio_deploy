import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col items-center">
          {/* Profile Picture - replace /media/photos/profile.jpg with your own image */}
          <img src="/media/photos/profile.jpg" alt="Ajay Rao" className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent leading-right">
            Hi, I'm Ajay Rao 
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a Co-Founder of Aalap.ai and, where I hold a patent for groundbreaking tech to generate music using AI. Entrepreneurship drives me, but learning is what I value above all. I thrive on building bold ideas, pushing creative boundaries, and turning vision into reality—one innovation, one lesson, and one leap at a time.

          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-yellow-400 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-400/50 text-yellow-400 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:bg-yellow-400/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};