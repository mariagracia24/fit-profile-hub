# 🏆 SPOTME BUILDATHON - COMPLETE BUILD INSTRUCTIONS

## 🎯 PRIORITY ORDER (Build These to Win)

### ⭐ PRIORITY 1: Post Workout Screen (THE DIFFERENTIATOR)
**Why:** This is SpotMe's unique BeReal-style feature that judges will love.

### ⭐ PRIORITY 2: Social Feed Screen  
**Why:** Shows the social accountability loop in action.

### ⭐ PRIORITY 3: Leaderboard Screen
**Why:** Demonstrates gamification and competitive motivation.

### ⭐ PRIORITY 4: Routine Detail Screen
**Why:** Shows the workout library functionality in depth.

---

## 📱 SCREEN 1: POST WORKOUT (BeReal-Style Capture)

### Entry Point
- From profile: Floating "+" button (bottom right)
- From feed: "Post Workout" button at top
- After completing a routine: Auto-prompt to post

### Layout (Top → Bottom)

**1. Header**
- Title: "📸 Post Your Workout"
- Close button (top-left X)

**2. Camera/Photo Section**
- Large square photo preview area
- "Take Photo" button (camera icon)
- Alternative: "Choose from Gallery" (smaller text below)
- BeReal-style dual camera option (front + back)

**3. AI Detection Banner**
- Appears after photo is taken
- Glowing card: "🤖 AI Detected: Outdoor Run"
- Tap to change/correct the workout type

**4. Workout Details Form**
```
Fields:
- Workout Type (pill selector): 🏃 Cardio | 💪 Strength | 🧘 Mobility | 🌀 Mixed
- Duration (time picker): "32 minutes"
- Intensity (slider): Low | Medium | High | Extreme
- Location (optional): "Campus Gym" or "Outdoor"
- Notes (text area): "Felt strong today! 💪"
```

**5. Privacy Toggle**
- "👥 Visible to Friends" / "🔒 Private"
- Small text: "Private posts still count toward your streak"

**6. Post Button**
- Full-width glowing button
- "🚀 Post & Log Workout"
- Disabled until photo + type selected

### Interactions
- Take photo → AI auto-detects workout type
- Select workout type → Pills highlight
- Tap Post → Success toast + navigate to Feed
- Save as draft option (top-right)

### AI Logic (Mock Functions)
```javascript
AI_detectWorkoutFromPhoto(photo) 
  → returns: { type: "Outdoor Run", confidence: 0.92, muscleGroups: ["Legs", "Cardio"] }

AI_suggestWorkoutNotes(photo, type)
  → returns: "Great form on those squats! Consider adding weights next time."

AI_privacyCheck(photo)
  → returns: { safe: true, warnings: [] }
```

### Data Model
```javascript
{
  id: "post_123",
  userId: "user_456",
  photo: "url",
  workoutType: "Outdoor Run",
  duration: 32,
  intensity: "High",
  location: "Campus Track",
  notes: "Felt strong today!",
  visibility: "friends",
  timestamp: "2024-01-15T10:30:00Z",
  aiDetected: true,
  likes: 0,
  comments: []
}
```

---

## 📱 SCREEN 2: SOCIAL FEED (Home Screen)

### Entry Point
- Bottom navigation: "🏠 Home" (first tab)
- Default landing screen after login

### Layout (Top → Bottom)

**1. Header**
- SpotMe logo (left)
- Title: "Feed"
- Notification bell (right, with badge count)

**2. Your Streak Banner**
- Slim card at top
- "🔥 7 Day Streak • Post today to keep it going!"
- Tap → opens profile

**3. Quick Post Button**
- Prominent floating button
- "📸 Post Workout"
- Glowing accent
- Fixed position

**4. Feed Filters**
- Horizontal pills: "All" | "Friends" | "Following" | "Top" | "Today"
- Scrollable

**5. Workout Posts (Card Feed)**

