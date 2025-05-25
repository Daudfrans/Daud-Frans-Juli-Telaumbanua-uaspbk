<template>
  <section class="orders-container max-w-4xl mx-auto p-6 bg-gradient-to-b from-white to-orange-50 rounded-2xl shadow-xl mt-10 border border-orange-200">
    <h1 class="orders-title text-4xl font-bold mb-8 text-orange-700 drop-shadow-sm tracking-wide text-center">
      Riwayat Pesanan
    </h1>

    <p v-if="orders.length === 0" class="empty-message text-gray-600 text-center py-16 text-xl">
      Belum ada pesanan.
    </p>

    <transition-group name="fade" tag="ul" class="space-y-6" v-else>
      <li
        v-for="order in orders"
        :key="order.id"
        class="order-item bg-white hover:bg-orange-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-orange-200 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
        @click="viewOrderDetail(order.id)"
      >
        <div class="flex justify-between items-center mb-4">
          <p class="order-id text-lg font-semibold text-orange-600">
            📦 ID: {{ order.id }}
          </p>
          <p
            :class="[
              'order-status px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center gap-2 shadow-sm',
              order.status === 'Selesai' ? 'bg-green-600' :
              order.status === 'Dikirim' ? 'bg-blue-600' :
              'bg-amber-500'
            ]"
          >
            <span v-if="order.status === 'Selesai'">✅</span>
            <span v-else-if="order.status === 'Dikirim'">🚚</span>
            <span v-else>⏳</span>
            {{ order.status }}
          </p>
        </div>

        <p class="order-date text-gray-500 mb-2 text-sm">
          🗓️ Tanggal: {{ formatDate(order.date) }}
        </p>

        <p class="order-detail-label text-base font-semibold mb-1 text-gray-800">
          📝 Rincian Pesanan:
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 pl-4">
          <li v-for="item in order.items" :key="item.id">
            {{ item.name }} x{{ item.qty }}
          </li>
        </ul>

        <p class="text-sm text-gray-500 mt-3 italic">
          Total item: {{ totalItems(order.items) }}
        </p>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 'ORD001',
          date: '2025-05-25',
          status: 'Selesai',
          items: [
            { id: 1, name: 'Nasi Goreng Spesial', qty: 1 },
            { id: 2, name: 'Mie Ayam Bakso', qty: 2 },
          ],
        },
        {
          id: 'ORD002',
          date: '2025-05-20',
          status: 'Dikirim',
          items: [{ id: 3, name: 'Sate Ayam Madura', qty: 3 }],
        },
      ],
    };
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return isNaN(date)
        ? 'Tanggal tidak valid'
        : date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
    },
    totalItems(items) {
      return items.reduce((sum, item) => sum + item.qty, 0);
    },
    viewOrderDetail(id) {
      // Idealnya arahkan ke halaman detail pesanan
      alert(`Detail pesanan ${id} belum tersedia.`);
    },
  },
};
</script>

<style scoped>
.orders-title {
  user-select: none;
}

.empty-message {
  font-size: 1.25rem;
  user-select: none;
}

.order-item {
  user-select: none;
}

.order-id,
.order-date {
  user-select: text;
}

.order-status {
  user-select: none;
  text-transform: uppercase;
}

.order-detail-label {
  user-select: none;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
