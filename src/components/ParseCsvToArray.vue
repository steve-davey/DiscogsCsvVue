<template>
<label>Array:</label>
</template>

<script lang="ts">

import Papa from 'papaparse';
import ROW_NAMES from './RowNames.vue'

const moduleInstance: any = Papa;

export default {
    name: 'ParseCsvToArray',
    components: {
    },
    methods: {
        parseCsvToArray
    },
    data() {
        return {
            rowNames: ROW_NAMES
        }
    }
};

function parseCsvToArray(url: any, file: (arg0: any) => void){
    Papa.parse(url, {
        complete: function(results: { data: any[]; }) {
            file(results.data[0]);
        }
    });
}

function doStuff(data: any[]){
    newArray=data;
    console.log(newArray);
}

var newArray=[];
moduleInstance(document.getElementById("file"), doStuff);

</script>

<style>
</style>