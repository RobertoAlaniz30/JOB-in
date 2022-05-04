<template>
  <lx-home>
    <template #input>
      <px-input />
    </template>
    <template #filters>
      <px-filter />
    </template>

    <template #jobsCards>
      <px-jobs-cards :jobs="jobs" />
    </template>
  </lx-home>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LxHome from "../components/Layout/LxHome.vue";
import PxJobsCards from "../components/PxJobsCards.vue";
import PxFilter from "../components/PxFilter.vue";
import PxInput from "../components/PxInput.vue";
import Job from "../types/Job";

export default defineComponent({
  name: "Home",
  components: { LxHome, PxJobsCards, PxFilter, PxInput },
  setup() {
    let jobs = ref<Job[]>([
      {
        id: 0,
        title: "engineer",
        location: "Mexico",
        salary: 1000,
      },
      {
        id: 1,
        title: "engineer",
        location: "Mexico",
        salary: 1000,
      },
      {
        id: 2,
        title: "engineer",
        location: "Mexico",
        salary: 1000,
      },
      {
        id: 3,
        title: "engineer",
        location: "Mexico",
        salary: 1000,
      },
    ]);
    return { jobs };
  },
});
</script>
