import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  username: string;
  setUsername: (name: string) => void;
  handleDisconnect: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (name) => set({ username: name }),

      // Handle disconnection by resetting the username
      handleDisconnect: () => set({ username: "" }),
    }),
    {
      name: "user-storage", // Key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
