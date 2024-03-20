<template>

    <label>File:</label>
    <input type="file">
    
</template>

<script lang="ts">

export default {
    name: 'FileUpload',
    components: {
    },
    data() {
      return {
        file: ""
      }
    },
    methods: {
    chooseFiles() {
      document.getElementById("file").click();
    },
  },
  mounted() {
    console.log("mounted");
  }
}; 

</script>

<style>
</style>
