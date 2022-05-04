<template>
  <div>
    <px-nav-bar />
    <main class="main-container">
      <slot name="input"> </slot>
      <slot name="filters"> </slot>
      <slot name="jobsCards"></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PxNavBar from "../PxNavBar.vue";

export default defineComponent({
  name: "LayoutHome",
  components: { PxNavBar },
});
</script>

<style scoped>
div {
  height: 100%;
}
.main-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
