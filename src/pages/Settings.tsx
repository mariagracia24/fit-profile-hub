import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const [blurFace, setBlurFace] = useState(false);
  const [hideLocation, setHideLocation] = useState(false);
  const [privateGallery, setPrivateGallery] = useState(false);
  const [gymReminders, setGymReminders] = useState(true);
  const [aiNudges, setAiNudges] = useState(true);
  const [postAlerts, setPostAlerts] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white pb-8">
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 p-4 flex items-center gap-3 border-b border-[#1E1E1E]">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      <div className="divide-y divide-[#1E1E1E]">
        {/* Account Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-white font-semibold text-lg">Account</h2>
          <button className="w-full flex items-center justify-between p-4 bg-[#111111] rounded-xl hover:bg-[#1A1A1A]">
            <span className="text-white">Edit Profile</span>
            <ChevronRight size={20} className="text-[#A8A8A8]" />
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-[#111111] rounded-xl hover:bg-[#1A1A1A]">
            <span className="text-white">Change Weekly Goal</span>
            <ChevronRight size={20} className="text-[#A8A8A8]" />
          </button>
        </div>

        {/* Privacy Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-white font-semibold text-lg">Privacy</h2>
          
          <div className="flex items-center justify-between p-4 bg-[#111111] rounded-xl">
            <div>
              <p className="text-white">Blur My Face Automatically</p>
              <p className="text-[#A8A8A8] text-sm mt-1">AI will blur faces in photos</p>
            </div>
            <Switch checked={blurFace} onCheckedChange={setBlurFace} />
          </div>

          <div className="flex items-center justify-between p-4 bg-[#111111] rounded-xl">
            <div>
              <p className="text-white">Hide Location on Posts</p>
              <p className="text-[#A8A8A8] text-sm mt-1">Don't show gym location</p>
            </div>
            <Switch checked={hideLocation} onCheckedChange={setHideLocation} />
          </div>

          <div className="flex items-center justify-between p-4 bg-[#111111] rounded-xl">
            <div>
              <p className="text-white">Keep Gallery Private</p>
              <p className="text-[#A8A8A8] text-sm mt-1">Only you can see your posts</p>
            </div>
            <Switch checked={privateGallery} onCheckedChange={setPrivateGallery} />
          </div>
        </div>

        {/* Health Sync Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-white font-semibold text-lg">Health Sync</h2>
          <button 
            onClick={() => navigate('/health-sync-modal')}
            className="w-full flex items-center justify-between p-4 bg-[#111111] rounded-xl hover:bg-[#1A1A1A]"
          >
            <div>
              <p className="text-white">Apple Health Connect</p>
              <p className="text-[#A8A8A8] text-sm mt-1">Not connected</p>
            </div>
            <ChevronRight size={20} className="text-[#A8A8A8]" />
          </button>
        </div>

        {/* Notifications Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-white font-semibold text-lg">Notifications</h2>
          
          <div className="flex items-center justify-between p-4 bg-[#111111] rounded-xl">
            <span className="text-white">Gym-day Reminders</span>
            <Switch checked={gymReminders} onCheckedChange={setGymReminders} />
          </div>

          <div className="flex items-center justify-between p-4 bg-[#111111] rounded-xl">
            <span className="text-white">AI Nudges</span>
            <Switch checked={aiNudges} onCheckedChange={setAiNudges} />
          </div>

          <div className="flex items-center justify-between p-4 bg-[#111111] rounded-xl">
            <span className="text-white">Post Window Alerts</span>
            <Switch checked={postAlerts} onCheckedChange={setPostAlerts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
