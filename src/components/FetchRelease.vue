<template>
  <label>Fetch release</label>
</template>

<script lang="ts">
import { DiscogsClient } from '@lionralfs/discogs-client';
import { processReleaseData } from './ProcessReleaseData.vue';
// import { defineComponent } from 'vue'
// import { defineAsyncComponent } from 'vue'

export default  ({
  name: 'FetchRelease',
  methods: {
    fetchRelease
  }
});

const db = new DiscogsClient().database();

// const AsyncComp = defineAsyncComponent(() => {
//   return new Promise((resolve, reject) => {
//     // ...load component from server
//     import('./ProcessReleaseData.vue'),
//     resolve(processReleaseData(releaseId, data))
//   })
// })

async function fetchRelease(releaseId: string): Promise<any[] | { error: string }> {
  try {
    const { data } = await db.getRelease(releaseId);
    return processReleaseData(releaseId, data);
  } catch (error) {
    return {
      error: `Release with ID ${releaseId} does not exist`
    };
  }
}

</script>

<style></style>