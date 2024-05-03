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
    categories: [],
    getCategorues: () => async (state) => { //TODO: Здесь нужно получить массив с категориями и привести его к виду - categiryes: []
        try {
            const res = await axios.get('https://fakestoreapi.com/products/categories')
            console.log(res.data)

            const result = res.data.map(item => {
                const label = item[0].toUpperCase() + item.slice(1)
                return {
                    value: item,
                    label
                }
            })

            result.push({
                value: '',
                label: 'nothing'
            })

            set({categories: result})
        } catch (error) {
            console.error(error)
        }
    },
    selectCategory: (limit, category) => async (state) => {
        try {
            let url = `https://fakestoreapi.com/products/category/${category}`

            if (!category) {
                url = 'https://fakestoreapi.com/products'
            }

            const res = await axios(url, {
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