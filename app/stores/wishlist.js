
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [],
    isOpen: false
  }),

  getters: {
    itemCount: (state) => state.items.length,

    isInWishlist: (state) => (productSlug) => {
      return state.items.some(item => item.slug === productSlug)
    }
  },

  actions: {
    toggleWishlist() {
      this.isOpen = !this.isOpen
    },

    addToWishlist(product) {
      if (!this.isInWishlist(product.slug)) {
        this.items.push(product)
        return true
      }
      return false
    },

    removeFromWishlist(productSlug) {
      const index = this.items.findIndex(item => item.slug === productSlug)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    clearWishlist() {
      this.items = []
    }
  },

  persist: true
})
