<template>
  <span typeof="button" class="badge">Frutas e Vegetais</span>
  <span typeof="button" class="badge">Carnes e Aves</span>
  <span typeof="button" class="badge">Laticínios</span>
  <span typeof="button" class="badge">Padaria</span>
  <span typeof="button" class="badge">Congelados</span>
  <span typeof="button" class="badge">Bebidas</span>
  <span typeof="button" class="badge">Lanches e Doces</span>
  <span typeof="button" class="badge">Produtos de Limpeza</span>
  <span typeof="button" class="badge">Produtos de Higiene Pessoal</span>
</template>
<style>
.badge {
  background-color: var(--blue);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.badge:hover {
  transform: scale(1.1);
}
span {
  color: var(--white);
  margin: 0.3rem;
}
</style>
