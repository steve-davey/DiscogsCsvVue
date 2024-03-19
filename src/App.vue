<template>

  <main>
    <FileUpload />
    <ParseCsvToArray />
    <ProcessReleaseData /> 
  </main>
</template>

<script lang="ts">
import FileUpload from './components/FileUpload.vue'
import ParseCsvToArray from './components/ParseCsvToArray.vue'
import ProcessReleaseData from './components/ProcessReleaseData.vue'
// import App from './App.vue'

export default {
  name: 'App',
  components: {
    FileUpload,
    ParseCsvToArray,
    ProcessReleaseData,
  },

  methods: {
  }
};  
</script>

<style>
</style>
