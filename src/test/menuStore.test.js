import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useMenuStore } from '../stores/menuStore'

describe('Pengujian menuStore', () => {
  let menuStore

  beforeEach(() => {
    setActivePinia(createPinia())
    menuStore = useMenuStore()
  })

  it('seharusnya memiliki 3 data menu awal', () => {
    expect(menuStore.daftarMenu).toHaveLength(3)
  })

  it('getter totalMenu harus mengembalikan jumlah menu yang benar', () => {
    expect(menuStore.totalMenu).toBe(3)
  })

  it('getter getAllMenuNames harus mengembalikan daftar nama menu', () => {
    const namaMenu = menuStore.getAllMenuNames
    expect(namaMenu).toEqual([
      'Nasi Goreng Spesial',
      'Mie Ayam Bakso',
      'Sate Ayam Madura'
    ])
  })

  it('getter getMenuById harus mengembalikan menu sesuai ID', () => {
    const menu = menuStore.getMenuById(2)
    expect(menu).toBeDefined()
    expect(menu.name).toBe('Mie Ayam Bakso')
  })

  it('getter getMenuById harus mengembalikan undefined jika ID tidak ditemukan', () => {
    const menu = menuStore.getMenuById(999)
    expect(menu).toBeUndefined()
  })

  it('getter getMenuDiBawah25k harus mengembalikan menu dengan harga di bawah 25.000', () => {
    const menuMurah = menuStore.getMenuDiBawah25k
    expect(menuMurah).toHaveLength(1)
    expect(menuMurah[0].name).toBe('Mie Ayam Bakso')
  })
})
