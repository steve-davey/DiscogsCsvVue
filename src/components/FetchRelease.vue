<template>
<label>File:</label>
  </template>
  
<script lang="ts">

import ProcessReleaseData from './ProcessReleaseData.vue'
import db from './DiscogsCSV.vue'

async function fetchRelease(releaseId: string): Promise<any[] | { error: string }> {
    try {
        const { data } = await db.getRelease(releaseId);
        return ProcessReleaseData(releaseId, data);
    } catch (error) {
        return {
            error: `Release with ID ${releaseId} does not exist`
        };
    }
}

export default {
    name: 'FetchRelease',
    components: {
    }
  }

</script>

<style>

</style>