<template>
  <section class="riwayat-container">
    <div class="riwayat-box">
      <h1 class="riwayat-title">Riwayat Pesanan</h1>

      <p v-if="orders.length === 0" class="riwayat-empty">
        Belum ada pesanan.
      </p>

      <div v-else class="riwayat-table-wrapper">
        <table class="riwayat-table">
          <thead>
            <tr>
              <th>ID Pesanan</th>
              <th>Tanggal</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>#{{ order.id }}</td>
              <td>{{ formatDate(order.waktu) }}</td>
              <td>
                <ul>
                  <li v-for="item in order.items" :key="item.id">
                    {{ item.name }} x{{ item.jumlah }}
                  </li>
                </ul>
              </td>
              <td class="text-right">Rp {{ order.total.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTransaksiStore } from '../stores/transaksiStore.js'

const transaksiStore = useTransaksiStore()
const orders = computed(() => transaksiStore.riwayatTransaksi.reverse())

onMounted(() => {
  transaksiStore.fetchRiwayatTransaksi()
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return isNaN(date)
    ? 'Tanggal tidak valid'
    : date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
}
</script>

<style scoped>
.riwayat-container {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.riwayat-box {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #fdba74;
  box-shadow: 0 8px 24px rgba(253, 186, 116, 0.2);
}

.riwayat-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #ea580c;
  margin-bottom: 2rem;
}

.riwayat-empty {
  text-align: center;
  font-size: 1.25rem;
  color: #6b7280;
  padding: 4rem 0;
}

.riwayat-table-wrapper {
  overflow-x: auto;
}

.riwayat-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  font-size: 0.95rem;
}

.riwayat-table thead {
  background-color: #fff7ed;
}

.riwayat-table th,
.riwayat-table td {
  border: 1px solid #fcd34d;
  padding: 1rem;
  vertical-align: top;
  text-align: left;
}

.riwayat-table td ul {
  padding-left: 1.25rem;
  list-style: disc;
}

.riwayat-table td.text-right {
  text-align: right;
  font-weight: bold;
  color: #ea580c;
}

.riwayat-table tbody tr:hover {
  background-color: #fffaf0;
  transition: background-color 0.3s ease;
}
</style>
