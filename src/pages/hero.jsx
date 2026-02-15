import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Home,
  Briefcase,
  Code,
  Layers,
} from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="hero-bg w-full h-screen text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 lg:px-20">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl hidden lg:block" />

      {/* LEFT FIXED SOCIALS (DESKTOP) */}
      <div className="hidden lg:flex flex-col gap-6 absolute left-10 top-1/2 -translate-y-1/2 z-20">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="icon-btn text-slate-400 hover:text-white cursor-pointer" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="icon-btn text-slate-400 hover:text-white cursor-pointer" />
        </a>
        <a href="mailto:preciouskmutema@gmail.com">
          <Mail className="icon-btn text-slate-400 hover:text-white cursor-pointer" />
        </a>
      </div>

      {/* CENTER CONTENT */}
      <div className="w-full flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left z-10">

        {/* MOBILE PROFILE IMAGE */}
        <div className="relative mb-6 lg:hidden">
          <div className="w-52 h-52 rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/hero.jpg"
              alt="Precious"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AVAILABILITY BADGE */}
        <div className="bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs px-4 py-1 rounded-full mb-6">
          ● Available for new projects
        </div>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Digital Future.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-10 max-w-xl">
          I am <span className="text-white font-semibold">Precious K Mutema</span>. A
          Software Engineer specializing in web applications, secure systems, and
          AI automation.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all">
            View Work
          </button>
          <button className="border border-white/20 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all">
            Contact Me
          </button>
        </div>

        {/* MOBILE SOCIALS */}
        <div className="flex gap-6 mt-8 lg:hidden">
          <Github className="icon-btn text-slate-400 hover:text-white cursor-pointer" />
          <Linkedin className="icon-btn text-slate-400 hover:text-white cursor-pointer" />
          <Mail className="icon-btn text-slate-400 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* RIGHT IMAGE (DESKTOP) */}
      <div className="hidden lg:flex lg:w-1/2 justify-end relative z-10">
        <div className="relative">
          <div className="w-80 h-80 rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/hero.jpg"
              alt="Precious"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING ICONS */}
          <div className="absolute -top-6 -right-6 bg-yellow-400 p-3 rounded-xl shadow-lg">
            <Layers className="w-6 h-6 text-slate-900" />
          </div>

          <div className="absolute bottom-8 -left-6 bg-slate-900/80 backdrop-blur border border-white/10 p-3 rounded-xl shadow-lg">
            <Code className="w-6 h-6 text-orange-400" />
          </div>
        </div>
      </div>

      {/* BOTTOM GLASS NAV */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
        <div className="bg-slate-900/30 backdrop-blur-xl border border-white/10 rounded-full px-10 py-3 flex justify-between items-center gap-6 shadow-2xl">
          <Home className="icon-btn text-slate-400 hover:text-white cursor-pointer" size={30} />
          <Briefcase className="icon-btn text-slate-400 hover:text-white cursor-pointer" size={30} />

          <div className="bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-full">
            PM
          </div>

          <Code className="icon-btn text-slate-400 hover:text-white cursor-pointer" size={30} />
          <Layers className="icon-btn text-slate-400 hover:text-white cursor-pointer" size={30} />
        </div>
      </nav>
    </section>
  );
}
