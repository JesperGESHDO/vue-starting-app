<template>
  <button @click="changeRoute">
    {{text}}
  </button>
</template>

<script>
export default {
  name: "SideMenuButton",
  props:["text", "route"],
  data() {
    return {};
  },
  methods: {
    changeRoute(){
      this.$router.push(this.$props.route);
    }
  },
};
</script>

<style scoped>
  button {
    width: 100px;
    margin: 20px;
  }
</style>
