import { defineStore } from 'pinia'
import axios from 'axios'

export const useTransaksiStore = defineStore('transaksi', {
    state: () => ({
        keranjang: [],
        riwayatTransaksi: []
    }),

    getters: {
        totalItem: (state) => state.keranjang.reduce((total, item) => total + item.jumlah, 0),
        totalHarga: (state) => state.keranjang.reduce((total, item) => total + (item.price * item.jumlah), 0)
    },

    actions: {
        // transaksiStore.js

        tambahKeKeranjang(menu, jumlah = 1) {
            const index = this.keranjang.findIndex(item => item.id === menu.id)
            if (index !== -1) {
                this.keranjang[index].jumlah += jumlah
            } else {
                this.keranjang.push({ ...menu, jumlah })
            }
        },

        hapusDariKeranjang(index) {
            this.keranjang.splice(index, 1)
        },

        checkout() {
            // Simpan ke riwayat kalau perlu
            this.simpanTransaksi()
        },


        kosongkanKeranjang() {
            this.keranjang = []
        },

        async simpanTransaksi() {
            const transaksi = {
                id: Date.now(),
                items: this.keranjang,
                total: this.totalHarga,
                waktu: new Date().toISOString()
            }

            try {
                await axios.post('http://localhost:3000/transaksi', transaksi)
                this.riwayatTransaksi.push(transaksi)
                this.kosongkanKeranjang()
                await this.fetchRiwayatTransaksi()
            } catch (error) {
                console.error('Gagal menyimpan transaksi:', error)
            }
        },

        async fetchRiwayatTransaksi() {
            try {
                const res = await axios.get('http://localhost:3000/transaksi')
                this.riwayatTransaksi = res.data
            } catch (error) {
                console.error('Gagal memuat riwayat:', error)
            }
        }
    }
})
