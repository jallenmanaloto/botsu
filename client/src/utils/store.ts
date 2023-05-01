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

type Login = {
  token: string;
  message: string;
  setToken: (response: string) => void
  setMessage: (message: string) => void
}

export const useLoginStore = create<Login>((set) => ({
  token: '',
  message: '',
  setToken: (token: string) => set({ token: token }),
  setMessage: (message: string) => set({ message: message })
}))
