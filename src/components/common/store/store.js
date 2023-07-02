
import { create } from 'zustand'
export const useAuthStore = create((set) => ({
    auth : {
        username : '',
        user_type:'',
        active : false
    },
    setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})), 
    setUsertype : (type) => set((state) => ({ auth : { ...state.auth, user_type: type }})) 
}))