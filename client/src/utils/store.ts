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
  name: string;
  email: string;
  id: string;
  setToken: (response: string) => void
  setMessage: (message: string) => void
  setName: (message: string) => void
  setEmail: (message: string) => void
  setId: (message: string) => void
}

export const useLoginStore = create<Login>((set) => ({
  token: '',
  message: '',
  name: '',
  email: '',
  id: '',
  setToken: (token: string) => set({ token: token }),
  setMessage: (message: string) => set({ message: message }),
  setName: (name: string) => set({ name: name }),
  setEmail: (email: string) => set({ email: email }),
  setId: (id: string) => set({ id: id })
}))

export interface BotData {
  id: string;
  name: string;
  styleName: string;
  description: string;
  quirkname: string;
  quirkFlag: string;
}

type BotCollection = {
  collection: BotData[],
  setCollection: (data: BotData[]) => void
}

export const useBotStore = create<BotCollection>((set) => ({
  collection: [],
  setCollection: (data: BotData[]) => set({ collection: data })
}))