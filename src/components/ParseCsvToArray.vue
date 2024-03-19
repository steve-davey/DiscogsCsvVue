<template>
<label>Array:</label>
</template>

<script lang="ts">

import Papa from 'papaparse';

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
            File
        }
    }
};


function parseCsvToArray(url: any, callBack: (arg0: any) => void){
    Papa.parse(url, {
        complete: function(results: { data: any[]; }) {
        callBack(results.data[0]);
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