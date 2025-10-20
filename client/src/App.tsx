import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import AppHeader from "@/components/AppHeader";
import FloatingFooter from "@/components/FloatingFooter";
import Home from "@/pages/Home";
import Bible from "@/pages/Bible";
import Events from "@/pages/Events";
import PrayerRequests from "@/pages/PrayerRequests";
import Settings from "@/pages/Settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/biblia" component={Bible} />
      <Route path="/eventos" component={Events} />
      <Route path="/pedidos" component={PrayerRequests} />
      <Route path="/configuracoes" component={Settings} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <AppHeader />
            <main className="pt-16 pb-20">
              <div className="max-w-2xl mx-auto px-4 py-6">
                <Router />
              </div>
            </main>
            <FloatingFooter />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
