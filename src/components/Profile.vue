<template>
  <section class="profile-container max-w-md mx-auto p-10 bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl mt-16 border border-orange-200">
    <h1 class="profile-title text-4xl font-extrabold mb-10 text-orange-700 text-center tracking-wide select-none">
      🙋‍♂️ Profil Pengguna
    </h1>

    <form @submit.prevent="updateProfile" class="space-y-6">
      <!-- Nama -->
      <label class="block font-medium text-gray-800 select-none">
        👤 Nama
        <input
          v-model="profile.name"
          type="text"
          required
          class="input-field mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          placeholder="Masukkan nama lengkap"
        />
      </label>

      <!-- Email -->
      <label class="block font-medium text-gray-800 select-none">
        📧 Email
        <input
          v-model="profile.email"
          type="email"
          required
          class="input-field mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          placeholder="email@example.com"
        />
      </label>

      <!-- Telepon -->
      <label class="block font-medium text-gray-800 select-none">
        📱 No. Telepon
        <input
          v-model="profile.phone"
          type="tel"
          class="input-field mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          placeholder="081234567890"
        />
      </label>

      <!-- Tombol Simpan -->
      <button
        type="submit"
        class="btn-save w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
      >
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
      // Tambahkan integrasi API atau localStorage jika diperlukan
    },
  },
};
</script>

<style scoped>
.profile-container {
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.2);
  transition: all 0.3s ease-in-out;
}

.profile-title {
  user-select: none;
}

.input-field {
  font-size: 1rem;
  user-select: text;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field:focus {
  border-color: #f97316;
  box-shadow: 0 0 8px rgba(249, 115, 22, 0.4);
  outline: none;
}

.btn-save {
  font-size: 1.125rem;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(249, 115, 22, 0.3);
  transition: all 0.25s ease-in-out;
}

.btn-save:hover {
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.6);
}

/* Responsiveness */
@media (max-width: 640px) {
  .profile-container {
    padding: 2rem 1.5rem;
  }
}
</style>
