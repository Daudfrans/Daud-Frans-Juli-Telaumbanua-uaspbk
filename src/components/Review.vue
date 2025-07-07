<template>
  <section class="review-container">
    <h1 class="review-title">✍️ Ulasan Makanan</h1>

    <form @submit.prevent="submitReview" class="review-form">
      <!-- Pilih Menu -->
      <label class="form-label">
        🍽️ Pilih Menu
        <select v-model="selectedMenuId" required class="input-select">
          <option disabled value="">-- Pilih Menu --</option>
          <option v-for="menu in menuList" :key="menu.id" :value="menu.id">
            {{ menu.name }}
          </option>
        </select>
      </label>

      <!-- Nilai -->
      <label class="form-label">
        ⭐ Nilai (1-5)
        <input
          type="number"
          v-model.number="rating"
          min="1"
          max="5"
          required
          class="input-number"
        />
      </label>

      <!-- Komentar -->
      <label class="form-label">
        💬 Komentar
        <textarea
          v-model="comment"
          rows="4"
          placeholder="Tulis ulasan Anda dengan jujur dan sopan..."
          required
          class="textarea"
        ></textarea>
      </label>

      <!-- Tombol Kirim -->
      <button type="submit" class="btn-submit">
        🚀 Kirim Ulasan
      </button>
    </form>

    <!-- Daftar Ulasan -->
    <div v-if="reviews.length" class="previous-reviews">
      <h2 class="review-subtitle">🗂️ Ulasan Sebelumnya</h2>
      <transition-group name="fade" tag="ul" class="review-list">
        <li v-for="review in reviews" :key="review.id" class="review-item">
          <p class="review-menu">
            🍛 {{ review.menuName }}
            <span class="review-rating">
              ⭐ {{ review.rating }}/5
            </span>
          </p>
          <p class="review-comment">
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

      this.selectedMenuId = '';
      this.rating = null;
      this.comment = '';
    },
  },
};
</script>

<style scoped>
.review-container {
  max-width: 720px;
  margin: 3rem auto;
  padding: 2rem;
  background: linear-gradient(to bottom right, #ffffff, #fff7ed);
  border-radius: 20px;
  border: 1px solid #fdba74;
  box-shadow: 0 10px 25px rgba(249, 115, 22, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.review-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ea580c;
  text-align: center;
  margin-bottom: 2rem;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-label {
  font-weight: 600;
  color: #374151;
  display: block;
}

.input-select,
.input-number,
.textarea {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1.5px solid #d1d5db;
  font-size: 1rem;
  background-color: #fff;
  color: #111827;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.input-select:focus,
.input-number:focus,
.textarea:focus {
  border-color: #f97316;
  box-shadow: 0 0 6px rgba(249, 115, 22, 0.4);
  outline: none;
}

.btn-submit {
  background-color: #f97316;
  color: white;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.85rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(249, 115, 22, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-submit:hover {
  background-color: #ea580c;
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.6);
  transform: scale(1.02);
}

.btn-submit:active {
  transform: scale(0.98);
}

/* Ulasan sebelumnya */
.previous-reviews {
  margin-top: 3rem;
}

.review-subtitle {
  font-size: 1.75rem;
  font-weight: bold;
  color: #ea580c;
  margin-bottom: 1.5rem;
}

.review-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.review-item {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
}

.review-item:hover {
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.2);
}

.review-menu {
  font-weight: bold;
  font-size: 1.1rem;
  color: #ea580c;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.review-rating {
  font-weight: 600;
  color: #ea580c;
  font-size: 0.95rem;
}

.review-comment {
  color: #1f2937;
  margin-top: 0.75rem;
  line-height: 1.6;
  white-space: pre-wrap;
}

/* Animasi transisi */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* Responsiveness */
@media (max-width: 640px) {
  .review-container {
    padding: 1.5rem;
  }
}
</style>
