<template>
  <div class="container-fluid py-4">
    <div class="skeleton-content">
      <div class="skeleton-content-title"></div>
      <div class="skeleton-options"></div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="index in 5" :key="index">
        <div class="card border-secondary mb-4 skeleton-loader">
          <div class="row g-0">
            <div class="col-md-4 text-center">
              <div class="skeleton-image"></div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="skeleton-title"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.skeleton-loader {
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 17rem;
  animation: loading 1s infinite alternate;
}

.skeleton-image {
  max-width: 12rem;
  height: 12rem;
  margin: 0.5rem;
  background-color: #f0f0f0;
}

.skeleton-title {
  width: 80%;
  height: 1.5rem;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
}

.skeleton-text {
  width: 100%;
  height: 1rem;
  background-color: #f0f0f0;
  margin-bottom: 0.5rem;
}

.skeleton-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  height: 2rem;
}

.skeleton-content-title {
  width: 40%;
  height: 2rem;
  background-color: #eee;
  border-radius: 4px;
}

.skeleton-options {
  width: 10%;
  height: 2rem;
  background-color: #eee;
  border-radius: 4px;
}

@keyframes loading {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
