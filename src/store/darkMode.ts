import { create } from "zustand";

interface DarkMode {
  isDark: boolean;
}

export const useDarkMode = create((set, get) => ({
  isDark: false,
  setTheme: () => {
    set(!isDark);
  },
}));
