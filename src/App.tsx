import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkoutLibrary from "./pages/WorkoutLibrary";
import AIInsightModal from "./pages/AIInsightModal";
import RoutineDetail from "./pages/RoutineDetail";
import CreateRoutine from "./pages/CreateRoutine";
import WorkoutSession from "./pages/WorkoutSession";
import WorkoutComplete from "./pages/WorkoutComplete";
import BadgeCollection from "./pages/BadgeCollection";
import BadgeDetail from "./pages/BadgeDetail";
import FilteredFeed from "./pages/FilteredFeed";
import PhotoViewer from "./pages/PhotoViewer";
import WeeklyWrapUp from "./pages/WeeklyWrapUp";
import Settings from "./pages/Settings";
import HealthSyncModal from "./pages/HealthSyncModal";
import HealthConnect from "./pages/HealthConnect";
import InviteFriends from "./pages/InviteFriends";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/library" element={<WorkoutLibrary />} />
          <Route path="/ai-insight" element={<AIInsightModal />} />
          <Route path="/routine/:id" element={<RoutineDetail />} />
          <Route path="/create-routine" element={<CreateRoutine />} />
          <Route path="/workout-session" element={<WorkoutSession />} />
          <Route path="/workout-complete" element={<WorkoutComplete />} />
          <Route path="/badges" element={<BadgeCollection />} />
          <Route path="/badge/:id" element={<BadgeDetail />} />
          <Route path="/feed/:tag" element={<FilteredFeed />} />
          <Route path="/photo/:id" element={<PhotoViewer />} />
          <Route path="/weekly-wrap-up" element={<WeeklyWrapUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/health-sync-modal" element={<HealthSyncModal />} />
          <Route path="/health-connect" element={<HealthConnect />} />
          <Route path="/invite-friends" element={<InviteFriends />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
