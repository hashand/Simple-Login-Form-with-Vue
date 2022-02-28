////////////////////////////////// Template
/////////////////////////////////////////////////
<template>
  <div class="main">
    <h2>Sign up with #code</h2>
    <div id="inputsID">
      <div class="input-group mb-3">
        <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
        <input
          type="text"
          class="form-control col-sm-10"
          placeholder="User name"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          v-model="name"
        />
      </div>
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
      <button type="submit" class="btn btn-primary" @click="signUp">
        Submit
      </button>
      <p class="pt-5"><router-link to="/login">or Log in</router-link></p>
    </div>
  </div>
</template>

///////////////////////////////////////// Styles
/////////////////////////////////////////////////////
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

//////////////////////////////////// Scripts
/////////////////////////////////////////////
<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ path: "/home" });
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ path: "/home" });
    }
  },
};
</script>
