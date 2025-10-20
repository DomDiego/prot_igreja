import AppHeader from "../AppHeader";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function AppHeaderExample() {
  return (
    <ThemeProvider>
      <AppHeader />
    </ThemeProvider>
  );
}
