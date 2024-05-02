import { create } from 'zustand'
import axios from 'axios'

export const useButtonsLimit = create((set) => ({
    limit: 8,
    typeDef: 'primary',
    typeNorm: 'default',
    typeMax: 'default',
    defaults: () => set((state) => ({ 
        limit: 8, 
        typeDef: 'primary',
        typeNorm: 'default',
        typeMax: 'default' 
    })),
    normal: () => set((state) => ({ 
        limit: 16, 
        typeDef: 'default',
        typeNorm: 'primary',
        typeMax: 'default' 
    })),
    max: () => set((state) => ({ 
        limit: 20, 
        typeDef: 'default',
        typeNorm: 'default',
        typeMax: 'primary' 
    })),
}))
export const useCards = create((set, get) => ({
    cards: [],
    getCard: (limit, btn) => async (state) => { 
        try {
            btn()
            const res = await axios('https://fakestoreapi.com/products', {
                method: 'GET',
                params: {limit}
            })
            set({cards: res.data})         
        } catch (error) {
            console.error(error)
        }
    },
    categories: [
        {
            value: 'electronics',
            label: 'Electronics',
        },
        {
            value: 'jewelery',
            label: 'Jewelery',
        },
        {
            value: "men's clothing",
            label: "Men's clothing",
        },
        {
            value: "women's clothing",
            label: "Women's clothing",
        },
    ],
    getCategorues: () => async (state) => { //TODO: Здесь нужно получить массив с категориями и привести его к виду - categiryes: []
        try {
            const res = await axios.get('https://fakestoreapi.com/products/categories')
            console.log(res)
            set({categories: res.data})
        } catch (error) {
            console.error(error)
        }
    },
    selectCategory: (limit, category) => async (state) => {
        try {
            const res = await axios(`https://fakestoreapi.com/products/category/${category}`, {
                method: 'GET',
                params: {limit}
            })
            console.log(res.data)
        
            set({cards: res.data})
        } catch (error) {
            console.error(error)
        }
    },
    searchCard: (value) => async (state) => {
        try {
            const res = await axios('https://fakestoreapi.com/products', {
                method: 'GET'
            })
            let i = 100
            const lowValue = value.toLowerCase()
            const newResult = res.data.filter(item => {
                const title = item.title.toLowerCase()
                return title.includes(lowValue)
            })
    
            set({cards: newResult})
        } catch (error) {
            console.error(error)
        }
    }
}))