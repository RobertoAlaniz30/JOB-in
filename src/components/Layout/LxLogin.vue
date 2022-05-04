<template>
  <header>
    <img src="../../assets/logo.png" />
  </header>
  <div class="login-form-container">
    <slot> </slot>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  padding-bottom: 30px;
  padding-top: 30px;
  background-color: rgb(27, 27, 27);
}
img {
  width: 150px;
  height: 30px;
  object-fit: contain;
}
.login-form-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: calc(100% - 94px);
}
</style>
