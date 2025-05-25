<template>
  <section class="menu-detail-container">
    <button @click="$router.back()" class="btn-back" aria-label="Kembali ke halaman sebelumnya">
      ← Kembali
    </button>

    <h1 class="menu-title">{{ menu.name }}</h1>
    <p class="menu-description">{{ menu.description }}</p>
    <p class="menu-price">Rp {{ menu.price.toLocaleString() }}</p>

    <button @click="addToCart" class="btn-add-cart" aria-label="Tambah ke keranjang">
      Tambah ke Keranjang
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menu: null,
      dummyMenu: [
        { id: 1, name: 'Nasi Goreng Spesial', description: 'Nasi goreng dengan telur dan ayam.', price: 25000 },
        { id: 2, name: 'Mie Ayam Bakso', description: 'Mie ayam dengan bakso lezat.', price: 20000 },
        { id: 3, name: 'Sate Ayam Madura', description: 'Sate ayam dengan bumbu khas madura.', price: 30000 },
      ],
    };
  },
  mounted() {
    const menuId = parseInt(this.$route.params.id);
    this.menu = this.dummyMenu.find(m => m.id === menuId) || { name: 'Menu tidak ditemukan', description: '', price: 0 };
  },
  methods: {
    addToCart() {
      alert(`Menu "${this.menu.name}" berhasil ditambahkan ke keranjang.`);
      // Tambahkan logika cart di sini jika perlu
    },
  },
};
</script>

<style scoped>
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
  color: #f97316; /* orange-500 */
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
  color: #ea580c; /* orange-600 */
  outline: none;
  text-decoration: underline;
}

.menu-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827; /* gray-900 */
  margin-bottom: 1rem;
  user-select: none;
}

.menu-description {
  font-size: 1.125rem;
  color: #4b5563; /* gray-700 */
  margin-bottom: 2rem;
  user-select: none;
  line-height: 1.6;
}

.menu-price {
  font-size: 1.75rem;
  font-weight: 700;
  color: #f97316; /* orange-500 */
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
