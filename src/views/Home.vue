<template>
  <div class="container-md">
    <SearchBar @search="handleSearch" />
    <Category @search="handleSearch" />
    <ListCards
      :cards="searchResults"
      :loading="loading"
      :totalPages="totalPages"
      :currentPage="currentPage"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import Category from "@/components/Category.vue";
import ListCards from "@/components/ListCards.vue";
import SearchBar from "@/components/SearchBar.vue";

import api from "@/service/api";
import { ref } from "vue";

let searchResults = ref([]);
let currentSearch = ref("");
let loading = ref(false);
let currentPage = ref(1);
let totalPages = ref(1);

const handlePageChange = (page) => {
  currentPage.value = page;
  handleSearch(currentSearch);
};

const handleSearch = async (query) => {
  if (currentSearch !== query) currentPage.value = 1;
  const searchQuery = query;
  currentSearch = query;
  loading.value = true;

  try {
    const { data } = await api.post("scrape/", {
      item: searchQuery,
      page: currentPage.value,
    });

    searchResults.value = data.data;
    totalPages.value = data.total_pages;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  } finally {
    loading.value = false;
  }
};
</script>
