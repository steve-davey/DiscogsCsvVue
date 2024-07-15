<template>
    <div>
        <FileUpload @file="setFile" />
    </div>

    <div>
        <p v-for="row of data" :key="row">
            {{ row }}
        </p>
    </div>

    <div>
    <PrepareDownload />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileUpload from '@/components/FileUpload.vue';
import { fetchRelease, parseCsvToArray } from "@/parser";
import PrepareDownload from './components/PrepareDownload';
import { ROW_NAMES } from '@/components/RowNames';

export default defineComponent({
    name: 'App',
    components: {
        FileUpload,
        PrepareDownload
    },
    data() {
        return {
            data: null as null | string[],
        }
    },
    methods: {
        async setFile(file: File) {
            this.data = await parseCsvToArray(file)
            console.log(this.data)
        },
        async fetchReleases(idList: string[]) {
            try {
                const releases = await fetchRelease(idList)
                console.log('Fetched releases from Discogs', releases)
            } catch (err) {
                console.log('Failed fetching releases', err)
            }
        },
        async downloadCSV(releases: any[]) {
            const csvContent = "releases:text/csv;charset=utf-8," + ROW_NAMES.join(",") + "\n" + releases.map(e => e.join(",")).join("\n");
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "my_data.csv");
            document.body.appendChild(link); // Required for Firefox
            link.click();
        }
    },
    watch: {
        data(data) {
            this.fetchReleases(data)
        }
    },
});
</script>