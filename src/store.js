import { create } from 'zustand'
import axios from 'axios'

export const useButomCountCard = create((set, get) => ({
    quantityCard: 8,
    typeDef: 'primary',
    typeNorm: 'default',
    typeMax: 'default',
    defaults: () => set((state) => ({ 
        quantityCard: 8, 
        typeDef: 'primary',
        typeNorm: 'default',
        typeMax: 'default' 
    })),
    normal: () => set((state) => ({ 
        quantityCard: 16, 
        typeDef: 'default',
        typeNorm: 'primary',
        typeMax: 'default' 
})),
    max: () => set((state) => ({ 
        quantityCard: 20, 
        typeDef: 'default',
        typeNorm: 'default',
        typeMax: 'primary' 
    })),
}))

export const useCards = create((set) => ({
    cards: [],
    getCard: (limit, btn) => async (state) => { 
        btn()
        const res = await axios('https://fakestoreapi.com/products', {
            method: 'GET',
            params: {limit}
        })
        set({cards: res.data})         
    }
}))