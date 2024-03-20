<template>
<label>Row names:</label>
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