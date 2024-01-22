<template>
  <div class="col">
    <div class="card border-secondary mb-4">
      <div class="row g-0">
        <div class="col-md-4 text-center">
          <img
            :src="imagem"
            :alt="title"
            style="
              max-width: 12rem;
              height: 12rem;
              margin: 0.5rem;
              object-fit: contain;
            "
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">R$ {{ price }}</h4>
            <h5>{{ title }}</h5>
            <p class="card-text"><i class="bi bi-shop"></i> {{ local }}</p>
            <small class="text-body-secondary"
              ><i class="bi bi-geo-alt-fill"></i>{{ address }}</small
            >
            <p class="card-text">
              <small class="text-body-secondary"
                ><i class="bi bi-clock"></i> {{ last_update }}</small
              >
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
    title: String,
    local: String,
    address: String,
    price: String,
    imagem: String,
    last_update: String,
  },
};
</script>
<style>
.card {
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-height: 17rem;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.bi-geo-alt-fill {
  color: var(--red);
}
</style>
