<template>
  <div class="main">
    <h2>Login with #code</h2>
    <div id="inputsID">
      <div class="input-group mb-3">
        <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
        <input
          type="text"
          class="form-control col-sm-10"
          placeholder="Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          v-model="email"
        />
      </div>
      <div class="mb-3 input-group m-auto">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <input
          type="password"
          class="form-control col-sm-10"
          id="inputPassword"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="logIn">
        Login
      </button>
      <p class="pt-5"><router-link to="/">or Signup</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      

      if ((result.data > 0)) {
          console.log(result.data);
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ path: "/home" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
}
.main h2 {
  padding-bottom: 25px;
}
#inputsID {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
