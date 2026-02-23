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
        })),
         updateAlarm : (id, payload) => set((state) => ({
            alarms : state.alarms.map((alarm) => {
                if(alarm.id === id){
                    return {
                        ...alarm,
                        ...payload
                    }
                }
                else{
                    return alarm;
                }
            })
        }))
    }),
    { name : "alarm"}
))