import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const HealthSyncModal = () => {
  const navigate = useNavigate();

  const connectHealth = () => {
    toast({ title: "Connecting to Apple Health..." });
    setTimeout(() => {
      toast({ title: "Apple Health connected! ✅" });
      navigate(-1);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#111111] rounded-3xl p-6 border border-[#1E1E1E] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          {/* Icon */}
          <div className="text-center text-6xl">
            🍎
          </div>

          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Connect Apple Health</h2>
          </div>

          {/* Description */}
          <div className="bg-[#1A1A1A] p-4 rounded-xl">
            <p className="text-[#A8A8A8] text-sm leading-relaxed">
              SpotMe uses Apple Health to improve your AI recommendations. 
              We never store sensitive biometrics, only workout type, steps, and duration.
            </p>
          </div>

          {/* What We Access */}
          <div className="space-y-2">
            <p className="text-white font-semibold text-sm">What we access:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#A8A8A8]">
                <span className="text-[#10B981]">✓</span>
                <span>Workout types & duration</span>
              </div>
              <div className="flex items-center gap-2 text-[#A8A8A8]">
                <span className="text-[#10B981]">✓</span>
                <span>Daily step count</span>
              </div>
              <div className="flex items-center gap-2 text-[#A8A8A8]">
                <span className="text-[#10B981]">✓</span>
                <span>Active energy burned</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-2">
            <Button
              onClick={connectHealth}
              className="w-full bg-[#5D5FEC] hover:bg-[#5D5FEC]/90 text-white rounded-full h-12 text-base font-medium shadow-[0_0_20px_rgba(93,95,236,0.3)]"
            >
              Connect Apple Health
            </Button>
            <Button
              onClick={() => navigate(-1)}
              className="w-full bg-transparent hover:bg-[#1A1A1A] text-[#A8A8A8] rounded-full h-12 text-base font-medium"
            >
              Not Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSyncModal;
