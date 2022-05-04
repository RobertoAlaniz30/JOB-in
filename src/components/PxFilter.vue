<template>
  <div class="filters-container">
    <select class="select-filter-options">
      <option value="value1">Salary</option>
      <option value="value3">Ubication</option>
    </select>
  </div>
</template>
<style scoped>
.filters-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-direction: row;
}
.select-filter-options {
  height: 40px;
  width: 50%;
  border-radius: 8px;
  background-color: rgb(32, 32, 32);
  color: rgb(87, 87, 87);
  border: 1px rgb(162, 226, 162) solid;
}
.input {
  height: 40px;
  border-radius: 8px;
  background-color: rgb(32, 32, 32);
  color: rgb(87, 87, 87);
  border: 1px rgb(162, 226, 162) solid;
}
</style>
