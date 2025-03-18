import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface UserStore {
  users: User[];
  fetchUsers: () => Promise<void>;
  addUser: (user: Omit<User, "id">) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],

      fetchUsers: async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await response.json();
        set({ users: data });
      },

      addUser: async (user) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        set((state) => ({ users: [...state.users, { ...user, id: data.id }] }));
      },

      deleteUser: async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE",
        });
        set((state) => ({ users: state.users.filter((user) => user.id !== id) }));
      },
    }),
    { name: "user-storage" }
  )
);
