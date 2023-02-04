import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => {
    return { 
    	data : [
        {
          id: 1,
          name : "Indomie",
          price : 2000
        },
        {
          id: 2,
          name: "Pasta",
          price: 8000
        },
        {
          id: 3,
          name: "Geprek",
          price: 15000
        },
        {
          id: 4, 
          name: "Pizza",
          price: 20000
        }
      ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
  },
})