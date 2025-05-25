<template>
  <header v-if="showNavbar" class="navbar">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        🍴 Foodiez
      </router-link>

      <!-- Menu Links -->
      <nav class="nav-links">
        <router-link to="/" exact class="nav-item" active-class="active-link">Home</router-link>
        <router-link to="/cart" class="nav-item" active-class="active-link">Keranjang</router-link>
        <router-link to="/orders" class="nav-item" active-class="active-link">Pesanan</router-link>
        <router-link to="/review" class="nav-item" active-class="active-link">Ulasan</router-link>
        <router-link to="/profile" class="nav-item" active-class="active-link">Profil</router-link>
      </nav>

      <!-- Logout Button -->
      <button @click="logout" class="btn-logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    showNavbar() {
      // Sembunyikan navbar jika route saat ini adalah /login
      return this.$route.path !== '/login';
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  color: #f97316; /* orange-500 */
  text-decoration: none;
  user-select: none;
  transition: color 0.3s ease;
}

.logo:hover {
  color: #ea580c; /* orange-600 */
  text-shadow: 0 0 6px rgba(234, 88, 12, 0.6);
}

.nav-links {
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #4b5563; /* gray-700 */
  flex-wrap: wrap;
}

.nav-item {
  color: inherit;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  user-select: none;
  box-shadow: inset 0 0 0 0 #f97316;
  position: relative;
}

.nav-item:hover {
  color: #f97316;
  background-color: #fff7ed; /* light orange background */
  box-shadow: inset 0 -3px 0 0 #f97316;
  transform: scale(1.05);
}

.active-link {
  color: #f97316;
  font-weight: 700;
  border-bottom: 3px solid #f97316;
  padding-bottom: 6px;
  box-shadow: 0 3px 8px rgba(249, 115, 22, 0.4);
}

.btn-logout {
  background-color: #f97316;
  border: none;
  color: white;
  padding: 10px 22px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.25s ease;
  user-select: none;
  box-shadow: 0 6px 16px rgba(249, 115, 22, 0.5);
  font-size: 1rem;
  letter-spacing: 0.03em;
}

.btn-logout:hover {
  background-color: #ea580c;
  box-shadow: 0 10px 24px rgba(234, 88, 12, 0.7);
  transform: translateY(-2px);
}

/* Fokus accesibility */
.nav-item:focus,
.btn-logout:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.7);
}

/* Responsive for smaller screens */
@media (max-width: 640px) {
  .container {
    flex-direction: column;
    gap: 16px;
    padding: 12px 16px;
  }

  .nav-links {
    gap: 1.2rem;
    justify-content: center;
  }

  .btn-logout {
    width: 100%;
    padding: 12px 0;
    font-size: 1.1rem;
  }
}

</style>