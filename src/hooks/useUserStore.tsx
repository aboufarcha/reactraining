import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  username: string;
  setUsername: (name: string) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (name) => set({ username: name }),
    }),
    {
      name: "user-storage", // Key in localStorage
      storage: createJSONStorage(() => localStorage), // ✅ Corrected
    }
  )
);

export default useUserStore;
