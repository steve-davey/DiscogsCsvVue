<script lang="ts">

import { type GetReleaseResponse } from '@lionralfs/discogs-client/types/types';  

export default {
    name: 'ProcessReleaseData',
};  

function processReleaseData(releaseId: string, data: GetReleaseResponse) {

    const { country = 'Unknown', genres = [], styles = [], year = 'Unknown' } = data;
    const artists = data.artists?.map?.(artist => artist.name);
    const barcode = data.identifiers.filter(id => id.type === 'Barcode').map(barcode => barcode.value);
    const catno = data.labels.map(catno => catno.catno);
    const uniqueCatno = [...new Set(catno)];
    const descriptions = data.formats.map(descriptions => descriptions.descriptions);
    const format = data.formats.map(format => format.name);
    const labels = data.labels.map(label => label.name);
    const uniqueLabels = [...new Set(labels)];
    const qty = data.formats.map(format => format.qty);
    const tracklist = data.tracklist.map(track => track.title);
    // const delimiter = document.getElementById('delimiter').value || '|';
    const delimiter = '|';
    const formattedBarcode = barcode.join(delimiter);
    const formattedCatNo = uniqueCatno.join(delimiter);
    const formattedGenres = genres.join(delimiter);
    const formattedLabels = uniqueLabels.join(delimiter);
    const formattedStyles = styles.join(delimiter);
    const formattedTracklist = tracklist.join(delimiter);
    const preformattedDescriptions = descriptions.toString().replace('"', '""').replace(/,/g, ', ');
    const formattedDescriptions = '"' + preformattedDescriptions + '"';
    const formattedData: any[] = [
        releaseId,
        artists,
        format,
        qty,
        formattedDescriptions,
        formattedLabels,
        formattedCatNo,
        country,
        year,
        formattedGenres,
        formattedStyles,
        formattedBarcode,
        formattedTracklist
    ];

    return formattedData;
}

</script>

<template>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>
  
    <main>
      <FileToLines />
      <ProcessReleaseData />
    </main>
  </template>
  
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