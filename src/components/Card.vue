<script setup>
import imagem from "../assets/acucar.png";
</script>

<script>
export default {
  props: {
    cardTitle: String,
    cardContent: String,
  },
};
</script>

<template>
  <div class="card mb-4">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="imagem"
          class="image-card"
          :alt="cardTitle"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ cardTitle }}</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  background-color: var(--color-card);
}
.image-card {
  border-radius: 8px;
}
</style>
