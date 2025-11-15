import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Target, TrendingUp, Flame, Dumbbell, Plus, Activity } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { mockHealthData } from "@/data/mockHealth";

const AIInsightModal = () => {
  const navigate = useNavigate();
  const [healthConnected, setHealthConnected] = useState(false);

  useEffect(() => {
    setHealthConnected(localStorage.getItem("healthConnected") === "true");
  }, []);

  const handleAddExercise = (exerciseName: string) => {
    toast({ 
      title: `Added ${exerciseName}`,
      description: "Exercise added to your new routine"
    });
  };

  const handleCreateRoutineFromRecommendations = () => {
    toast({ 
      title: "Creating AI routine...",
      description: "Pre-filled with recommended exercises for your goals"
    });
    
    // Pass exercises to CreateRoutine page
    navigate('/create-routine', {
      state: {
        aiGenerated: true,
        routineName: "AI Recommended Routine",
        exercises: recommendedExercises.map(ex => ({
          name: ex.name,
          sets: ex.sets.split('×')[0],
          reps: ex.sets.split('×')[1] || '12'
        }))
      }
    });
  };

  const recommendedExercises = [
    { name: "Push-ups", reason: "Build upper body strength", sets: "3×12", difficulty: "Beginner" },
    { name: "Squats", reason: "Strengthen legs & core", sets: "3×15", difficulty: "Beginner" },
    { name: "Plank Hold", reason: "Improve core stability", sets: "3×30s", difficulty: "Beginner" },
    { name: "Lunges", reason: "Balance & leg power", sets: "3×10 each", difficulty: "Intermediate" },
    { name: "Burpees", reason: "Full body cardio boost", sets: "3×8", difficulty: "Intermediate" },
  ];

  const fitnessGoals = [
    { goal: "Build Upper Body Strength", progress: 65, target: "Push Day 2×/week" },
    { goal: "Improve Cardio Endurance", progress: 40, target: "20min runs 3×/week" },
    { goal: "Increase Flexibility", progress: 30, target: "Stretch daily" },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-end justify-center z-50 animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[#111111] rounded-t-[28px] border-t-2 border-[#5D5FEC]/30 shadow-[0_0_40px_rgba(93,95,236,0.3)] max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-3">
          <h2 className="text-2xl font-bold text-white text-center">🔮 AI Workout Insight</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6">
          <div className="flex flex-col gap-6 pb-6">
          
            {/* Apple Health Connection Status */}
            {!healthConnected ? (
              <div className="bg-[#111111] p-4 rounded-2xl border border-[#1E1E1E] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="text-[#A8A8A8]" size={20} />
                    <p className="text-white text-sm">Apple Health not connected</p>
                  </div>
                </div>
                <Button
                  onClick={() => navigate('/health-connect')}
                  className="w-full bg-[#5D5FEC]/20 hover:bg-[#5D5FEC]/30 text-[#5D5FEC] border border-[#5D5FEC]/30 rounded-full h-10 text-sm font-medium"
                >
                  Connect Now
                </Button>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-[#10B981]/20 to-[#10B981]/10 p-4 rounded-2xl border border-[#10B981]/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="text-[#10B981]" size={20} />
                    <div>
                      <p className="text-white font-medium text-sm">Apple Health Connected ✓</p>
                      <p className="text-[#10B981] text-xs">Last synced: {mockHealthData.lastSynced}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          
            {/* Section 1: Most Consistent Category */}
          <div className="bg-[#1A1A1A] p-4 rounded-2xl border border-[#5D5FEC]/20 shadow-[0_0_20px_rgba(93,95,236,0.2)]">
            <p className="text-white text-center">
              Your most consistent category this month: <span className="font-bold">Strength 💪</span>
            </p>
          </div>

          {/* Section 2: Weekly Progress */}
          <div className="bg-[#1A1A1A] p-4 rounded-2xl">
            <p className="text-white text-sm mb-2">Weekly Goal Progress</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-[#000000] rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-[#5D5FEC] to-[#7A82FF] h-full w-3/4 rounded-full"></div>
              </div>
              <span className="text-white font-medium">3 / 4 🔥</span>
            </div>
          </div>

          {/* Section 3: AI Smart Nudge */}
          <div className="bg-gradient-to-br from-[#5D5FEC]/20 to-[#7A82FF]/10 p-4 rounded-2xl border border-[#5D5FEC]/30">
            <p className="text-white text-center">
              ✨ You're 1 workout away from hitting your weekly goal.
            </p>
          </div>

            {/* Section 4: Your Fitness Goals */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="text-[#5D5FEC]" size={20} />
                <h3 className="text-white font-semibold">Your Fitness Goals</h3>
              </div>
              <div className="space-y-3">
                {fitnessGoals.map((goal, idx) => (
                  <div key={idx} className="bg-[#1A1A1A] p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-medium text-sm">{goal.goal}</p>
                      <span className="text-[#5D5FEC] text-sm font-semibold">{goal.progress}%</span>
                    </div>
                    <div className="bg-[#000000] rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#5D5FEC] to-[#7A82FF] h-full rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-[#A8A8A8] text-xs flex items-center gap-1">
                      <TrendingUp size={12} />
                      Target: {goal.target}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Recommended Exercises */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Dumbbell className="text-[#5D5FEC]" size={20} />
                  <h3 className="text-white font-semibold">Recommended Exercises</h3>
                </div>
              </div>
              <p className="text-[#A8A8A8] text-sm">Based on your goals and current progress</p>
              
              {/* Big AI Create Routine Button */}
              <div className="bg-gradient-to-r from-[#5D5FEC] to-[#7A82FF] p-4 rounded-2xl space-y-3">
                <div className="text-center space-y-2">
                  <p className="text-white font-semibold">✨ Let AI Build Your Routine</p>
                  <p className="text-white/80 text-sm">Perfect for beginners! AI will create a complete workout plan based on your goals.</p>
                </div>
                <Button
                  onClick={handleCreateRoutineFromRecommendations}
                  className="w-full bg-white hover:bg-white/90 text-[#5D5FEC] rounded-full h-12 text-base font-semibold shadow-lg"
                >
                  🤖 Create My AI Routine
                </Button>
              </div>

              <div className="space-y-2">
                {recommendedExercises.map((exercise, idx) => (
                  <div key={idx} className="bg-[#1A1A1A] p-4 rounded-xl space-y-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-white font-medium">{exercise.name}</p>
                        <p className="text-[#A8A8A8] text-xs mt-1">{exercise.reason}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                          exercise.difficulty === 'Beginner' 
                            ? 'bg-[#10B981]/20 text-[#10B981]' 
                            : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                        }`}>
                          {exercise.difficulty}
                        </span>
                        <button
                          onClick={() => handleAddExercise(exercise.name)}
                          className="w-7 h-7 rounded-full bg-[#5D5FEC]/20 hover:bg-[#5D5FEC]/30 border border-[#5D5FEC]/30 flex items-center justify-center transition-colors"
                          aria-label="Add exercise"
                        >
                          <Plus size={14} className="text-[#5D5FEC]" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Flame size={14} className="text-[#5D5FEC]" />
                      <p className="text-[#5D5FEC] text-sm font-medium">{exercise.sets}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6: AI Tips */}
            <div className="bg-gradient-to-br from-[#5D5FEC]/10 to-transparent p-4 rounded-xl border border-[#5D5FEC]/20 space-y-2">
              <h3 className="text-white font-semibold text-sm">💡 Pro Tips</h3>
              <div className="space-y-2 text-[#A8A8A8] text-sm">
                <p>• Try a quick 15-min routine today to stay on track</p>
                <p>• Your Monday workouts show the best performance</p>
                <p>• Adding mobility work once a week will improve recovery</p>
                <p>• You're 1 workout away from beating your weekly goal!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="p-6 pt-3 border-t border-[#1E1E1E] bg-[#111111]">
          <Button 
            onClick={() => navigate(-1)}
            className="w-full bg-[#1A1A1A] hover:bg-[#1E1E1E] text-white border border-[#1E1E1E] rounded-full h-12 text-base font-medium"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIInsightModal;
