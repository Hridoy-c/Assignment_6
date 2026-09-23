import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="bg-[#0b0d0f] w-[94vw] m-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className=" w-full  ">
        <div className="relative overflow-hidden rounded-2xl border border-[#292d33] bg-[#15181e]">
          <div className="grid min-h-[440px] grid-cols-1 items-center lg:grid-cols-2">
       
            <div className="px-6 pt-10 text-center sm:px-10 md:px-14 lg:py-16 lg:text-left">
    
              <p className="mb-5 text-xs font-bold tracking-[0.12em] text-[#ccff00] sm:text-sm">
                WORKOUT LIBRARY
              </p>

            
              <h1 className="mx-auto max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:mx-0 lg:text-[64px]">
                Train With Intent. Log Every Set.
              </h1>

             
              <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-[#9ca3af] sm:text-base lg:mx-0">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

             
              <div className="mt-7 flex justify-center lg:justify-start">
                <Link
                  href="#library"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ccff00] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-[#b9eb00] active:scale-95"
                >
                  Browse Workouts
                  <ArrowDown size={16} strokeWidth={3} />
                </Link>
              </div>
            </div>

        
            <div className="relative flex min-h-[260px] items-center justify-center px-6 py-10 lg:min-h-[440px] lg:py-0">
           
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/5 blur-3xl" />

              <Image
                src={banner}
                alt="Workout illustration"
                width={500}
                height={500}
                priority
                className="relative z-10 h-auto w-[220px] object-contain sm:w-[280px] md:w-[320px] lg:w-[390px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;