"use client";

import { Workout } from "@/types/FitlogType";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface WorkoutContextType {
  addPlan: Workout[];
  setAddPlan: Dispatch<SetStateAction<Workout[]>>;
  savePlan: Workout[];
  setSavePlan: Dispatch<SetStateAction<Workout[]>>;
  doneIds: number[];
  setDoneIds: Dispatch<SetStateAction<number[]>>;
}


export const WorkoutContext = createContext<WorkoutContextType>({
  addPlan: [],
  setAddPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
  doneIds: [],
  setDoneIds: () => {},
});

const STORAGE_KEY = "fitlog";

const getLocalStorageData = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error("Failed to load FitLog data:", error);
    return null;
  }
};

export default function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [addPlan, setAddPlan] = useState<Workout[]>(() => getLocalStorageData()?.addPlan ?? []);
  const [savePlan, setSavePlan] = useState<Workout[]>(() => getLocalStorageData()?.savePlan ?? []);
  const [doneIds, setDoneIds] = useState<number[]>(() => getLocalStorageData()?.doneIds ?? []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ addPlan, savePlan, doneIds }));
  }, [addPlan, savePlan, doneIds]);

  return (
    <WorkoutContext.Provider value={{ addPlan, setAddPlan, savePlan, setSavePlan, doneIds, setDoneIds }}>
      {children}
    </WorkoutContext.Provider>
  );
}
