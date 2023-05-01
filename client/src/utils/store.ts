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

type LoginResponse = {
  message: string
  access_token: string
}

type Login = {
  token: string;
  setToken: (response: LoginResponse) => void
}

export const useLoginStore = create<Login>((set) => ({
  token: '',
  setToken: (response: LoginResponse) => set({ token: response.access_token })
}))