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

const ROW_NAMES: string[] = [
  "release_id",
  "artist",
  "format",
  "qty",
  "format_descriptions",
  "label",
  "catno",
  "country",
  "year",
  "genres",
  "styles",
  "barcode",
  "tracklist"
];

export default {
  name: 'ROW_NAMES',
  components: {
  },
    data() {
        return {
          ROW_NAMES
        }
    }
}

</script>

<style>
</style>