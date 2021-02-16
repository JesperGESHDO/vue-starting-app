<template>
  <aside>
    <h3>Menu</h3>
    <SideMenuButton v-for="button in buttons" v-bind:key="button.text" :text="button.text" :route="button.route" />
  </aside>
</template>

<script>
import SideMenuButton from "./SideMenuButton.vue";

export default {
  name: "SideMenu",
  components: {
    SideMenuButton,
  },
  data() {
    return {
      buttons: [
        {
          text: "Home",
          route: "/",
        },
        {
          text: "About",
          route: "/about",
        },
        {
          text: "Contact",
          route: "/contact",
        },
        {
          text: "Services",
          route: "/services",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
aside {
  background-color: darkmagenta;
}

aside h3 {
  color: white;
}
</style>
