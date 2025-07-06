import { defineStore } from 'pinia'
import nasiGorengImg from '../assets/nasi-goreng.jpg';
import mieAyamImg from '../assets/mie-ayam.jpg';
import sateAyamImg from '../assets/sate-ayam.jpg';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    daftarMenu: [
      { id: 1, name: 'Nasi Goreng Spesial', description: 'Nasi goreng dengan telur dan ayam.', price: 25000, image : nasiGorengImg },
      { id: 2, name: 'Mie Ayam Bakso', description: 'Mie ayam dengan bakso lezat.', price: 20000, image: mieAyamImg },
      { id: 3, name: 'Sate Ayam Madura', description: 'Sate ayam dengan bumbu khas madura.', price: 30000, image: sateAyamImg }
    ]
  }),

  getters: {
    totalMenu: (state) => state.daftarMenu.length,
    getMenuById: (state) => (id) => state.daftarMenu.find(menu => menu.id === id),
    getAllMenuNames: (state) => state.daftarMenu.map(menu => menu.name),
    getMenuDiBawah25k: (state) => state.daftarMenu.filter(menu => menu.price < 25000)
  }
})
