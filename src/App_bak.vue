<template>
  <div>
    <FileUpload @file="setFile" />
    <ParseCsvToArray v-if="file" :file="file" />
    <ProcessReleaseData />
    <FetchRelease />
    <DownloadCSV />
  </div>
</template>

<script lang="ts">
import DownloadCSV from './components/DownloadCSV';
import FetchRelease from './components/FetchRelease';
import { defineComponent } from 'vue';
import FileUpload from './components/FileUpload.vue';
import ParseCsvToArray from './components/ParseCsvToArray.vue';
import ProcessReleaseData from './components/ProcessReleaseData';

export default defineComponent({
  name: 'App',
  components: {
    FileUpload,
    ParseCsvToArray,
    ProcessReleaseData,
    FetchRelease,
    DownloadCSV
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
