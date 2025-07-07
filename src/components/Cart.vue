<template>
  <div class="wrapper">
    <section class="container">
      <!-- KIRI: Judul -->
      <div class="left">
        <h1 class="title">Keranjang<br>Belanja</h1>
      </div>

      <!-- KANAN: Tabel & Tombol -->
      <div class="right">
        <p v-if="keranjang.length === 0" class="empty-message">
          Keranjangmu masih kosong.
        </p>

        <div v-else class="table-wrapper">
          <table class="cart-table">
            <thead>
              <tr>
                <th class="col-name">Nama Menu</th>
                <th class="col-qty">Jumlah</th>
                <th class="col-price">Harga</th>
                <th class="col-action">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in keranjang" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.jumlah }}</td>
                <td>Rp {{ (item.price * item.jumlah).toLocaleString() }}</td>
                <td>
                  <button @click="hapusItem(index)" class="delete-btn">Hapus</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td class="total-label">Total:</td>
                <td class="total-value">Rp {{ totalHarga.toLocaleString() }}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <button v-if="keranjang.length > 0" @click="checkout" class="checkout-btn">
          Checkout
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTransaksiStore } from '../stores/transaksiStore.js'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const transaksiStore = useTransaksiStore()
const router = useRouter()

const keranjang = computed(() => transaksiStore.keranjang)
const totalHarga = computed(() =>
  keranjang.value.reduce((sum, item) => sum + item.price * item.jumlah, 0)
)

function hapusItem(index) {
  transaksiStore.hapusDariKeranjang(index)
}

function checkout() {
  alert('Pesanan telah diproses. Terima kasih!')
  transaksiStore.checkout() 
  // router.push('/orders')
}
</script>

<style scoped>
/* Styling kamu tetap dipakai tanpa diubah banyak */
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 2rem;
}

.container {
  display: flex;
  gap: 2rem;
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  max-width: 1200px;
  width: 100%;
}

.left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  text-align: center;
  line-height: 1.3;
}

.right {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.empty-message {
  color: #6b7280;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
}

.table-wrapper {
  overflow-x: auto;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  color: #1f2937;
  min-width: 600px;
}

.cart-table th,
.cart-table td {
  padding: 1rem 1.25rem;
  white-space: nowrap;
}

.cart-table thead tr {
  background-color: #ffedd5;
  border-bottom: 2px solid #fdba74;
}

.cart-table tbody tr:hover {
  background-color: #fff7ed;
  transition: background-color 0.3s ease;
}

.col-name {
  text-align: left;
  font-weight: 600;
}

.col-qty,
.col-action {
  text-align: center;
  font-weight: 600;
}

.col-price,
.total-label,
.total-value {
  text-align: right;
  font-weight: 600;
}

.total-label,
.total-value {
  font-size: 1.25rem;
  color: #f97316;
  font-weight: 800;
}

.delete-btn {
  color: #dc2626;
  font-weight: 600;
  background: none;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
}

.delete-btn:hover {
  color: #b91c1c;
}

.checkout-btn {
  align-self: flex-end;
  margin-top: 2rem;
  background-color: #f97316;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  font-weight: bold;
  border: none;
  box-shadow: 0 8px 24px rgba(251, 146, 60, 0.4);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.checkout-btn:hover {
  background-color: #ea580c;
  box-shadow: 0 10px 30px rgba(251, 146, 60, 0.6);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .left,
  .right {
    width: 100%;
  }

  .checkout-btn {
    align-self: center;
  }
}
</style>
