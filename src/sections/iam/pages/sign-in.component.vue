<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignInRequest} from "../model/sign-in.request.js";

export default {
  name: "sign-in",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.username, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
    }
  }
}
</script>

<template>
  <div>
    <h3>Sign In</h3>
    <p class="p-fluid">Please enter your username and password to sign in.</p>
    <div class="container">
      <form @submit.prevent="onSignIn">
        <div class="p-fluid">
          <div class="p-field mt-5">
            <pv-float-label class="input">
              <label for="username">Username</label>
              <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username}"/>
            </pv-float-label>
          </div>
          <div class="p-field mt-5">
            <pv-float-label class="input">
              <label for="password">Password</label>
              <pv-input-text id="password" v-model="password" :class="{'p-invalid': !password}" type="password"/>
            </pv-float-label>
          </div>
          <div class="p-field mt-5">
            <pv-button type="submit">Sign In</pv-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

h3 {
  color: white;
  font-size: 24px;
  text-align: center;
}

.p-fluid {
  margin-bottom: 20px;
  color: white;
  text-align: center;
}

.field, .p-field {
  margin-top: 20px;
}

.pv-button {
  background-color: transparent;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
}

.pv-button:hover {
  background-color: #45a049;
}

.p-invalid {
  color: red;
  text-align: center;
}
</style>