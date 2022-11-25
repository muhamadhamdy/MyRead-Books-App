import create from "zustand";
const useStateStore = create((set) => ({
        showMainLoader: true,
        setShowMainLoader: (val) => set((state) => ({ showMainLoader: val })),
    })
);
export { useStateStore };