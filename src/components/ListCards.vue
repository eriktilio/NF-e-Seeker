<template>
  <div class="container-fluid py-4" v-if="cards.length > 0 && !loading">
    <div class="content">
      <h3>All Products</h3>
      <div class="d-flex">
        <Pagination
          :totalPages="totalPages"
          :currentPage="currentPage"
          @page-change="emitPageChange"
        />
        <div class="item-option d-flex justify-content-end" @click="toggleIcon">
          <i class="bi" :class="iconClass"></i>
        </div>
      </div>
    </div>
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <Card
          v-for="(card, index) in sortedCardList"
          :key="index"
          :title="card.title"
          :local="card.local"
          :address="card.address"
          :imagem="card.url_image"
          :price="card.price"
          :last_update="card.last_update"
        />
      </div>
    </div>
  </div>
  <Skeleton v-else-if="loading" />
  <div class="d-flex py-4" v-else>
    <h4>Search for a product in the search bar :)</h4>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
import Skeleton from "@/components/Skeleton.vue";

export default {
  components: {
    Card,
    Skeleton,
    Pagination,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSortDown: true,
    };
  },
  computed: {
    iconClass() {
      return this.isSortDown ? "bi bi-sort-up" : "bi bi-sort-down";
    },
    sortedCardList() {
      const sortedList = [...this.cards];
      if (this.isSortDown) {
        sortedList.sort((a, b) => a.price.localeCompare(b.price));
      } else {
        sortedList.sort((a, b) => b.price.localeCompare(a.price));
      }
      return sortedList;
    },
  },
  methods: {
    toggleIcon() {
      this.isSortDown = !this.isSortDown;
    },
    emitPageChange(page) {
      this.$emit("page-change", page);
    },
  },
};
</script>

<style>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: var(--gray);
}
.content i {
  font-size: 1.66rem;
}
.item-option {
  border: 1px solid var(--gray);
  border-radius: 10px;
  padding: 0 0.5rem;
  margin-left: 1.5rem;
  cursor: pointer;
}
.item-option:hover {
  background-color: var(--white);
}
.card-list {
  display: flex;
}
@media (max-width: 767px) {
  .content {
    flex-direction: column;
  }
}
</style>
