import React from "react";
import { Github, Linkedin, Mail, Home, Briefcase, Code, Layers } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section
      className="
        w-full h-screen
        bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900
        text-white relative overflow-hidden
        flex flex-col
        lg:flex-row lg:items-center lg:justify-between
        px-6 lg:px-20
      "
    >
      {/* Background Glows */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl hidden lg:block"></div>

      {/* LEFT SIDE (Socials - Desktop Only) */}
      <div className="hidden lg:flex flex-col gap-6 absolute left-10">
        <Github className="text-slate-400 hover:text-white transition cursor-pointer" />
        <Linkedin className="text-slate-400 hover:text-white transition cursor-pointer" />
        <Mail className="text-slate-400 hover:text-white transition cursor-pointer" />
      </div>

      {/* CENTER CONTENT */}
      <div className="w-full flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left z-10">
        {/* Profile Image (Mobile First) */}
        <div className="relative mb-6 lg:hidden">
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
            <img
              src="/api/placeholder/320/320"
              alt="Precious"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs px-4 py-1 rounded-full mb-6">
          ● Available for new projects
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Digital Future.
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-10 max-w-xl">
          I am <span className="text-white font-semibold">Precious K Mutema</span>. A Software Engineer  specializing in web application, secure systems, and AI automation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all">
            View Work
          </button>
          <button className="border border-slate-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all">
            Contact Me
          </button>
        </div>

        {/* Social Icons (Mobile Only) */}
        <div className="flex gap-6 mt-8 lg:hidden">
          <Github className="text-slate-400 hover:text-white transition cursor-pointer" />
          <Linkedin className="text-slate-400 hover:text-white transition cursor-pointer" />
          <Mail className="text-slate-400 hover:text-white transition cursor-pointer" />
        </div>
      </div>

      {/* RIGHT SIDE IMAGE (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 justify-end relative z-10">
        <div className="relative">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
            <img
              src="/hero.jpg"
              alt="Precious"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-6 -right-6 bg-yellow-400 p-3 rounded-lg shadow-lg">
            <Layers className="w-6 h-6 text-slate-900" />
          </div>

          <div className="absolute bottom-8 -left-6 bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-700">
            <Code className="w-6 h-6 text-orange-400" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md lg:w-auto z-50">
        <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-full px-6 py-3 flex justify-between items-center gap-6 shadow-2xl">
          <Home className="text-slate-400 hover:text-white transition cursor-pointer" size={20} />
          <Briefcase className="text-slate-400 hover:text-white transition cursor-pointer" size={20} />

          <div className="bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-full">
            PM
          </div>

          <Code className="text-slate-400 hover:text-white transition cursor-pointer" size={20} />
          <Layers className="text-slate-400 hover:text-white transition cursor-pointer" size={20} />
        </div>
      </nav>
    </section>
  );
}