Each post card contains:
```
Top Section:
- Profile photo (small circle, left)
- Name: "Sarah K."
- Timestamp: "2h ago"
- Workout type badge: "🏃 Outdoor Run"
- Three-dot menu (right)

Middle Section:
- Large square workout photo
- Double-tap to like
- Like button (bottom-left overlay)
- Bookmark button (bottom-right overlay)

Bottom Section:
- Like count: "❤️ 12 likes"
- Caption/notes: "Morning 5K done! Feeling energized 💪"
- Workout stats: "32 min • High intensity"
- Comment count: "💬 3 comments"
- Time posted: "2 hours ago"

AI Insight Badge (occasional):
- "✨ Sarah is 3× more consistent this month"
```

**6. Load More**
- Infinite scroll
- Loading skeleton cards

### Interactions
- Tap post photo → Fullscreen view with comments
- Tap profile → Navigate to their profile
- Double-tap photo → Like animation
- Tap like count → See who liked
- Tap comments → Open comment sheet
- Three-dot menu → Report / Hide / Share

### Special Features
- Pull-to-refresh animation
- "You're all caught up!" message at end
- Friend suggestions between posts (every 5th post)
- Motivational AI nudge if user hasn't posted today

### Data Model
```javascript
{
  posts: [
    {
      id: "post_789",
      user: {
        id: "user_123",
        name: "Sarah K.",
        photo: "url",
        isFollowing: true
      },
      photo: "url",
      workoutType: "Outdoor Run",
      duration: 32,
      intensity: "High",
      notes: "Morning 5K done!",
      timestamp: "2h ago",
      likes: 12,
      comments: 3,
      isLiked: false,
      isBookmarked: false
    }
  ]
}
```

---

## 📱 SCREEN 3: LEADERBOARD

### Entry Point
- From profile: Tap "View Leaderboard →"
- Bottom nav: "🏆 Leaderboard" tab

### Layout (Top → Bottom)

**1. Header**
- Title: "🏆 Leaderboard"
- Time filter pills: "Today" | "Week" | "Month" | "All-Time"

**2. Your Rank Card (Prominent)**
- Large glowing card
- "Your Rank: #2"
- "Among 32 friends"
- Workout count: "14 workouts this week"
- Up/down arrow with change: "↑ 3 spots"

