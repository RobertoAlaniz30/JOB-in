<template>
  <lx-login>
    <form class="form-container">
      <img
        src="https://cdn1.iconfinder.com/data/icons/circle-outlines-colored/512/User_Account_Avatar_Person_Profile_Login_Human-512.png"
      />
      <input
        class="input-form"
        type="text"
        placeholder="Username"
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
      <button class="primary-button" type="submit" v-on:click.prevent="login">
        Login
      </button>
      <div>
        <span class="login">Aun no tienes cuenta?</span>
        <router-link :to="`/SignIn`" class="login"> Registrate </router-link>
      </div>
    </form>
  </lx-login>
</template>

<script lang="ts">
import PxEmptyUser from "../components/PxEmptyUser.vue";
import PxEmptyPass from "../components/PxEmptyPass.vue";
import LxLogin from "../components/Layout/LxLogin.vue";
import User from "../types/User";
import api from "../utils/api";

export default {
  name: "SignIn",
  components: { PxEmptyUser, PxEmptyPass, LxLogin },
  data() {
    return {
      Username: "",
      Password: "",
      aviso: "Password",
    };
  },
  methods: {
    async login() {
      let user: User = {
        email: this.Username,
        password: this.Password,
      };
      try {
        await api.login(user.email);
        this.$router.push("/Home");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60%;
  max-width: 340px;
  margin: 0 auto;
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
  /* border-radius: 12px; */
  width: 100%;
  height: 30px;
  background-color: rgb(27, 27, 27);
  border: none;
  border-bottom: 1px rgb(162, 226, 162) solid;
  font-size: 1rem;
}
.primary-button {
  width: 90%;
  height: 30px;
  color: rgb(162, 226, 162);
  background-color: black;
  border-radius: 16px;
  border: 1px rgb(162, 226, 162) solid;
  margin-bottom: 20px;
}

.login {
  font-size: 15px;
  color: rgb(146, 142, 142);
}

.comp-container {
  height: 1.5rem;
}
</style>
