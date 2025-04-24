export const TOTAL_STUDENT = 10;
export const TOTAL_ASPECT = 4;
export type ScoreState = {
  result: number[][];
  setResult: (std: number, aspect: number, value: number) => void;
  resetResult: () => void;
};