**3. Top 3 Podium (Visual)**
- Large cards for ranks 1, 2, 3
- Center (#1) is largest/highest
- Each shows:
  - Profile photo with border (gold/silver/bronze)
  - Name
  - Workout count
  - Streak badge

**4. Leaderboard List (4th place onwards)**

Each row:
```
#4  [Profile Photo]  Alex M.    12 workouts  🔥 5 day streak
#5  [Profile Photo]  Jordan P.  11 workouts  🔥 12 day streak
```

- Tap row → View their profile
- Your row highlighted in accent color

**5. Filter Toggle**
- "👥 Friends" / "🌍 Global"
- Switch between friend circle and campus-wide

**6. Weekly Winner Badge**
- Banner at bottom (if applicable)
- "You won last week! 🏆"
- "Claim your badge"

### Interactions
- Tap name → View profile
- Tap your rank card → View detailed stats
- Change time filter → Smooth animated transition
- Pull to refresh

### Gamification Elements
- Animated rank changes
- Confetti when you move up
- Badges for achievements:
  - 🏆 Weekly Winner
  - 🔥 Longest Streak
  - 💪 Most Consistent
  - ⚡ Rising Star

### Data Model
```javascript
{
  userRank: {
    position: 2,
    totalUsers: 32,
    workouts: 14,
    change: +3,
    streak: 7
  },
  leaderboard: [
    {
      rank: 1,
      user: {
        id: "user_001",
        name: "Emma R.",
        photo: "url"
      },
      workouts: 18,
      streak: 15,
      badges: ["🏆", "🔥"]
    },
    // ... more entries
  ]
}
```

---

## 📱 SCREEN 4: ROUTINE DETAIL

### Entry Point
- From library: Tap any routine card
- From feed: Tap "From routine: Push Day" link

### Layout (Top → Bottom)

**1. Header**
- Back button (left)
- Routine title: "🔥 Push Day"
- Three-dot menu (right): Edit | Duplicate | Delete | Share

**2. Routine Info Card**
- Tags: "Strength" "Upper Body"
- Stats: "5 exercises • ~32 min • Medium intensity"
- Last completed: "2 days ago"
- Total times completed: "8 times"
- Favorite star toggle (top-right)

**3. AI Insight (if applicable)**
- Slim banner
- "✨ You perform 15% better on this routine in the morning"

**4. Exercise List**

Each exercise card:
```
1. Bench Press
   💪 Chest, Triceps, Shoulders
   
   Sets & Reps:
   • Warm-up: 1×12 @ 50 lbs
   • Working: 3×8-10 @ 135 lbs
   
   [Video thumbnail] ← Optional form video
   
   Notes: "Focus on controlled descent"
   
   [Log Last Performance] button
```

**5. Action Buttons**
- Primary: "🚀 Start This Routine" (large, glowing)
- Secondary: "📊 View History" (outline)

**6. History Section**
- "Recent Sessions" header
- List of dates with completion status:
  ```
  Jan 13, 2024 • Completed • 35 min
  Jan 10, 2024 • Completed • 32 min
  Jan 7, 2024 • Partial • 20 min
  ```
- Tap → View that session's details

### Interactions
- Tap "Start Routine" → Opens active workout tracker
- Tap exercise → Expand for form tips and videos
- Tap "View History" → Opens performance graph
- Edit mode → Reorder exercises, modify sets/reps
- Share → Generate shareable routine card image

### AI Features
- AI_suggestModifications(routine, userHistory)
  - "Consider increasing weight on bench press"
  - "Add 5 more minutes of warm-up"
- AI_optimalTiming(routine, userPerformance)
  - "You usually complete this faster in the afternoon"

### Data Model
```javascript
{
  id: "routine_123",
  title: "Push Day",
  emoji: "🔥",
  tags: ["Strength", "Upper Body"],
  exercises: [
    {
      id: "ex_1",
      name: "Bench Press",
      muscleGroups: ["Chest", "Triceps", "Shoulders"],
      sets: [
        { type: "warmup", reps: 12, weight: 50 },
        { type: "working", reps: "8-10", weight: 135, sets: 3 }
      ],
      notes: "Focus on controlled descent",
      videoUrl: "optional"
    }
  ],
  stats: {
    totalExercises: 5,
    estimatedDuration: 32,
    intensity: "Medium"
  },
  lastCompleted: "2 days ago",
  timesCompleted: 8,
  isFavorite: true,
  history: [
    { date: "2024-01-13", duration: 35, completed: true },
    { date: "2024-01-10", duration: 32, completed: true }
  ]
}
```

---

## 🎨 UNIVERSAL DESIGN SYSTEM (USE EVERYWHERE)

### Colors (Exact Hex/HSL)
```css
--background: #000000
--card: #111111
--border: #1E1E1E
--text-primary: #FFFFFF
--text-secondary: #A8A8A8
--accent-blue: #5D5FEC
--accent-glow: rgba(93, 95, 236, 0.25)
--success: #10B981
--warning: #F59E0B
--error: #EF4444
```

### Typography
- Font: Inter or SF Pro
- Heading: Bold, 24-32px
- Subheading: Semibold, 18-20px
- Body: Regular, 14-16px
- Caption: Light, 12-14px

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

### Border Radius
- Small pills: 18-22px
- Buttons: 24-28px
- Cards: 16-20px
- Photos: 12-16px

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.15)
--shadow-md: 0 4px 16px rgba(0,0,0,0.25)
--shadow-glow: 0 0 20px rgba(93,95,236,0.3)
```

---

## 🧭 NAVIGATION STRUCTURE

### Bottom Navigation (5 tabs)
```
🏠 Home (Feed)
🔍 Explore (Discover workouts/people)
📸 Post (Center, elevated)
📚 Library (My workouts)
👤 Profile
```

### Navigation Flow
```
Profile → Library → Routine Detail → Start Routine
Profile → Badge Collection
Profile → Edit Profile
Profile → Settings

Feed → Post Detail → Comments
Feed → User Profile → Follow

Library → Create Routine → AI Builder
Library → Routine Detail → Edit

