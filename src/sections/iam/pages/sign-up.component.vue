<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignUpRequest} from "../model/sign-up.request.js";

export default {
  name: "sign-up",
  data() {
    return {
      authenticationStore: useAuthenticationStore(),
      username: "",
      password: "",
    };
  },
  methods: {
    onSignUp() {
      let signUpRequest = new SignUpRequest(this.username, this.password);
      this.authenticationStore.signUp(signUpRequest, this.$router);
    }
  }

}
</script>

<template>

    <div>
    <h3>Sign Up</h3>
    </div>
    <p class="p-fluid ">Please enter the required information to sign up.</p>
    <div class="container">
        <form @submit.prevent="onSignUp">
          <div class="p-fluid">
            <div class="p-field mt-5">
              <pv-float-label class = "input">
                <label for="username">Username</label>
                <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username}"/>
              </pv-float-label>
            </div>
            <div class="p-field mt-5">
              <pv-float-label class = "input">
                <label for="password">Password</label>
                <pv-input-text id="password" v-model="password" :class="{'p-invalid': !password}" type="password"/>
              </pv-float-label>
            </div>
            <div class="p-field mt-5">
              <pv-button type="submit">Sign Up</pv-button>
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