<template>
  <div>
    <div class="post-list" v-for="postulation in state" :key="postulation.id">
      <p>{{ postulation.title }}</p>
      <p>{{ postulation.salary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Store from "@/store/store";

export default defineComponent({
  name: "Profile",
  setup() {
    const state = computed(() => Store.postulations);
    return {
      state,
    };
  },
});
</script>

<style>
.post-list {
  color: white;
}
</style>
