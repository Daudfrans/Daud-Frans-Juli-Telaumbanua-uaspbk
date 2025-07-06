<template>
  <section class="home-container">
    <h1 class="title">Selamat Datang di Foodiez!</h1>
    <p class="subtitle">Temukan makanan favoritmu dan pesan dengan mudah.</p>

    <!-- Daftar menu dari store -->
    <div class="menu-grid">
      <div
        v-for="item in menuStore.daftarMenu"
        :key="item.id"
        class="menu-card"
        @click="goToDetail(item.id)"
        role="button"
        tabindex="0"
        @keyup.enter="goToDetail(item.id)"
      >
        <img
          :src="item.image"
          :alt="`Foto ${item.name}`"
          class="menu-image"
          loading="lazy"
        />
        <h2 class="menu-name">{{ item.name }}</h2>
        <p class="menu-price">Rp {{ item.price.toLocaleString() }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useMenuStore } from '../stores/menuStore.js'

export default {
  setup() {
    const menuStore = useMenuStore()
    return { menuStore }
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/menu/${id}`)
    }
  }
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #f97316; /* orange-500 */
  text-align: center;
}

.subtitle {
  font-size: 1.125rem;
  color: #4b5563; /* gray-700 */
  margin-bottom: 2rem;
  text-align: center;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.menu-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgb(0 0 0 / 0.08);
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-card:hover,
.menu-card:focus {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgb(249 115 22 / 0.3); /* orange shadow */
}

.menu-image {
  width: 100%;
  max-width: 240px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  user-select: none;
}

.menu-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827; /* gray-900 */
  text-align: center;
}

.menu-price {
  font-weight: 700;
  color: #f97316; /* orange-500 */
  font-size: 1.125rem;
  text-align: center;
}

/* Accessibility focus */
.menu-card:focus {
  outline: 2px solid #f97316;
  outline-offset: 3px;
}
</style>
