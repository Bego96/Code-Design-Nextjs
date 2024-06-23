import { create } from "zustand";
interface State {
    sidebarVisibility: boolean;
    toggleSidebar: () => void;
  }

const useHomeStore = create<State>((set) => ({
    sidebarVisibility: false,
    toggleSidebar: () => set((state) => ({ sidebarVisibility: !state.sidebarVisibility }))
}));

export default useHomeStore;
