<template>
  <div id="app">
    <Header />

    <section>
      <SideMenu />
      <div id="dynamic-container">
        <router-view />
      </div>
    </section>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideMenu from "./components/SideMenu.vue";

export default {
  name: "App",
  components: {
    Header,
    SideMenu,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: coral;
}

header h1 {
  color: white;
}

section {
  display: flex;
}

section aside {
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

section > div {
  width: 70%;
  height: 100vh;
  background-color: dodgerblue;
}


</style>
