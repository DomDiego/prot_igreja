import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function AppHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-2xl mx-auto px-4 h-full flex items-center justify-between">
        <h1 className="text-2xl font-display font-semibold tracking-tight text-foreground">
          Igreja Comunidade
        </h1>
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleTheme}
          data-testid="button-theme-toggle"
          className="rounded-full"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" data-testid="icon-sun" />
          ) : (
            <Moon className="w-5 h-5" data-testid="icon-moon" />
          )}
        </Button>
      </div>
    </header>
  );
}
