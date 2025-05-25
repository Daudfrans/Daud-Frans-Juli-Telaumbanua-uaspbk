<template>
  <section class="review-container max-w-3xl mx-auto p-8 bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl mt-12 border border-orange-200">
    <h1 class="review-title text-4xl font-bold mb-8 text-orange-700 tracking-wide text-center">
      ✍️ Ulasan Makanan
    </h1>

    <form @submit.prevent="submitReview" class="space-y-6">
      <!-- Pilih Menu -->
      <label class="block font-medium text-gray-800">
        🍽️ Pilih Menu
        <select
          v-model="selectedMenuId"
          required
          class="input-select mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        >
          <option disabled value="">-- Pilih Menu --</option>
          <option v-for="menu in menuList" :key="menu.id" :value="menu.id">
            {{ menu.name }}
          </option>
        </select>
      </label>

      <!-- Nilai -->
      <label class="block font-medium text-gray-800">
        ⭐ Nilai (1-5)
        <input
          type="number"
          v-model.number="rating"
          min="1"
          max="5"
          required
          class="input-number mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </label>

      <!-- Komentar -->
      <label class="block font-medium text-gray-800">
        💬 Komentar
        <textarea
          v-model="comment"
          rows="4"
          placeholder="Tulis ulasan Anda dengan jujur dan sopan..."
          required
          class="textarea mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-800 resize-y shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        ></textarea>
      </label>

      <!-- Tombol Kirim -->
      <button
        type="submit"
        class="btn-submit w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
      >
        🚀 Kirim Ulasan
      </button>
    </form>

    <!-- Daftar Ulasan -->
    <div v-if="reviews.length" class="previous-reviews mt-12">
      <h2 class="text-2xl font-semibold mb-6 text-orange-700">🗂️ Ulasan Sebelumnya</h2>
      <transition-group name="fade" tag="ul" class="space-y-5">
        <li
          v-for="review in reviews"
          :key="review.id"
          class="review-item bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
        >
          <p class="review-menu font-semibold text-lg text-orange-600 flex items-center gap-2">
            🍛 {{ review.menuName }}
            <span class="review-rating text-gray-700 text-sm ml-auto">
              ⭐ {{ review.rating }}/5
            </span>
          </p>
          <p class="review-comment text-gray-800 mt-2 whitespace-pre-line leading-relaxed">
            {{ review.comment }}
          </p>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { id: 1, name: 'Nasi Goreng Spesial' },
        { id: 2, name: 'Mie Ayam Bakso' },
        { id: 3, name: 'Sate Ayam Madura' },
      ],
      selectedMenuId: '',
      rating: null,
      comment: '',
      reviews: [],
      reviewIdCounter: 1,
    };
  },
  methods: {
    submitReview() {
      const menu = this.menuList.find((m) => m.id === this.selectedMenuId);
      if (!menu) return;

      this.reviews.unshift({
        id: this.reviewIdCounter++,
        menuName: menu.name,
        rating: this.rating,
        comment: this.comment.trim(),
      });

      // Reset form
      this.selectedMenuId = '';
      this.rating = null;
      this.comment = '';
    },
  },
};
</script>

<style scoped>
.review-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(249, 115, 22, 0.15);
}

.review-title {
  user-select: none;
}

.input-select,
.input-number,
.textarea {
  font-size: 1rem;
  user-select: text;
}

.btn-submit {
  font-size: 1.125rem;
  user-select: none;
  cursor: pointer;
}

.previous-reviews {
  user-select: none;
}

.review-item {
  user-select: none;
  cursor: default;
  transition: all 0.3s ease-in-out;
}

.review-menu {
  user-select: text;
}

.review-rating {
  font-weight: 600;
  color: #ea580c;
}

.review-comment {
  user-select: text;
  white-space: pre-wrap;
  font-size: 1rem;
  line-height: 1.5;
}

/* Transisi animasi ulasan */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
