<template>
  <div class="col">
    <div class="card border-secondary mb-4">
      <div class="row g-0">
        <div class="col-md-4 text-center">
          <img
            :src="imagem"
            :alt="cardTitle"
            style="width: 12rem; height: auto"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ cardTitle }}</h5>
            <p class="card-text">
              {{ cardContent }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">{{ cardContent }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imagem from "../assets/corona.png";
</script>

<script>
export default {
  props: {
    cardTitle: String,
    cardContent: String,
  },
};
</script>
