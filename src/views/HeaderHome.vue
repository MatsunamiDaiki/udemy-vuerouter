<template>
  <nav>
    <h2>Home</h2>
    <router-link to="/" active-class="link--active" exact class="link"
      >Home</router-link
    >
    <router-link to="/users" active-class="link--active" exact class="link"
      >Users</router-link
    >
    <button @click="inclement(2)">+1</button>
    <button @click="decrement(2)">-1</button>
  </nav>
</template>

<script>

export default {
  methods: { 
    inclement() {
      this.$store.dispatch("increment", 2);
    },
  },
};
</script>


<style scoped>
.link {
  margin-right: 10px;
}
</style>