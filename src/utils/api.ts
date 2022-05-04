import axios from "axios";
const ENDPOINT_PATH = "https://reqres.in/api/";

function signIn(email: string, password: string) {
  const user = { email, password };
  return axios.post(ENDPOINT_PATH + "regiser", user);
}

function login(user: string) {
  console.log("Hola");
  return axios.post(ENDPOINT_PATH + "login", user);
}

export default { signIn, login };
