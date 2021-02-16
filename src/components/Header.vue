<template>
    <header>
      <h1 @click="logTitle">{{title}}</h1>
    </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Jesper's Application",
    };
  },
  methods: {
    logTitle(){
      console.log(this.$data.title);
    }
  },
};
</script>

<style scoped>
header {
  background-color: coral;
}

header h1 {
  color: white;
}
</style>
