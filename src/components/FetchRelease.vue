<template>

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DiscogsCSV</title>
    </head>
    <body>
      <div id="app"></div>
      <input type="file" name="filename" id="fileInput">
      <script type="module" src="/csv.ts"></script>
    </body>
  </html>
  </template>
  
<script lang="ts">

import ProcessReleaseData from './components/ProcessReleaseData.vue'
import db from './components/DiscogsCSV.vue

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

<style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>