<template>
  <div class="services">
    <h2>
      Welcome to the Services!
      <br/><br/>
      {{inputText}}
      <br/><br/>
      <Textfield @jesper="changeInputText"/>
    </h2>
  </div>
</template>

<script>
import Textfield from "../components/TextField.vue";
export default {
  name: 'Services',
  components: {
    Textfield
  },
  data () {
    return {
      inputText: "First",
    }
  },
  methods: {
    changeInputText(text){
      this.$data.inputText = text;
    }
  }
}
</script>

<style scoped>

</style>
