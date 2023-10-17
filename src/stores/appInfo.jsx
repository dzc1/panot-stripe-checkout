import { create } from "zustand";

export const appInfo = create((set) => ({
  appContent: {
    heading: "Vite + React + Zustand Technigo Boilerplate",
  }, // object
}));
