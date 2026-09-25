"use client";

import dynamic from "next/dynamic";
import React from "react";

const WorkoutProviderInner = dynamic(
  () => import("@/context/WorkoutContext"),
  { ssr: false }
);

export default function ClientWorkoutProvider({ children }: { children: React.ReactNode }) {
  return <WorkoutProviderInner>{children}</WorkoutProviderInner>;
}