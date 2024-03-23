<template>
  <div>
    <label>Array:</label>
      <p v-for="row of parsedData">
        {{ row }}
      </p>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Papa from 'papaparse';
import ROW_NAMES from './RowNames.vue'

export default defineComponent({
  name: 'ParseCsvToArray',
  props: {
    file: File
  },
  data() {
    return {
      parsedData: [] as any[],
      rowNames: ROW_NAMES
    }
  },
  methods: {
    parseCsvToArray(file: File){
      Papa.parse(file, {
        header: false,
        complete: (results: Papa.ParseResult<any>) => {
          console.log('Parsed: ', results.data);
          this.parsedData = results.data;
        }
      });
    }
  },
  mounted() {
    if(this.file){
      this.parseCsvToArray(this.file);
    }
  },
});

</script>

<style>
</style>
