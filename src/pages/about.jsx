import React from 'react';
import { Briefcase } from 'lucide-react';

export default function AboutExperience() {
  return (
   <div
  id="about"
  className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-6"
>
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-cyan-400 text-lg font-semibold mb-2">01. About & Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - About Me */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Passionate about building
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> innovative solutions</span>
            </h3>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Hi! I'm <span className="text-white font-semibold">Precious K Mutema</span>, a software engineer and mentor with a passion for creating secure, scalable systems that solve real-world problems. My journey in tech has focused on AI automation and building impactful digital solutions.
              </p>
              
              <p>
                I specialize in designing robust backend systems, implementing security best practices, and leveraging AI to streamline business processes. Whether it's architecting cloud solutions or developing intelligent automations, I'm driven by the challenge of turning complex problems into elegant solutions.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers in the tech community.
              </p>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div>
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/20 border border-slate-700 rounded-2xl p-8 mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                  1+
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Experience Items */}
            <div className="space-y-6">
              
              {/* Co-Founder */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold mb-1">Youth Coding Volunteer</h4>
                    <p className="text-cyan-400 text-sm">Uncommon.Org</p>
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                    Jan 2025 - Dec 2025
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Trained 500+ learners aged 10–16 in coding fundamentals.Delivered structured, hands-on lessons focused on logical thinking, problem-solving,
and creativity.
Adapted teaching methods to suit different learning levels and age groups.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Strategy</span>
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">AI</span>
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">Leadership</span>
                  ,<span className="text-xs bg-slate-700/50 px-2 py-1 rounded">communication</span>
                </div>
              </div>

              {/* Learning Journey */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold mb-1">Continuous Learning</h4>
                    <p className="text-cyan-400 text-sm">Self-Taught & Certifications</p>
                  </div>
                  <Briefcase className="text-cyan-400" size={20} />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Constantly expanding skills through hands-on projects, online courses, and staying current with emerging technologies in cloud and AI.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
