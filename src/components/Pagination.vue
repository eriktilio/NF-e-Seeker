<template>
  <ul class="pagination">
    <li
      class="page-item"
      @click="previousPage"
      :class="{ disabled: currentPage === 1 }"
    >
      &#x276E;
    </li>
    <li class="page-item" v-if="startPage > 1" @click="goToPage(1)">1</li>
    <li v-if="startPage > 2" class="ellipsis">...</li>
    <li
      class="page-item"
      v-for="page in visiblePages"
      :key="page"
      :class="{ 'current-page': page === currentPage }"
      @click="goToPage(page)"
    >
      {{ page }}
    </li>
    <li v-if="endPage < totalPages - 1" class="ellipsis">...</li>
    <li
      class="page-item"
      v-if="endPage < totalPages"
      @click="goToPage(totalPages)"
    >
      {{ totalPages }}
    </li>
    <li
      class="page-item"
      @click="nextPage"
      :class="{ disabled: currentPage === totalPages }"
    >
      &#x276F;
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    visiblePageCount: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      const start = this.currentPage - Math.floor(this.visiblePageCount / 2);
      return Math.max(1, start);
    },
    endPage() {
      const end = this.startPage + this.visiblePageCount - 1;
      return Math.min(this.totalPages, end);
    },
    visiblePages() {
      return Array.from(
        { length: this.endPage - this.startPage + 1 },
        (_, i) => this.startPage + i
      );
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.emitPageChange(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.emitPageChange(this.currentPage + 1);
      }
    },
    goToPage(page) {
      this.emitPageChange(page);
    },
    emitPageChange(page) {
      this.$emit("page-change", page);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin: 0;
  user-select: none;
}
.page-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray);
  border-radius: 10px;
  padding: 0.3rem 0.7rem;
  margin: 0 0.2rem;
  min-width: 2.5rem;
  cursor: pointer;
}
.page-item.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.page-item:hover {
  background-color: var(--white);
}
.page-item.current-page {
  background-color: var(--blue);
  color: var(--white);
}
.ellipsis {
  padding: 0.5rem 0.2rem;
  pointer-events: none;
}
</style>
