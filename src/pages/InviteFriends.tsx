import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, QrCode, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const InviteFriends = () => {
  const navigate = useNavigate();

  const shareInvite = () => {
    toast({ title: "Invite link copied! 🔗" });
  };

  const showQR = () => {
    toast({ title: "QR code generated! 📱" });
  };

  const shareContacts = () => {
    toast({ title: "Opening contacts..." });
  };

  const invitedFriends = [
    { name: "Alex M.", status: "Joined ✓", date: "2 days ago" },
    { name: "Jordan P.", status: "Pending", date: "1 week ago" },
    { name: "Sam K.", status: "Joined ✓", date: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-8">
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm z-10 p-4 flex items-center gap-3 border-b border-[#1E1E1E]">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Invite Friends</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Badge Progress */}
        <div className="bg-gradient-to-br from-[#5D5FEC]/20 to-[#7A82FF]/10 p-6 rounded-2xl border border-[#5D5FEC]/30 text-center space-y-3">
          <div className="text-5xl">🤝</div>
          <p className="text-white font-semibold text-lg">Team Player Badge</p>
          <p className="text-[#A8A8A8] text-sm">
            Earn this badge when 5 friends join SpotMe
          </p>
          <div className="bg-[#000000]/50 rounded-full h-2 overflow-hidden">
            <div className="bg-[#5D5FEC] h-full w-3/5 rounded-full"></div>
          </div>
          <p className="text-[#5D5FEC] text-sm font-medium">3 / 5 friends joined</p>
        </div>

        {/* Invite Buttons */}
        <div className="space-y-3">
          <Button
            onClick={shareInvite}
            className="w-full bg-[#5D5FEC] hover:bg-[#5D5FEC]/90 text-white rounded-full h-14 text-base font-medium shadow-[0_0_20px_rgba(93,95,236,0.3)]"
          >
            <Share2 className="mr-2" size={20} />
            Share Invite Link
          </Button>

          <Button
            onClick={showQR}
            className="w-full bg-[#111111] hover:bg-[#1A1A1A] text-white border border-[#1E1E1E] rounded-full h-14 text-base font-medium"
          >
            <QrCode className="mr-2" size={20} />
            Show QR Code
          </Button>

          <Button
            onClick={shareContacts}
            className="w-full bg-[#111111] hover:bg-[#1A1A1A] text-white border border-[#1E1E1E] rounded-full h-14 text-base font-medium"
          >
            <Users className="mr-2" size={20} />
            Share via Contacts
          </Button>
        </div>

        {/* Invited Friends List */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Friends Invited</h3>
          <div className="space-y-2">
            {invitedFriends.map((friend, idx) => (
              <div
                key={idx}
                className="bg-[#111111] p-4 rounded-xl flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-medium">{friend.name}</p>
                  <p className="text-[#A8A8A8] text-sm">{friend.date}</p>
                </div>
                <span
                  className={`text-sm ${
                    friend.status.includes("Joined")
                      ? "text-[#10B981]"
                      : "text-[#A8A8A8]"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
