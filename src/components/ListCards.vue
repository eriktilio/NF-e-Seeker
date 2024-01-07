<template>
  <div class="container-fluid py-4">
    <div class="content">
      <h3>All Products</h3>
      <div class="list-options" @click="toggleIcon">
        <i class="bi" :class="iconClass"></i>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <Card
        v-for="(card, index) in sortedCardList"
        :key="index"
        :cardTitle="card.title"
        :cardContent="card.content"
        :imagem="card.imagem"
        :price="card.price"
        :last_update="card.last_update"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardList from "../mocks/list-cars.js";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cardList: [...CardList],
      isSortDown: true,
    };
  },
  computed: {
    iconClass() {
      return this.isSortDown ? "bi bi-sort-up" : "bi bi-sort-down";
    },
    sortedCardList() {
      const sortedList = [...this.cardList];
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
.list-options {
  border: 1px solid var(--gray);
  border-radius: 10px;
  padding: 0 0.5rem;
  margin: 0;
  cursor: pointer;
}
.card-list {
  display: flex;
}
</style>
