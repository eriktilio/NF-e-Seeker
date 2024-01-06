<template>
  <div class="container-md">
    <SearchBar />
    <Category />
    <ListCards />
  </div>
</template>

<script setup>
import Category from "@/components/Category.vue";
import ListCards from "@/components/ListCards.vue";
import SearchBar from "@/components/SearchBar.vue";
</script>
