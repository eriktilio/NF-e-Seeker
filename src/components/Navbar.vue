<template>
  <nav
    class="navbar fixed-top d-flex justify-content-center align-items-center px-5"
    style="background-color: #e3f2fd"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/favicon-32x32.png"
          alt="Logo"
          class="d-inline-block align-text-top"
        />
        NF-e Seeker
      </a>
      <form class="d-flex" role="search">
        <input
          class="form-control mr-2"
          type="search"
          placeholder="What is the name of the product?"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>
<style>
a {
  color: var(--blue);
}
input[type="search"] {
  width: 25rem;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
input[type="search"]:focus {
  width: 30rem;
}
.form-control {
  background-color: transparent !important;
  border-radius: 0;
  border-color: transparent;
  border-bottom-color: var(--blue);
}
.form-control:focus {
  box-shadow: none;
  border-color: transparent;
  border-bottom-color: var(--blue);
}
.btn-outline-success {
  box-shadow: none !important;
  color: var(--blue);
  border-color: var(--blue);
}
.btn-outline-success:hover,
.btn-outline-success:focus,
.btn-outline-success:active {
  color: #fff !important;
  background-color: var(--blue) !important;
  border-color: var(--blue) !important;
}
</style>
