<template>
  <div class="container-fluid py-4">
    <h3>All Products</h3>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <Card
        v-for="(card, index) in cardList"
        :key="index"
        :cardTitle="card.title"
        :cardContent="card.content"
        :imagem="card.imagem"
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
      cardList: CardList,
    };
  },
};
</script>

<style>
h3 {
  margin-bottom: 2rem;
  color: var(--gray);
}
.card-list {
  display: flex;
}
</style>
