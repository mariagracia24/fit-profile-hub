import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const RoutineDetail = () => {
  const navigate = useNavigate();

  const exercises = [
    { name: "Bench Press", sets: 3, reps: 10 },
    { name: "Incline Dumbbell Press", sets: 3, reps: 12 },
    { name: "Cable Flyes", sets: 3, reps: 15 },
    { name: "Overhead Press", sets: 3, reps: 8 },
    { name: "Lateral Raises", sets: 3, reps: 12 },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-8">
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 p-4 flex items-center gap-3 border-b border-[#1E1E1E]">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">🔥 Push Day</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Routine Info Card */}
        <div className="bg-[#111111] p-6 rounded-2xl space-y-3">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-[#1A1A1A] rounded-full text-sm text-white">Strength</span>
            <span className="px-3 py-1 bg-[#1A1A1A] rounded-full text-sm text-white">Upper Body</span>
          </div>
          <p className="text-[#A8A8A8] text-sm">Estimated time: 32 min</p>
          <p className="text-[#A8A8A8] text-sm">Last completed: 2 days ago</p>
        </div>

        {/* Exercises List */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Exercises</h2>
          <div className="bg-[#111111] rounded-2xl overflow-hidden divide-y divide-[#1E1E1E]">
            {exercises.map((exercise, idx) => (
              <div key={idx} className="p-4">
                <p className="text-white font-medium">{exercise.name}</p>
                <p className="text-[#A8A8A8] text-sm mt-1">
                  {exercise.sets} × {exercise.reps} reps
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/workout-session')}
            className="w-full bg-[#5D5FEC] hover:bg-[#5D5FEC]/90 text-white rounded-full h-12 text-base font-medium shadow-[0_0_20px_rgba(93,95,236,0.3)]"
          >
            Start Workout
          </Button>
          <Button 
            onClick={() => navigate('/create-routine')}
            className="w-full bg-[#111111] hover:bg-[#1A1A1A] text-white border border-[#1E1E1E] rounded-full h-12 text-base font-medium"
          >
            Edit Routine
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoutineDetail;
