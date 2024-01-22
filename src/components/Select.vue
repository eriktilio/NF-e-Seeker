<template>
  <div class="list-filters">
    <select class="form-select" aria-label="Select time">
      <option value="0">Mais recente</option>
      <option value="24">24h</option>
      <option value="48">48h</option>
      <option value="165">7 dias</option>
    </select>
    <select class="form-select" aria-label="Select Municipality">
      <option value="manaus">Manaus</option>
      <option value="coari">Coari</option>
      <option value="parintins">Parintins</option>
    </select>
  </div>
</template>
<style>
.list-filters {
  display: flex;
  gap: 2rem;
}
.form-select {
  display: flex;
  height: 2.5rem;
  min-width: 10rem;
  outline: none;
  border: none;
  border-bottom: 2px solid var(--gray);
}
option.bi-fire {
  color: var(--red);
}
</style>
