import { create } from "zustand";

type Address = {
  street: string;
  city: string;
  zip: string;
};

type UserStore = {
  appContent: {
    heading: string;
    reactivedataExampleOne: string;
  };
  isLogged: boolean;
  age: number;
  username: string;
  hobbies: string[];
  address: Address;
  favSportTeam: string | null;
  toggleLogin: () => void;
  incrementAge: () => void;
  setUsername: (newUsername: string) => void;
  addHobby: (hobby: any) => void;
  setAddress: (newAddress: Address) => void;
  setFavSportTeam: (team: string | null) => void;
};

export const useUserStores = create<UserStore>((set) => ({
  appContent: {
    heading: "Vite + React + Zustand Technigo Boilerplate",
    reactivedataExampleOne:
      "Here is a component with all data types using Zustand as its central store:",
  }, // object with app content
  isLogged: false,
  age: 25,
  username: "JohnDoe",
  hobbies: ["reading", "hiking", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
  favSportTeam: null,
  toggleLogin: () => set((state) => ({ isLogged: !state.isLogged })),
  incrementAge: () => set((state) => ({ age: state.age + 1 })),
  setUsername: (newUsername: string) => set({ username: newUsername }),
  addHobby: (hobby: string) =>
    set((state) => ({
      hobbies: state.hobbies.includes(hobby)
        ? state.hobbies
        : [...state.hobbies, hobby],
    })),
  setAddress: (newAddress: Address) => set({ address: newAddress }),
  setFavSportTeam: (team: string | null) => set({ favSportTeam: team }),
}));
