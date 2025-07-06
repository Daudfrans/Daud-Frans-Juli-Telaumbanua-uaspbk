<template>
  <section class="menu-detail-container" v-if="menu">
    <button @click="$router.back()" class="btn-back" aria-label="Kembali ke halaman sebelumnya">
      ← Kembali
    </button>

    <h1 class="menu-title">{{ menu.name }}</h1>
    <p class="menu-description">{{ menu.description }}</p>
    <p class="menu-price">Rp {{ menu.price.toLocaleString() }}</p>

    <button @click="showModal = true" class="btn-add-cart" aria-label="Tambah ke keranjang">
      Tambah ke Keranjang
    </button>

    <!-- Modal input jumlah -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Masukkan Jumlah</h3>
        <input type="number" v-model.number="jumlah" min="1" />
        <div class="modal-actions">
          <button @click="konfirmasiTambah">Tambah</button>
          <button @click="showModal = false">Batal</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMenuStore } from '../stores/menuStore.js'
import { useTransaksiStore } from '../stores/transaksiStore.js'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()
const menuStore = useMenuStore()
const transaksiStore = useTransaksiStore()

const menuId = parseInt(route.params.id)
const menu = computed(() => menuStore.getMenuById(menuId))

const showModal = ref(false)
const jumlah = ref(1)

function konfirmasiTambah() {
  if (jumlah.value < 1) return
  transaksiStore.tambahKeKeranjang(menu.value, jumlah.value)
  showModal.value = false
  jumlah.value = 1
}
</script>

<style scoped>
/* Styling asli tetap */
.menu-detail-container {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem 1.5rem;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

.btn-back {
  display: inline-block;
  margin-bottom: 2rem;
  color: #f97316;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.3s ease;
  user-select: none;
}

.btn-back:hover,
.btn-back:focus {
  color: #ea580c;
  outline: none;
  text-decoration: underline;
}

.menu-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  user-select: none;
}

.menu-description {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2rem;
  user-select: none;
  line-height: 1.6;
}

.menu-price {
  font-size: 1.75rem;
  font-weight: 700;
  color: #f97316;
  margin-bottom: 3rem;
  user-select: none;
}

.btn-add-cart {
  background-color: #f97316;
  color: white;
  padding: 0.85rem 3rem;
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(249, 115, 22, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.btn-add-cart:hover,
.btn-add-cart:focus {
  background-color: #ea580c;
  box-shadow: 0 8px 20px rgba(234, 88, 12, 0.6);
  outline: none;
}

/* Modal styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  width: 300px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.modal-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.modal-actions button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 480px) {
  .menu-detail-container {
    margin: 2rem 1rem;
    padding: 1.5rem 1rem;
  }

  .menu-title {
    font-size: 2rem;
  }

  .menu-price {
    font-size: 1.5rem;
  }

  .btn-add-cart {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
}
</style>
