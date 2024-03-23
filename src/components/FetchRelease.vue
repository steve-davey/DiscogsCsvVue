<template>
  <label>Fetch release</label>
</template>

<script lang="ts">
import { DiscogsClient } from '@lionralfs/discogs-client';
import ProcessReleaseData from './ProcessReleaseData.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'FetchRelease',
  methods: {
    fetchRelease
  }
});

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

</script>

<style></style>