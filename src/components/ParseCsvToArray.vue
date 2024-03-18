<template>
    <label :for="uuid">
        {{ label }}
        <input :id="uuid" type="file" u/change="ParseCsvToArray" />
    </label>
</template>

<script lang="ts">

export default {
    name: 'ParseCsvToArray',
    components: {
    },
    data() {
        return {
            File
        }
    }
};
//   import { Vue, Component } from 'vue';

//   @Component
//   export default class FileToLines extends Vue {
//     async fileToLines(file: File): Promise<string[]> {
//       return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           if (e.target) {
//             const parsedLines = (e.target.result as string).split(/\r|\n|\r\n/);
//             resolve(parsedLines);
//           } else {
//             reject();
//           }
//         };
//         reader.onerror = reject;
//         reader.readAsText(file);
//       });
//     }
//   }

import { computed, ref } from 'vue';

const props = withDefaults(
    defineProps<{
        uuid: string;
        label: string;
    }>(),
    {
        enabled: true
    }
);

const emits = defineEmits<{
    (event: 'updateFiles', files: File[]): void;
}>();

function parseCsvFileToArray(event: Event): void {
    const target: HTMLInputElement = as HTMLInputElement;
    const targetFiles: FileList | null = target.files;
    if (targetFiles) {
        const selectedFiles: File[] = [];
        for (let i = 0; i < targetFiles.length; i++) {
            const currentFile = targetFiles[i];
            selectedFiles.push(currentFile);
        }
        if (file.length > 0) {
            emits('updateFiles', selectedFiles);
        }
    }
}
</script>


<style>
</style>