import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useAlarm = create(persist(
    (set) => ({
        alarms : [],
        setAlarm : (payload) => set((state) => ({
            alarms : [...state.alarms, payload]
        })),
        deleteAlarm : (id) => set((state) => ({
            alarms : state.alarms.filter((alarm) => alarm.id !== id)
        }))
    }),
    { name : "alarm"}
))