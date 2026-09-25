"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/FitlogType";
import PlannedWorkoutCard from "@/components/myplanpage/PlannedWorkoutCard";
import { toast } from "react-toastify";

type SortKey = "duration" | "calories" | "rating";
type TabKey = "today" | "saved";

const MyPlanPage = () => {
  const { addPlan, setAddPlan, savePlan, setSavePlan, doneIds, setDoneIds } =
    useContext(WorkoutContext);
  const [sortBy, setSortBy] = useState<SortKey>("duration");
  const [activeTab, setActiveTab] = useState<TabKey>("today");

  const sortWorkouts = (workouts: Workout[]) => {
    const sorted = [...workouts];
    if (sortBy === "duration") sorted.sort((a, b) => a.duration - b.duration);
    else if (sortBy === "calories")
      sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    else if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  };

  const sortedPlan = sortWorkouts(addPlan);
  const sortedSaved = sortWorkouts(savePlan);

  const handleRemoveWorkout = (id: number, currentVariant: "plan" | "saved") => {
    if (currentVariant === "plan") {
      const workout = addPlan.find((w) => w.id === id);
      setAddPlan((prev) => prev.filter((w) => w.id !== id));
      if (workout) toast.error(`"${workout.name}" removed from today's plan.`);
    } else {
      const workout = savePlan.find((w) => w.id === id);
      setSavePlan((prev) => prev.filter((w) => w.id !== id));
      if (workout) toast.error(`"${workout.name}" removed from saved library.`);
    }
    setDoneIds((prev) => prev.filter((doneId) => doneId !== id));
  };

  const markDone = (id: number) => {
    if (doneIds.includes(id)) return;

    const workout = addPlan.find((w) => w.id === id) || savePlan.find((w) => w.id === id);
    if (workout) {
      toast.success(`Workout "${workout.name}" marked as done! 🔥`);
    }

    setDoneIds((prev) => [...prev, id]);
  };

  const currentWorkoutsList = activeTab === "today" ? addPlan : savePlan;

  const stats = [
    { label: "Exercises", value: currentWorkoutsList.length, accent: true },
    {
      label: "Minutes",
      value: currentWorkoutsList.reduce((sum: number, w: Workout) => sum + w.duration, 0),
      accent: false,
    },
    {
      label: "Calories",
      value: currentWorkoutsList.reduce((sum: number, w: Workout) => sum + w.caloriesBurned, 0),
      accent: false,
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b0d0f] text-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="text-center sm:text-left">
          <h1 className="font-oswald text-3xl font-bold uppercase tracking-wider text-neutral-100">My Plan</h1>
          <p className="mt-1 text-sm text-neutral-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 rounded-2xl bg-[#121417]/40 border border-neutral-800/60 p-2 sm:p-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-4 sm:px-8 sm:py-6 flex flex-col justify-center ${
                i > 0 ? "border-l border-neutral-800/80" : ""
              }`}
            >
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">{stat.label}</p>
              <p
                className={`mt-2 text-3xl font-black tracking-tight sm:text-4xl transition-all duration-3xl ${
                  stat.accent ? "text-[#ccff00]" : "text-white"
                }`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between border-b border-neutral-800/40 pb-4">
          <div className="flex gap-2 bg-[#121417] p-1 rounded-xl border border-neutral-800/40 w-fit">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "today"
                  ? "bg-[#1c1e22] text-white shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Today`s Plan ({addPlan.length})
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "saved"
                  ? "bg-[#1c1e22] text-white shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Saved ({savePlan.length})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-neutral-400">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="bg-[#121417] border border-neutral-800/60 rounded-xl px-3 py-2 text-sm text-neutral-200 outline-none focus:border-neutral-600 transition-colors cursor-pointer min-w-[120px]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          {activeTab === "today" ? (
            sortedPlan.length > 0 ? (
              <div className="space-y-4">
                {sortedPlan.map((workout: Workout) => (
                  <PlannedWorkoutCard
                    key={workout.id}
                    workout={workout}
                    variant="plan"
                    done={doneIds.includes(workout.id)}
                    onMarkDone={() => markDone(workout.id)}
                    onRemove={() => handleRemoveWorkout(workout.id, "plan")}
                  />
                ))}
              </div>
            ) : (
              <EmptyState />
            )
          ) : sortedSaved.length > 0 ? (
            <div className="space-y-4">
              {sortedSaved.map((workout: Workout) => (
                <PlannedWorkoutCard
                  key={workout.id}
                  workout={workout}
                  variant="saved"
                  done={doneIds.includes(workout.id)}
                  onMarkDone={() => markDone(workout.id)}
                  onRemove={() => handleRemoveWorkout(workout.id, "saved")}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </section>
  );
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-800 bg-[#121417]/20 px-6 py-20 text-center">
    <h3 className="font-oswald text-xl font-bold uppercase tracking-wide text-neutral-200">
      Nothing here yet
    </h3>
    <p className="mt-2 max-w-sm text-sm text-neutral-400">
      Browse the library and add a lift to get today moving.
    </p>
    <Link href="/" className="mt-6 inline-flex items-center justify-center bg-[#ccff00] text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-[#b5e600] transition-colors">
      Go to workouts
    </Link>
  </div>
);

export default MyPlanPage;