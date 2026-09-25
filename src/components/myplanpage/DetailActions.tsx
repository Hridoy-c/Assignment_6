"use client";

import { useContext } from "react";
import { CalendarPlus, Bookmark } from "lucide-react";
import { WorkoutContext } from "@/context/WorkoutContext";
import type { Workout } from "@/types/FitlogType";
import { toast } from "react-toastify";

const DetailActions = ({ workout }: { workout: Workout }) => {
  const { addPlan, setAddPlan, savePlan, setSavePlan } = useContext(WorkoutContext);

  const inPlan = addPlan.some((w) => w.id === workout.id);
  const isSaved = savePlan.some((w) => w.id === workout.id);
  const planFull = addPlan.length >= 5 && !inPlan;

  const handleAddToPlan = () => {
    if (inPlan || planFull) return;
    setAddPlan((prev) => [...prev, workout]);
    toast.success(`"${workout.name}" added to today's plan! 🚀`);
  };

  const handleSave = () => {
    if (isSaved) return;
    setSavePlan((prev) => [...prev, workout]);
    toast.info(`"${workout.name}" saved for later! 📌`);
  };

  return (
    <div className="mt-8 flex flex-wrap gap-3">

      <button
        onClick={handleAddToPlan}
        disabled={planFull || inPlan}
        className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all border
          ${
            inPlan
              ? "bg-[#1c1e22] border-neutral-800 text-neutral-400 cursor-default"
              : planFull
              ? "bg-neutral-900 border-neutral-800 text-neutral-600 cursor-not-allowed opacity-50"
              : "bg-[#ccff00] border-[#ccff00] text-black hover:bg-[#b5e600] hover:border-[#b5e600] active:scale-98 shadow-md"
          }`}
      >
        <CalendarPlus size={18} strokeWidth={2.5} />
        {inPlan ? "In today's plan" : planFull ? "Plan is full (max 5)" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        disabled={isSaved}
        className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl transition-all border
          ${
            isSaved
              ? "bg-[#1c1e22] border-neutral-800 text-[#ccff00] font-bold cursor-default"
              : "bg-[#121417] border-neutral-800/80 text-neutral-200 hover:bg-[#1c1e22] hover:border-neutral-700 active:scale-98"
          }`}
      >
        <Bookmark 
          size={18} 
          className={isSaved ? "fill-[#ccff00] text-[#ccff00]" : "text-neutral-400"} 
        />
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default DetailActions;
