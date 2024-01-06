<template>
  <nav class="navbar py-4" style="background-color: transparent">
    <div class="search-bar">
      <input
        id="search-input"
        type="text"
        name="search-input"
        placeholder="Search for the product"
        value=""
      />
      <button id="search-submit" type="submit" name="search-submit">
        <svg
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
          class="search-icon"
        >
          <path
            id="icon-search"
            fill="var(--gray)"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
<style>
.label {
  font-size: 0.625rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: +1.3px;
  margin-bottom: 1rem;
}
.search-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#search-input {
  width: 100%;
  height: 2.8rem;
  background-color: var(--white);
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
}
#search-submit {
  width: 3.5rem;
  height: 2.8rem;
  margin-left: -3.5rem;
  background: none;
  border: none;
  outline: none;
}
#search-submit:hover {
  cursor: pointer;
}
</style>
