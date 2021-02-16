<template>
    <input type="text" @input="valueChanges" v-model="inputValue"/>
</template>

<script>
export default {
  name: "TextField",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    valueChanges(){
      this.$emit("jesper", this.$data.inputValue)
    }
  },
};
</script>

<style scoped>

</style>
