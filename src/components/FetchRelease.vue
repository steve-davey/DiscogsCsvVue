<template>
  <label>File:</label>
</template>

<script lang="ts">
import { DiscogsClient } from '@lionralfs/discogs-client';
import ProcessReleaseData from './ProcessReleaseData.vue'

const db = new DiscogsClient().database();

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

<style></style>