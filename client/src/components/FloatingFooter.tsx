import { Home, BookOpen, Calendar, Heart, Settings } from "lucide-react";
import { useLocation } from "wouter";

const navItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: BookOpen, label: "Bíblia", path: "/biblia" },
  { icon: Calendar, label: "Eventos", path: "/eventos" },
  { icon: Heart, label: "Pedidos", path: "/pedidos" },
  { icon: Settings, label: "Config", path: "/configuracoes" },
];

export default function FloatingFooter() {
  const [location, setLocation] = useLocation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t bg-card/95 backdrop-blur-xl safe-area-inset-bottom">
      <nav className="max-w-2xl mx-auto h-full">
        <div className="grid grid-cols-5 h-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => setLocation(item.path)}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className={`flex flex-col items-center justify-center gap-1 transition-colors hover-elevate ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </footer>
  );
}
