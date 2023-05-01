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
  quirkName: string;
  quirkFlag: string;
}

type BotCollection = {
  collection: BotData[],
  viewBot: boolean,
  viewBotDetails: BotData,
  newBot: boolean,
  setNewBot: (action: boolean) => void,
  setCollection: (data: BotData[]) => void
  setViewBot: (action: boolean) => void
  setViewBotDetails: (data: BotData) => void
}

export const useBotStore = create<BotCollection>((set) => ({
  collection: [],
  viewBot: false,
  viewBotDetails: {
    id: '',
    description: '',
    name: '',
    styleName: '',
    quirkName: '',
    quirkFlag: ''
  },
  newBot: false,
  setNewBot: (action) => set({ newBot: action }),
  setCollection: (data: BotData[]) => set({ collection: data }),
  setViewBot: (action) => set({ viewBot: action }),
  setViewBotDetails: (data) => set({
    viewBotDetails: {
      id: data.id,
      description: data.description,
      name: data.name,
      styleName: data.styleName,
      quirkName: data.quirkName,
      quirkFlag: data.quirkFlag
    }
  }),
}))

type Pagination = {
  currentPage: number;
  total: number;
  lastPage: number;
  setCurrentPage: (page: number) => void;
  setTotal: (page: number) => void;
  setLastPage: (page: number) => void;
}
export const usePaginationStore = create<Pagination>((set) => ({
  currentPage: 0,
  total: 0,
  lastPage: 0,
  setCurrentPage: (page: number) => set({ currentPage: page }),
  setTotal: (page: number) => set({ total: page }),
  setLastPage: (page: number) => set({ lastPage: page })
}))

type Navigations = {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const useNavigationStore = create<Navigations>((set) => ({
  activeNav: 'home',
  setActiveNav: (nav: string) => set({ activeNav: nav })
}))