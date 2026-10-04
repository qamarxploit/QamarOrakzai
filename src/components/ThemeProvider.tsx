import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Lazy State Initialization: پیج لوڈ ہوتے ہی صحیح تھیم پہلے رینڈر پر ہی پک ہو جائے گی (No Flash)
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved === "dark" || saved === "light") {
        return saved;
      }
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    }
    return "dark"; // Default Theme
  });

  // DOM update & Tailwind CSS synchronization
  useEffect(() => {
    const root = document.documentElement;

    // 1. Tailwind CSS 'dark' class toggle
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // 2. Custom data-theme attribute for extra CSS styling
    root.setAttribute("data-theme", theme);

    // 3. Save choice in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const isDark = theme === "dark";

آپ کا **`ThemeProvider`** کوڈ بالکل زبردست لکھا ہوا ہے! 

چونکہ ہم اپنے گزشتہ کمپوننٹس (`Projects`, `Contact`, `Footer`) میں **Tailwind CSS** کی `dark:` کلاسز استعمال کر رہے ہیں، اس لیے اس میں صرف ایک ضروری اور اہم اضافہ کیا گیا ہے: **`document.documentElement.classList`** میں **`dark`** کلاس کو ٹوگل کرنا۔

اگر آپ کا Tailwind CSS `darkMode: 'class'` پر سیٹ ہے تو HTML ٹیگ (`<html class="dark">`) پر `dark` کلاس کا ہونا لازمی ہوتا ہے تاکہ تمام `dark:bg-slate-900` وغیرہ صحیح طریقے سے کام کریں۔

---

### اپ گریڈ شدہ `ThemeProvider.tsx` کا کوڈ:

```tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue undefined |>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Load saved theme or system preference on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "dark" || saved === "light") {
      setThemeState(saved);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setThemeState("light");
    }
  }, []);

  // Sync DOM & LocalStorage with theme state
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Tailwind CSS 'dark' class handler
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Custom CSS / DaisyUI attribute handler
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  return (
    <ThemeContext.Provider setTheme theme, toggleTheme, value="{{" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
