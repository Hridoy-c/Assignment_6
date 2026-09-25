"use client";

import Link from "next/link";
import { Dumbbell, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] bg-[#0b0d0f] text-white flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full flex flex-col items-center">
        
        <div className="relative mb-6 flex items-center justify-center h-24 w-24 rounded-full bg-[#121417] border border-neutral-800 shadow-[0_0_20px_rgba(204,255,0,0.1)]">
          <Dumbbell className="text-[#ccff00] h-12 w-12 transform -rotate-45 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ccff00]"></span>
          </span>
        </div>

        <h1 className="font-oswald text-7xl font-black tracking-tighter text-[#ccff00] uppercase sm:text-8xl">
          404
        </h1>
        <h2 className="font-oswald mt-4 text-xl font-bold uppercase tracking-wide text-neutral-100 sm:text-2xl">
          Route Out of Range
        </h2>
        
        <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
          The lift or page profile you are looking for doesn't exist or was moved out of the active set tracking logs. Let's get you back to the platform interface.
        </p>

        <div className="mt-8 w-full sm:w-auto">
          <Link 
            href="/" 
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#ccff00] text-black font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#b5e600] active:scale-95 transition-all shadow-lg shadow-[#ccff00]/10"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            Return to Workouts
          </Link>
        </div>
      </div>
    </section>
  );
}
