import { Workout } from "@/types/FitlogType";

export const getFitlog = async (): Promise<Workout[]> => {
  try {
    const response = await fetch('https://api.api-store.workers.dev/api/fitlog', {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("getFitlog error:", error);
    throw new Error("Could not load workouts");
  }
};