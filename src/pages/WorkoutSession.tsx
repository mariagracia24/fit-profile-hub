import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WorkoutSession = () => {
  const navigate = useNavigate();
  const [currentSet, setCurrentSet] = useState(1);
  const [completedSets, setCompletedSets] = useState<number[]>([]);
  const [timer, setTimer] = useState("00:12:34");

  const exercises = [
    { name: "Bench Press", sets: 3, reps: 10 },
    { name: "Incline Dumbbell Press", sets: 3, reps: 12 },
    { name: "Cable Flyes", sets: 3, reps: 15 },
  ];

  const currentExercise = exercises[0];

  const markSetComplete = () => {
    setCompletedSets([...completedSets, currentSet]);
    if (currentSet < currentExercise.sets) {
      setCurrentSet(currentSet + 1);
      toast({ title: `Set ${currentSet} completed! 💪` });
    }
  };

  const finishWorkout = () => {
    navigate("/workout-complete");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 p-4 flex items-center justify-between border-b border-[#1E1E1E]">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Workout Session</h1>
        <div className="w-6"></div>
      </div>

      <div className="p-6 space-y-6">
        {/* Timer */}
        <div className="bg-gradient-to-br from-[#5D5FEC]/20 to-[#7A82FF]/10 p-8 rounded-2xl border border-[#5D5FEC]/30 text-center">
          <p className="text-5xl font-bold text-white font-mono">{timer}</p>
        </div>

        {/* Current Exercise */}
        <div className="bg-[#111111] p-6 rounded-2xl space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{currentExercise.name}</h2>
            <p className="text-[#A8A8A8] mt-1">
              {currentExercise.sets} sets × {currentExercise.reps} reps
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] p-4 rounded-xl">
            <p className="text-white text-center text-lg">
              Set <span className="font-bold text-[#5D5FEC]">{currentSet}</span> of {currentExercise.sets}
            </p>
          </div>

          <Button
            onClick={markSetComplete}
            disabled={completedSets.includes(currentSet)}
            className="w-full bg-[#5D5FEC] hover:bg-[#5D5FEC]/90 text-white rounded-full h-14 text-base font-medium shadow-[0_0_20px_rgba(93,95,236,0.3)] disabled:opacity-50"
          >
            {completedSets.includes(currentSet) ? (
              <>
                <Check className="mr-2" /> Set Complete
              </>
            ) : (
              "Mark Set Complete"
            )}
          </Button>
        </div>

        {/* Exercise Progress */}
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Progress</h3>
          <div className="flex gap-2">
            {Array.from({ length: currentExercise.sets }).map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 h-2 rounded-full ${
                  completedSets.includes(idx + 1)
                    ? "bg-[#10B981]"
                    : idx + 1 === currentSet
                    ? "bg-[#5D5FEC]"
                    : "bg-[#1E1E1E]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* AI Tip */}
        <div className="bg-gradient-to-br from-[#5D5FEC]/10 to-transparent p-4 rounded-xl border border-[#5D5FEC]/20">
          <p className="text-[#A8A8A8] text-sm">
            <span className="text-white font-semibold">✨ Form Tip:</span> Keep elbows at 45º (AI-detected)
          </p>
        </div>

        {/* Finish Button */}
        <Button
          onClick={finishWorkout}
          className="w-full bg-[#111111] hover:bg-[#1A1A1A] text-white border border-[#1E1E1E] rounded-full h-12 text-base font-medium"
        >
          Finish Workout
        </Button>
      </div>
    </div>
  );
};

export default WorkoutSession;
