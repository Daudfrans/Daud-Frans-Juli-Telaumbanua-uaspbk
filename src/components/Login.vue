<template>
  <section class="login-container" aria-label="Halaman Login Foodiez">
    <h1 class="title">Login Foodiez</h1>
    <form @submit.prevent="login" class="login-form" novalidate>
      <label for="email" class="label">Email</label>
      <input
        v-model="email"
        id="email"
        type="email"
        class="input"
        placeholder="Masukkan email"
        required
        autocomplete="username"
      />

      <label for="password" class="label">Password</label>
      <input
        v-model="password"
        id="password"
        type="password"
        class="input"
        placeholder="Masukkan password"
        required
        autocomplete="current-password"
      />

      <button type="submit" class="btn-login">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        // Simulasi login sukses
        localStorage.setItem('token', 'dummy-token');
        this.$router.push('/home');
      } else {
        alert('Harap isi email dan password');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 6rem auto;
  padding: 2.5rem 2rem;
  border: 1px solid #e5e7eb; /* gray-300 */
  border-radius: 12px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.08);
  background-color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #f97316; /* orange-500 */
  margin-bottom: 2rem;
  text-align: center;
  user-select: none;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151; /* gray-700 */
  user-select: none;
}

.input {
  padding: 0.6rem 0.9rem;
  border: 1.5px solid #d1d5db; /* gray-300 */
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #f97316; /* orange-500 */
  box-shadow: 0 0 6px rgba(249, 115, 22, 0.5);
}

.btn-login {
  background-color: #f97316;
  color: white;
  font-weight: 700;
  padding: 0.75rem 0;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.btn-login:hover {
  background-color: #ea580c;
  box-shadow: 0 6px 15px rgba(234, 88, 12, 0.5);
}

/* Responsive */
@media (max-width: 440px) {
  .login-container {
    margin: 4rem 1rem;
    padding: 2rem 1.5rem;
  }
}
</style>