Leaderboard → User Profile
```

---

## 🤖 AI INTEGRATION POINTS

### Mock AI Functions (Build These as Placeholders)
```javascript
// Photo analysis
AI_detectWorkoutFromPhoto(photo)
AI_detectMuscleGroups(photo)
AI_privacyCheck(photo)

// Insights
AI_consistencyAnalysis(userHistory)
AI_performancePrediction(routine, time)
AI_streakMotivation(currentStreak)

// Suggestions
AI_suggestWorkout(userPreferences, weather, time)
AI_suggestRoutineModification(routine, progress)
AI_suggestFriends(userProfile)

// Smart features
AI_autoFillRoutine(description)
AI_generateWorkoutPlan(goals, equipment)
AI_detectFormIssues(video) // Future
```

---

## 🎯 BUILDATHON WINNING STRATEGY

### What Judges Will Love
1. **BeReal-style workout posts** = Unique, timely, innovative
2. **AI throughout** = Shows technical depth
3. **Social accountability** = Addresses real problem
4. **Gamification** = Drives engagement
5. **No-equipment focus** = Underserved market (dorms, home)
6. **Ethical AI** = Responsible development
7. **Polished UI** = Professional presentation

### Demo Flow (7 Minutes)
```
1. Open to Profile (30s)
   - Show streak, badges, gallery
   
2. Navigate to Library (45s)
   - Show AI insights
   - Show saved routines
   
3. Open Routine Detail (60s)
   - Show exercises and history
   - Explain AI suggestions
   
4. Navigate to Feed (90s)
   - Show friends' posts
   - Explain BeReal concept
   - Show social engagement
   
5. Post a Workout (90s)
   - Take photo
   - AI detects workout
   - Complete and post
   
6. Check Leaderboard (60s)
   - Show competitive rankings
   - Explain gamification
   
7. Wrap-up (60s)
   - Emphasize: AI + Social + Habits
   - Market opportunity
   - Ethical approach
```

---

## ✅ BUILD CHECKLIST

### Phase 1: Core Screens (PRIORITY)
- [x] Profile Screen
- [x] Workout Library Screen
- [ ] Post Workout Screen
- [ ] Social Feed Screen
- [ ] Leaderboard Screen
- [ ] Routine Detail Screen

### Phase 2: Supporting Screens
- [ ] Badge Collection
- [ ] Edit Profile
- [ ] User Profile (viewing others)
- [ ] Comments Sheet
- [ ] Notifications

### Phase 3: Polish
- [ ] Loading states
- [ ] Empty states
- [ ] Error handling
- [ ] Smooth animations
- [ ] Haptic feedback (if mobile)

### Phase 4: Data & Logic
- [ ] Mock data for all screens
- [ ] Navigation between screens
- [ ] AI placeholder functions
- [ ] State management
- [ ] Toast notifications

---

## 🚀 LOVABLE IMPLEMENTATION ORDER

### Build This Order:
1. **Post Workout Screen** (30 min)
2. **Social Feed Screen** (45 min)
3. **Leaderboard Screen** (30 min)
4. **Routine Detail Screen** (30 min)
5. **Bottom Navigation** (15 min)
6. **Connect All Screens** (15 min)
7. **Polish & Test** (30 min)

**Total: ~3 hours for complete MVP**

---

## 💡 QUICK TIPS FOR LOVABLE

### When Building Each Screen:
1. Copy the EXACT layout instructions
2. Use the design system colors/spacing
3. Include ALL interactions (toasts for now)
4. Add mock data
5. Connect navigation
6. Test on mobile viewport

### Lovable Prompting Tips:
- Reference existing screens: "Build this like the Profile screen"
- Be specific: "Use #111111 for cards, not gray-900"
- One screen at a time
- Test navigation after each screen

---

## 🏁 FINAL NOTES

This buildathon-winning app has:
- ✅ Clear problem/solution
- ✅ Innovative AI usage
- ✅ Social accountability
- ✅ Underserved market
- ✅ Ethical considerations
- ✅ Scalable architecture
- ✅ Professional polish

**You have everything you need to win. Now build it! 🚀**
