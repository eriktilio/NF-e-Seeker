<template>
  <div class="col">
    <div class="card border-secondary mb-4">
      <div class="row g-0">
        <div class="col-md-4 text-center">
          <img
            :src="imagem"
            :alt="cardTitle"
            style="
              width: 12rem;
              height: 12rem;
              margin: 0.5rem;
              object-fit: contain;
            "
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">R$ {{ price }}</h4>
            <h5>{{ cardTitle }}</h5>
            <p class="card-text">
              <i class="bi bi-shop"></i> {{ cardContent }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">{{
                formatDate(last_update)
              }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardTitle: String,
    cardContent: String,
    price: String,
    imagem: String,
    last_update: Date,
  },
  methods: {
    formatDate(date) {
      const day = date.getDay();
      const month = date.toLocaleString("default", {
        month: "long",
      });
      const year = date.getUTCFullYear();
      return `Last updated: ${day} de ${month}, ${year}`;
    },
  },
};
</script>
