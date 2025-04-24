import { create } from "zustand";
import { TOTAL_ASPECT, TOTAL_STUDENT, ScoreState } from "@/types/scoring";

export const useScoringStore = create<ScoreState>((set) => ({
  result: Array.from({ length: TOTAL_STUDENT }, () =>
    Array.from({ length: TOTAL_ASPECT }, () => 1)
  ),
  setResult: (std, aspect, value) => {
    set((state) => {
      const updated = state.result.map((item) => [...item]);
      updated[std][aspect] = value;
      return { result: updated };
    });
  },
  resetResult: () =>
    set({
      result: Array.from({ length: TOTAL_STUDENT }, () =>
        Array.from({ length: TOTAL_ASPECT }, () => 1)
      ),
    }),
}));
