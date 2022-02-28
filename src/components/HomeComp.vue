<template>
  <h1>Successfully Signed up</h1>
</template>

<script>
export default {
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style></style>
