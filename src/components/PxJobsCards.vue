<template>
  <div class="jobs-main-container">
    <article class="jobs-cards" v-for="job in jobs" :key="job.id">
      <div class="job-information">
        <div class="job-main-information">
          <p id="title">{{ job.title }}</p>
          <p id="salary">${{ job.salary }}</p>
          <span class="job-location-information">
            <img src="../assets/location.png" />
            <p id="location">{{ job.location }}</p>
          </span>
        </div>
        <div class="job-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            asperiores, perspiciatis laudantium corrupti commodi tempora
            aspernatur ipsa explicabo reiciendis, officia debitis architecto,
            provident velit nulla molestiae ipsum vitae. Quam, expedita?
          </p>
        </div>
      </div>
      <div class="button-container">
        <button @click="addJob(job)">Postular</button>
      </div>
      <div></div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setPostulations } from "@/store/store";
import Job from "../types/Job";

export default defineComponent({
  name: "JobsCards",
  props: {
    jobs: {
      required: true,
      type: Array,
    },
  },
  methods: {
    addJob(job: Job): void {
      setPostulations(job);
    },
  },
});
</script>

<style scoped>
.jobs-main-container {
  padding: 0.5rem;
  background-color: rgb(25, 24, 24);
  border-radius: 8px;
}
.jobs-cards {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: rgb(31, 29, 29);
  border-radius: 8px;
  border: 1px rgb(32, 48, 32) solid;
}
.job-main-information #title {
  font-size: 2.3rem;
  margin-left: 5px;
}
.job-main-information #salary {
  font-size: 1.3rem;
  margin-left: 5px;
  color: rgb(163, 226, 163);
}
.job-location-information img {
  width: 27px;
  height: 1.2rem;
  object-fit: contain;
}
.job-location-information p {
  display: inline;
  width: 20px;
  height: 30px;

  font-size: 1.3rem;
}

.job-information {
  color: rgb(189, 202, 194);
  text-align: left;
}
.button-container {
  margin-top: 30px;
  margin-bottom: 10px;
}
.button-container button {
  width: 100px;
  height: 25px;
  background-color: black;
  border: 1px rgb(162, 226, 162) solid;
  border-radius: 8px;
  color: rgb(162, 226, 162);
}
/*Hover*/
.jobs-cards:hover {
  box-shadow: 1px 1px 25px 10px rgba(93, 132, 116, 0.51);
}
</style>
