import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { Workout } from "@/types/FitlogType";

interface PlannedWorkoutCardProps {
  workout: Workout;
  variant: "plan" | "saved";
  done?: boolean;
  onMarkDone?: () => void;
  onRemove: () => void;
}

const PlannedWorkoutCard = ({
  workout,
  variant,
  done = false,
  onMarkDone,
  onRemove,
}: PlannedWorkoutCardProps) => {
  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-[#121417]/40 p-4 transition-colors hover:border-neutral-700/80 sm:flex-row sm:items-center">
      
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
          <Image src={workout.image} alt={workout.name} fill className="object-cover" />
        </div>

        <div className="min-w-0 flex-1 pr-6 sm:pr-0">
          <h4 className="font-oswald truncate text-base font-bold uppercase tracking-wider text-neutral-100">
            {workout.name}
          </h4>
          <p className="truncate text-sm text-neutral-400 mt-0.5">{workout.equipment}</p>
          
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-400">
            <span className="flex items-center gap-1 shrink-0">
              <Clock size={14} /> {workout.duration} min
            </span>
            <span className="flex items-center gap-1 shrink-0">
              <Flame size={14} /> {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1 shrink-0">
              <Star size={14} className="fill-[#ccff00] text-[#ccff00]" /> {workout.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 w-full pt-3 border-t border-neutral-800/40 sm:w-auto sm:pt-0 sm:border-t-0 sm:justify-end shrink-0">
        <Link 
          href={`/${workout.id}`} 
          className="flex-1 text-center sm:flex-none inline-flex items-center justify-center rounded-full border border-neutral-700/80 bg-[#121417] px-4 py-2 text-xs font-semibold text-neutral-300 hover:bg-[#1c1e22] hover:text-white transition-all shadow-sm whitespace-nowrap"
        >
          View Details
        </Link>

        {variant === "plan" && (
          <button
            onClick={onMarkDone}
            disabled={done}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all border shadow-sm whitespace-nowrap
              ${
                done
                  ? "bg-neutral-800/80 border-neutral-700/50 text-neutral-500 cursor-default"
                  : "bg-[#ccff00] border-[#ccff00] text-black hover:bg-[#b5e600] hover:border-[#b5e600] active:scale-95"
              }`}
          >
            <Check size={14} strokeWidth={3} />
            {done ? "Done" : "Mark as Done"}
          </button>
        )}
      </div>

      <div className="absolute top-3 right-3 sm:static sm:top-auto sm:right-auto sm:ml-1">
        <button
          onClick={onRemove}
          aria-label="Remove"
          className="p-1.5 text-neutral-500 hover:text-red-400 rounded-full hover:bg-neutral-800/40 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default PlannedWorkoutCard;
