<template>
    <label>File:</label>
    <input type="file" @change="chooseFiles">
    
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FileUpload',
  data() {
    return {
      file: ""
    }
  },
  methods: {
    chooseFiles(event) {
      console.log("chooseFiles");
      const file = event.target.files[0];
      console.log(file);
      this.$emit("file", file);
    },
  },
  mounted() {
    console.log("mounted");
  },
});

</script>

<style>
</style>
