<template>
  <section class="profile-container">
    <h1 class="profile-title">🙋‍♂️ Profil Pengguna</h1>

    <form @submit.prevent="updateProfile" class="profile-form">
      <!-- Nama -->
      <label class="form-label">
        👤 Nama
        <input
          v-model="profile.name"
          type="text"
          required
          class="form-input"
          placeholder="Masukkan nama lengkap"
        />
      </label>

      <!-- Email -->
      <label class="form-label">
        📧 Email
        <input
          v-model="profile.email"
          type="email"
          required
          class="form-input"
          placeholder="email@example.com"
        />
      </label>

      <!-- Telepon -->
      <label class="form-label">
        📱 No. Telepon
        <input
          v-model="profile.phone"
          type="tel"
          class="form-input"
          placeholder="081234567890"
        />
      </label>

      <!-- Tombol Simpan -->
      <button type="submit" class="btn-save">
        💾 Simpan Profil
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: 'Daud Frans Juli Telaumbanua',
        email: 'daud@example.com',
        phone: '233510575',
      },
    };
  },
  methods: {
    updateProfile() {
      alert('✅ Profil berhasil diperbarui!');
      // Tambahkan penyimpanan ke localStorage atau API di sini jika diperlukan
    },
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 500px;
  margin: 4rem auto;
  padding: 2.5rem;
  border-radius: 20px;
  background: linear-gradient(to bottom right, #ffffff, #fff7ed);
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.2);
  border: 1px solid #fdba74;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.profile-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #ea580c;
  margin-bottom: 2rem;
  user-select: none;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-label {
  font-weight: 600;
  color: #374151;
  user-select: none;
  display: block;
}

.form-input {
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #fff;
  color: #111827;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: #f97316;
  box-shadow: 0 0 6px rgba(249, 115, 22, 0.4);
  outline: none;
}

.btn-save {
  background-color: #f97316;
  color: white;
  padding: 0.85rem;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(249, 115, 22, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-save:hover {
  background-color: #ea580c;
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.6);
  transform: scale(1.02);
}

.btn-save:active {
  transform: scale(0.98);
}

/* Responsive */
@media (max-width: 600px) {
  .profile-container {
    padding: 2rem 1.5rem;
  }
}
</style>
