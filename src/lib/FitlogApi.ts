import { Workout } from "@/types/FitlogType";



// All workouts: throws on failure so the UI can show an error state
export const getFitlog = async (): Promise<Workout[]> => {
  try {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("getFitlog error:", error);
    throw new Error("Could not load workouts");
  }
};