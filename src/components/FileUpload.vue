<template>

    <label>File:</label>
    <input type="file">
    
</template>

<script lang="ts">

import {createApp} from "vue";
import App from "./src/App.vue";
import {VueCsvImportPlugin} from "vue-csv-import";

export default {
    name: 'FileUpload',
    components: {
    },
    data() {
      return {
        file: ""
      }
    },
    methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
  },
  mounted() {
    console.log("mounted");
  }
}; 

createApp(App)
    .use(VueCsvImportPlugin)
    .mount("#app");

// let app=new Vue({
//   el: "#app",
//   data:function() {
// return {
//     file: ""
//   };
// },
//   methods: {
//     parseCsvFileToArray: function () {
//                 this.file = this.$refs.file.files[0];
                
//             },
//             chooseFiles() {
//         document.getElementById("fileUpload").click()
//     },
//   }
// })

// app.mount('#app')
</script>

<style>
</style>
