import profilePhoto from "@/assets/profile-photo.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mockData = {
  name: "Maria Gracia M",
  badge: "🏆 Weekly Winner",
  streak: 7,
  goal: 4,
  topWorkouts: ["Outdoor Run", "Strength", "Pilates", "Functional", "Cycling"],
  leaderboardRank: 2,
  workouts: 14,
  followers: 32,
  following: 51,
  galleryPhotos: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
  routines: [],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-5 py-7">
        {/* Profile Photo with Electric Glow */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent-blue/20 blur-xl"></div>
            <img
              src={profilePhoto}
              alt={mockData.name}
              className="relative w-[120px] h-[120px] rounded-full border-2 border-accent-blue object-cover"
              style={{ boxShadow: "0 0 20px rgba(122, 130, 255, 0.35)" }}
            />
          </div>
        </div>

        {/* Single Badge */}
        <div className="flex justify-center mb-4">
          <div
            className="bg-dark-card rounded-[20px] px-4 py-1.5 border border-dark-border"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            <span className="text-sm font-medium text-text-primary">{mockData.badge}</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-center text-[28px] font-bold text-text-primary mb-5">
          {mockData.name}
        </h1>

        {/* Streak + Goal Pills */}
        <div className="flex justify-center gap-4 mb-5">
          <div
            className="bg-dark-card rounded-[26px] px-5 py-3 border border-dark-border flex items-center gap-2 animate-pulse-glow"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <span className="text-lg">🔥</span>
            <span className="font-semibold text-sm text-text-primary">
              Streak: {mockData.streak} days
            </span>
          </div>
          <div
            className="bg-dark-card rounded-[26px] px-5 py-3 border border-dark-border flex items-center gap-2"
            style={{ boxShadow: "var(--shadow-subtle)" }}
          >
            <span className="text-lg">🎯</span>
            <span className="font-semibold text-sm text-text-primary">
              Goal: {mockData.goal}×/week
            </span>
          </div>
        </div>

        {/* Workout Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {mockData.topWorkouts.map((workout, index) => {
            const emojiMap: Record<string, string> = {
              "Outdoor Run": "🏃",
              "Strength": "💪",
              "Pilates": "🧘",
              "Functional": "🧗",
              "Cycling": "🚴",
            };
            return (
              <div
                key={index}
                className="bg-dark-card rounded-[20px] px-4 py-2 border border-dark-border flex items-center gap-2"
                style={{ boxShadow: "var(--shadow-subtle)" }}
              >
                <span className="text-base">{emojiMap[workout]}</span>
                <span className="text-sm font-medium text-text-primary">
                  {workout}
                </span>
              </div>
            );
          })}
        </div>

        {/* Leaderboard Preview */}
        <div className="text-center mb-6">
          <div className="text-base font-bold text-text-primary mb-1">
            #{mockData.leaderboardRank} Among Friends
          </div>
          <button className="text-sm text-accent-blue hover:text-accent-glow transition-colors">
            View Leaderboard →
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <div className="text-xl font-bold text-text-primary">
              {mockData.workouts}
            </div>
            <div className="text-sm text-text-secondary">Workouts</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-text-primary">
              {mockData.followers}
            </div>
            <div className="text-sm text-text-secondary">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-text-primary">
              {mockData.following}
            </div>
            <div className="text-sm text-text-secondary">Following</div>
          </div>
        </div>

        {/* Share Profile Button */}
        <div className="flex justify-center mb-6">
          <Button
            className="w-[60%] h-12 rounded-[28px] font-medium bg-dark-card border border-dark-border text-text-primary hover:bg-dark-card/80"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Share Profile
          </Button>
        </div>

        {/* My Workouts Card */}
        <Card 
          className="mb-7 p-5 bg-dark-card border-dark-border rounded-[26px] cursor-pointer hover:bg-dark-card/80 transition-colors"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-text-primary mb-1">📝 My Workouts</h3>
              <p className="text-sm text-text-secondary">Your routines, notes & tracked exercises</p>
            </div>
            <span className="text-text-primary text-xl">→</span>
          </div>
        </Card>

        {/* Progress Gallery */}
        <div className="grid grid-cols-3 gap-2.5">
          {mockData.galleryPhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square rounded-[16px] overflow-hidden relative"
              style={{ boxShadow: "var(--shadow-dark)" }}
            >
              <img
                src={photo}
                alt={`Workout ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full border border-white/10">
                {index < 2 ? `${index + 1}m` : `${index - 1}d`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
