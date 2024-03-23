<template>
  <div>
    <FileUpload @file="setFile" />
    <ParseCsvToArray v-if="file" :file="file" />
    <ProcessReleaseData />
    <FetchRelease />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileUpload from './components/FileUpload.vue'
import ParseCsvToArray from './components/ParseCsvToArray.vue'
import ProcessReleaseData from './components/ProcessReleaseData.vue'
import FetchRelease from './components/FetchRelease.vue'

export default defineComponent({
  name: 'App',
  components: {
    FileUpload,
    ParseCsvToArray,
    ProcessReleaseData,
    FetchRelease
  },
  data() {
    return {
      file: null as null | File,
    }
  },
  methods: {
    setFile(file: File) {
      console.log("Received file:", file)
      this.file = file;
    }
  },
  mounted() {
    console.log("mounted");
  },
});
</script>

<style></style>
