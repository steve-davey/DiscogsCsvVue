<template>

  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DiscogsCSV</title>
  </head>

  <body>
    <div id="app"></div>
    <input type="file" name="filename" id="fileInput">
    <script type="module" src="/csv.ts"></script>
  </body>

  </html>
</template>

<script lang="ts">

import ROW_NAMES from './components/RowNames.vue'
import formattedData from './components/ProcessReleaseData.vue'

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
          download
        }
    }
};

</script>

<style>
</style>