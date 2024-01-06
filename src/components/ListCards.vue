<template>
  <div class="container-fluid pt-5">
    <h3>All Products</h3>
    <Card
      v-for="(card, index) in cardList"
      :key="index"
      :cardTitle="card.title"
      :cardContent="card.content"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cardList: [
        {
          title: "Card 1",
          content: "Conteúdo do Card 1",
        },
        {
          title: "Card 2",
          content: "Conteúdo do Card 2",
        },
        {
          title: "Card 3",
          content: "Conteúdo do Card 3",
        },
        {
          title: "Card 4",
          content: "Conteúdo do Card 4",
        },
        {
          title: "Card 5",
          content: "Conteúdo do Card 5",
        },
        {
          title: "Card 6",
          content: "Conteúdo do Card 6",
        },
      ],
    };
  },
};
</script>

<style>
.card-list {
  display: flex;
}
</style>
