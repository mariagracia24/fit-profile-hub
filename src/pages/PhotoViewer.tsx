import { useNavigate, useParams } from "react-router-dom";
import { X, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PhotoViewer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const sharePhoto = () => {
    toast({ title: "Photo shared! 📸" });
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center justify-between z-10">
        <button onClick={() => navigate(-1)} className="text-white">
          <X size={28} />
        </button>
        <button onClick={sharePhoto} className="text-white">
          <Share2 size={24} />
        </button>
      </div>

      {/* Full-Screen Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/placeholder.svg"
          alt="Workout"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Bottom Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="px-3 py-1 bg-[#5D5FEC]/30 backdrop-blur-sm rounded-full text-sm text-white border border-[#5D5FEC]/50">
              🏃 Outdoor Run
            </span>
            <p className="text-[#A8A8A8] text-sm mt-2">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoViewer;
