<template>
<label>DownloadCSV:</label>
</template>

<script lang="ts">

import { ROW_NAMES } from './RowNames'
// import formattedData from './ProcessReleaseData.vue'

function downloadCSV(data: any[]) {
  const csvContent = "data:text/csv;charset=utf-8," + ROW_NAMES.join(",") + "\n" + data.map(e => e.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");
  document.body.appendChild(link); // Required for Firefox
  link.click();
}

export default {
  name: 'DownloadCSV',
  components: {
  },
  methods: {
    downloadCSV
  },
    data() {
        return {
          // download
        }
    }
};

</script>

<style>
</style>