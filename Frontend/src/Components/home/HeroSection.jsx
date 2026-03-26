import React from 'react';

export default function HeroSection({ setPage }) {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-[#111827] to-[#0d1421] border border-[#4f8ef7]/15 rounded-2xl p-10 sm:p-14 lg:p-20 text-center mb-8">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3b5fc0]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#7c4ddb]/8 rounded-full blur-3xl" />

      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
          Automated Resume Screening System
        </h2>
        <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10">
          Upload your resume and let our AI-powered system analyze your qualifications
          and match you with the best opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setPage?.('login')}
            className="px-8 py-3.5 border-2 border-[#4f8ef7]/50 text-white rounded-xl hover:border-[#4f8ef7] hover:bg-[#4f8ef7]/10"
          >
            Upload Resume
          </button>

          <button
            onClick={() => setPage?.('register')}
            className="px-8 py-3.5 bg-linaer-to-r from-[#3b5fc0] to-[#7c4ddb] text-white rounded-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}