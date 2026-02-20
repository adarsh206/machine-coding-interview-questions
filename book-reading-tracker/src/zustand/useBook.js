import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useBook = create(persist(
    (set) => ({
        books : [],
        setBook : (payload) => set((state) => ({
            books : [...state.books, payload]
        }))
    }),
    {name : "book"}
))