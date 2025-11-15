import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AIInsightModal = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-end justify-center z-50 animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[#111111] rounded-t-[28px] p-6 border-t-2 border-[#5D5FEC]/30 shadow-[0_0_40px_rgba(93,95,236,0.3)] animate-slide-in-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white text-center">🔮 AI Workout Insight</h2>
          
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

          {/* Section 4: AI Suggestions */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold">AI Suggestions</h3>
            <div className="space-y-2">
              <div className="bg-[#1A1A1A] p-3 rounded-xl text-[#A8A8A8] text-sm">
                • Try a quick 15-min routine today.
              </div>
              <div className="bg-[#1A1A1A] p-3 rounded-xl text-[#A8A8A8] text-sm">
                • Your Monday workouts are the strongest.
              </div>
              <div className="bg-[#1A1A1A] p-3 rounded-xl text-[#A8A8A8] text-sm">
                • AI suggests adding mobility once a week.
              </div>
            </div>
          </div>

          {/* Button */}
          <Button 
            onClick={() => navigate(-1)}
            className="w-full bg-[#5D5FEC] hover:bg-[#5D5FEC]/90 text-white rounded-full h-12 text-base font-medium shadow-[0_0_20px_rgba(93,95,236,0.3)]"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIInsightModal;
