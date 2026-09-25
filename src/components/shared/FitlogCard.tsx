import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/types/FitlogType";


const FitlogCard = ({ workout }: { workout: Workout }) => {
  return (
    
    <Link
      href={`/${workout.id}`}
      className="group block rounded-2xl border border-[#292d33] bg-[#15181e] p-3 transition hover:-translate-y-1 hover:border-[#ccff00]/40"
    >
     
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0b0d0f]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

     
      <div className="px-3 pb-3 pt-6">
       
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-black"
            >
              {group}
            </span>
          ))}
        </div>

      
        <h3 className="mt-5 font-oswald text-2xl font-bold uppercase leading-tight text-white">
          {workout.name}
        </h3>

     
        <p className="mt-1 text-sm text-[#6b7280]">{workout.equipment}</p>

      
        <div className="my-5 h-px w-full bg-[#292d33]" />

       
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#9ca3af]">
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-2">
            <Flame size={16} />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-2">
            <Star size={16} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FitlogCard;