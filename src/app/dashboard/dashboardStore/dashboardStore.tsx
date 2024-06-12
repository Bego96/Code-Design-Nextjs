import { create } from "zustand";
interface State {
    sidebarVisibility: boolean;
    toggleSidebar: () => void;
  }

const useDashboardStore = create<State>((set) => ({
    sidebarVisibility: false,
    toggleSidebar: () => set((state) => ({ sidebarVisibility: !state.sidebarVisibility }))
}));

export default useDashboardStore;
