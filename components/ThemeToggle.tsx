"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  return (

    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="flex h-12 w-12 items-center justify-center rounded-full border"
    >

      {theme === "dark" ? <Sun /> : <Moon />}

    </button>

  );
}