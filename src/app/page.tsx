
import { Suspense } from "react";
import ScoringPage from "@/app/scoring/page";

export default function Home() {
  return (
    <Suspense fallback={<p className="text-center">Loading Scoring Page...</p>}>
      <ScoringPage />
    </Suspense>
  );
}