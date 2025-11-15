import profilePhoto from "@/assets/profile-photo.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Button } from "@/components/ui/button";

const mockData = {
  name: "Maria Gracia M",
  goalPerWeek: 4,
  streak: 7,
  topWorkouts: ["Outdoor Run", "Strength", "Pilates", "Functional", "Cycling", "Glutes"],
  workouts: 14,
  followers: 32,
  following: 51,
  galleryPhotos: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-5 py-7">
        {/* Profile Photo */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img
              src={profilePhoto}
              alt={mockData.name}
              className="w-[105px] h-[105px] rounded-full border-2 border-border object-cover"
              style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.07)" }}
            />
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
              <span className="text-xl">🔥</span>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-center text-[28px] font-bold text-[hsl(var(--text-primary))] mb-4">
          {mockData.name}
        </h1>

        {/* Goal + Streak Pills */}
        <div className="flex justify-center gap-3 mb-5">
          <div
            className="bg-[hsl(var(--soft-grey))] rounded-[22px] px-4 py-2.5 border border-[hsl(var(--border-light))] flex items-center gap-2"
            style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}
          >
            <span className="text-lg">🎯</span>
            <span className="font-semibold text-sm text-[hsl(var(--text-secondary))]">
              {mockData.goalPerWeek} days/week
            </span>
          </div>
          <div
            className="bg-[hsl(var(--soft-grey))] rounded-[22px] px-4 py-2.5 border border-[hsl(var(--border-light))] flex items-center gap-2"
            style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}
          >
            <span className="text-lg">🔥</span>
            <span className="font-semibold text-sm text-[hsl(var(--text-secondary))]">
              {mockData.streak}-day streak
            </span>
          </div>
        </div>

        {/* Workout Identity Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {mockData.topWorkouts.map((workout, index) => {
            const emojiMap: Record<string, string> = {
              "Outdoor Run": "🏃",
              "Strength": "💪",
              "Pilates": "🧘",
              "Functional": "🧗",
              "Cycling": "🚴",
              "Glutes": "🏋️",
            };
            return (
              <div
                key={index}
                className="bg-[hsl(var(--soft-grey))] rounded-[20px] px-4 py-2 border border-[hsl(var(--border-light))] flex items-center gap-2"
                style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}
              >
                <span className="text-base">{emojiMap[workout]}</span>
                <span className="text-sm font-medium text-[hsl(var(--text-secondary))]">
                  {workout}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center gap-8 mb-5">
          <div className="text-center">
            <div className="text-xl font-bold text-[hsl(var(--text-secondary))]">
              {mockData.workouts}
            </div>
            <div className="text-sm text-[hsl(var(--text-muted))]">Workouts</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[hsl(var(--text-secondary))]">
              {mockData.followers}
            </div>
            <div className="text-sm text-[hsl(var(--text-muted))]">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[hsl(var(--text-secondary))]">
              {mockData.following}
            </div>
            <div className="text-sm text-[hsl(var(--text-muted))]">Following</div>
          </div>
        </div>

        {/* AI Insight (optional) */}
        <p className="text-center text-sm text-[hsl(var(--text-muted))] mb-5">
          AI Insight: Your most frequent workout this month is 💪 Strength.
        </p>

        {/* Share Profile Button */}
        <div className="flex justify-center mb-6">
          <Button
            variant="outline"
            className="w-[60%] h-11 rounded-[18px] font-medium border-[hsl(var(--border-light))] bg-background hover:bg-[hsl(var(--soft-grey))] text-[hsl(var(--text-secondary))]"
            style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}
          >
            Share Profile
          </Button>
        </div>

        {/* Progress Gallery */}
        <div className="grid grid-cols-3 gap-1.5">
          {mockData.galleryPhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square rounded-[14px] overflow-hidden relative"
              style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" }}
            >
              <img
                src={photo}
                alt={`Workout ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full">
                {index + 1}d ago
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
