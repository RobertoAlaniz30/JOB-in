<template>
  <form class="form-container">
    <img
      src="https://cdn1.iconfinder.com/data/icons/circle-outlines-colored/512/User_Account_Avatar_Person_Profile_Login_Human-512.png"
    />
    <input
      class="input-form"
      type="text"
      placeholder="Email"
      id="user"
      v-model="Username"
    />
    <div class="comp-container"><px-empty-user v-show="!Username" /></div>
    <input
      class="input-form"
      type="password"
      placeholder="Password"
      id="password"
      v-model="Password"
    />
    <div class="comp-container">
      <px-empty-pass v-if="!Password" />
    </div>
    <input
      class="input-form"
      type="password"
      placeholder="Confirm password"
      id="password"
      v-model="Password"
    />
    <button class="primary-button" type="submit" v-on:click.prevent="">
      Login
    </button>
  </form>
</template>

<script>
import PxEmptyUser from "@/components/PxEmptyUser.vue";
import PxEmptyPass from "@/components/PxEmptyPass.vue";
// import api from "@/api.js";

export default {
  name: "SignIn",
  components: { PxEmptyUser, PxEmptyPass },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // async SignIn() {
    //   try {
    //     await api.signIn(this.email, this.password);
    //     this.$route.push("/tasks");
    //   } catch {
    //     console.log("Algo salio mal ");
    //   }
    // },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 30%;
  padding: 20px;
  padding-bottom: 80px;
  background-color: rgb(27, 27, 27);
  border-radius: 8px;
}
img {
  width: 3rem;
  height: 3rem;
  margin-bottom: 20px;
}
.input-form {
  background-color: rgb(27, 27, 27);
  border: none;
  border-bottom: 1px rgb(162, 226, 162) solid;
  width: 100%;
  height: 30px;
  font-size: 1rem;
}
.primary-button {
  width: 90%;
  height: 30px;
  background-color: black;
  border-radius: 16px;
  border: 1px rgb(162, 226, 162) solid;
  color: rgb(162, 226, 162);
  margin-top: 20px;
}

.comp-container {
  height: 1.5rem;
}
</style>
