<template>
    <div>
        <FileUpload @file="setFile" />
    </div>

    <div>
        <p v-for="row of data" :key="row">
            {{ row }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileUpload from '@/components/FileUpload.vue';
import { fetchRelease, parseCsvToArray } from "@/parser";

export default defineComponent({
    name: 'App',
    components: {
        FileUpload,
    },
    data() {
        return {
            data: null as null | string[],
        }
    },
    methods: {
        async setFile(file: File) {
            this.data = await parseCsvToArray(file)
        }
    },
    watch: {
        data(data) {
            fetchRelease(data)
        }
    },
});
</script>