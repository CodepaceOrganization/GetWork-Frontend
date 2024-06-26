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
  </div>
  <p class="p-fluid mb-5">Please enter the required information to sign in.</p>
  <div class = "container">
    <form @submit.prevent="onSignIn">
      <div class="">
        <div class="field mt-5">
            <pv-float-label>
              <label for="username">Username</label>
              <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username}"/>
            </pv-float-label>
            <small v-if="!username" class="p-invalid">Username is required.</small>
        </div>
        <div class="p-field mt-5">
            <pv-float-label>
              <label for="password">Password</label>
              <pv-input-text id="password" v-model="password" :class="{'p-invalid': !password}" type="password"/>
            </pv-float-label>
            <small v-if="!password" class="p-invalid">Password is required.</small>
        </div>
        <div class="p-field mt-5">
          <pv-button type="submit">Sign In</pv-button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 73vh;
}
h3 {
    color: #333;
    font-size: 24px;
}

.p-fluid {
    margin-bottom: 20px;
}

.field, .p-field {
    margin-top: 20px;
}

.pv-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.pv-button:hover {
    background-color: #45a049;
}

.p-invalid {
    color: red;
}
</style>