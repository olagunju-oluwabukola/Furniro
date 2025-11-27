import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    isCartOpen: false,
    items: []
  }),

  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },

  actions: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },

    closeCart() {
      this.isCartOpen = false
    },

    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          id: product.id || Date.now(),
          title: product.title,
          price: parseFloat(product.price.replace(/[^0-9.]/g, '')),
          quantity: 1,
          img: product.img,
          slug: product.slug
        })
      }

      this.toggleCart()
    },

    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    },

    updateQuantity(id, quantity) {
      const item = this.items.find(item => item.id === id)
      if (item && quantity > 0) {
        item.quantity = quantity
      }
    }
  }
})