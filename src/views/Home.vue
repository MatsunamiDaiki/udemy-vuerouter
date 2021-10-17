<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <input type="text" :value="message">
    <p>{{message}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]),
    message(){
      return this.messagge.$store.getters.message
    }
  },
  methods: {
    toUsers() {
      this.$router.push("users");
    },
  },
};
</script>
