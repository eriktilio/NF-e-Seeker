<template>
  <div class="category">
    <span
      v-for="(category, index) in categoryList"
      :key="index"
      typeof="button"
      :class="{ badge: true, active: category.active }"
      @click="emitSearch(category.query, index)"
    >
      {{ category.name }}
    </span>
  </div>
</template>

<script>
import CategoryList from "@/mocks/list-category";
import { reactive } from "vue";

export default {
  data() {
    return {
      categoryList: reactive(CategoryList),
    };
  },
  methods: {
    emitSearch(query, currentIndex) {
      // Atualiza o estado "active" da categoria
      this.categoryList.forEach((category, index) => {
        category.active = index === currentIndex;
      });

      // Emite o evento com a consulta
      this.$emit("search", query);
    },
  },
};
</script>

<style>
.category {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.badge {
  background-color: var(--blue);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.badge:hover {
  transform: scale(1.09);
}
.badge.active {
  transform: scale(1.09);
  background-color: var(--red);
}
span {
  color: var(--white);
  margin-bottom: 0.8rem;
}
</style>
