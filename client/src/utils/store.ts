import { create } from 'zustand';

type ModeType = 'dark' | 'light';
type Mode = {
  mode: ModeType;
  setMode: (mode: ModeType) => void;
}

export const useModeStore = create<Mode>((set) => ({
  mode: 'dark',
  setMode: (mode: ModeType) => set({ mode: mode })
}));