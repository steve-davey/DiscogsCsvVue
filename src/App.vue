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
import { defineComponent } from 'vue';
import FileUpload from './components/FileUpload';
import ParseCsvToArray from './components/ParseCsvToArray';
import ProcessReleaseData from './components/ProcessReleaseData';
import FetchRelease from './components/FetchRelease';
import DownloadCSV from './components/DownloadCSV'

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
