import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Loader2 } from "lucide-react";
import { mockHealthData } from "@/data/mockHealth";

const HealthConnect = () => {
  const navigate = useNavigate();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(
    localStorage.getItem("healthConnected") === "true"
  );

  const handleConnect = () => {
    setIsConnecting(true);
    
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      localStorage.setItem("healthConnected", "true");
      
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 p-4 flex items-center gap-3 border-b border-[#1E1E1E]">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Apple Health Integration</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Description */}
        <div className="text-center space-y-2">
          <p className="text-[#A8A8A8] text-sm leading-relaxed">
            SpotMe uses Apple Health to personalize your AI insights.
            Only basic metrics are synced: sleep, steps, and heart rate.
          </p>
        </div>

        {/* Metrics Preview Card */}
        <div className="bg-[#111111] rounded-3xl p-6 space-y-4 border border-[#1E1E1E]">
          <h3 className="text-white font-semibold text-sm">Synced Metrics</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛌</span>
                <span className="text-white">Sleep</span>
              </div>
              <span className="text-[#A8A8A8] text-sm">{mockHealthData.sleepHours} hours last night</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👟</span>
                <span className="text-white">Steps</span>
              </div>
              <span className="text-[#A8A8A8] text-sm">{mockHealthData.stepsToday.toLocaleString()} today</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">❤️</span>
                <span className="text-white">Resting HR</span>
              </div>
              <span className="text-[#A8A8A8] text-sm">{mockHealthData.restingHR} bpm</span>
            </div>
          </div>

          <p className="text-[#A8A8A8] text-xs pt-2 border-t border-[#1E1E1E]">
            These metrics improve AI recommendations
          </p>
        </div>

        {/* Connect Button */}
        <div className="pt-4">
          {!isConnected ? (
            <Button
              onClick={handleConnect}
              disabled={isConnecting}
              className="w-full bg-gradient-to-r from-[#5D5FEC] to-[#7A82FF] hover:from-[#5D5FEC]/90 hover:to-[#7A82FF]/90 text-white rounded-full h-14 text-base font-semibold shadow-[0_0_30px_rgba(93,95,236,0.4)]"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect Apple Health"
              )}
            </Button>
          ) : (
            <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-full h-14 flex items-center justify-center gap-2">
              <Check className="text-[#10B981]" size={24} />
              <span className="text-[#10B981] font-semibold">Connected ✓</span>
            </div>
          )}
        </div>

        {/* Privacy Note */}
        <div className="bg-[#111111]/50 rounded-2xl p-4 border border-[#1E1E1E]">
          <p className="text-[#A8A8A8] text-xs leading-relaxed">
            🔒 Your health data is only used to generate personalized workout insights. 
            We never share this data with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthConnect;
