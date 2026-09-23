// types/workout.ts
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type MuscleGroup =
  | "Chest"
  | "Back"
  | "Arms"
  | "Shoulders"
  | "Legs"
  | "Core"
  | "Full Body";

export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: MuscleGroup[];
  equipment: string;
  difficulty: Difficulty;
  duration: number;        
  caloriesBurned: number;  
  sets: number;
  reps: string;            
  rating: number;
  description: string;
  instructions: string[];  
}