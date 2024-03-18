<script setup lang="ts">

import { DiscogsClient } from '@lionralfs/discogs-client';
import { type GetReleaseResponse } from '@lionralfs/discogs-client/types/types';  

const db = new DiscogsClient().database();

const ROW_NAMES: string[] = [
    "release_id",
    "artist",
    "format",
    "qty",
    "format_descriptions",
    "label",
    "catno",
    "country",
    "year",
    "genres",
    "styles",
    "barcode",
    "tracklist"
];

async function fileToLines(file: File): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                const parsedLines = (e.target.result as string).split(/\r|\n|\r\n/);
                resolve(parsedLines);
            } else {
                reject();
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

const fileInputElement = document.getElementById("fileInput");

if (fileInputElement) {
    fileInputElement.addEventListener("change", async function (e: Event) {
        const files = (e.target as HTMLInputElement).files;
        if (files) {
            const file = files[0];
            try {
                const idFiltered = (await fileToLines(file)).filter((v) => v !== "");
                const allRows = await Promise.all(idFiltered.map(fetchRelease));
                download(allRows);
            } catch (error) {
                console.error("Error processing file:", error);
            }
        }
    });
}

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

function download(data: any[]) {
    const csvContent = "data:text/csv;charset=utf-8," + ROW_NAMES.join(",") + "\n" + data.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
}

</script>

<template>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <title>DiscogsCSV</title>
  <h1>DiscogsCSV</h1>
  <style>
  td {
    max-width: 15vw;
    overflow: auto;
  }
  </style>
</head>
<body>
  <div>

    <a href="test_5_lines.csv" download>Sample input file</a>

    <br>

    <!-- <div id="delimiter"> 

    <label for="name">File delimiter (optional, max 1 character):</label>

    <input type="text" id="delimiter" name="delimiter" required
    minlength="0" maxlength="1" size="1" value="|"><br>

 </div> -->

    <input type="file" name="filename" id="fileInput">

    <div class="csv"></div>

    <script src="csv.js" ></script>

  </div>

  <a href="index.html">home</a>

</body>
</html>

</template>

<style scoped>

* {
  box-sizing: border-box
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Dosis', sans-serif;
  line-height: 1.6;
  color: #666;
  background: #F6F6F6;
}

#root {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  padding: 1.5rem 2.5rem;
  background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  color: white;
}

img {
  display: block;
  margin: 1rem auto;
  max-width: 100%;
}

p {
  padding: 0 2.5rem 2.5rem;
  margin: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 1rem;
  background: white;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
  border-radius: 12px;
  overflow: hidden;
  transition: all .2s linear;
}

.card:hover {
  box-shadow: 2px 8px 45px rgba(0, 0, 0, .15);
  transform: translate3D(0, -2px, 0);
}

@media screen and (min-width: 600px) {
  .card {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media screen and (min-width: 900px) {
  .card {
    flex: 1 1 calc(33% - 2rem);
  }
}

.card:nth-child(2n) h1 {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.card:nth-child(4n) h1 {
  background-image: linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%);
}

.card:nth-child(5n) h1 {
  background-image: linear-gradient(120deg, #ffc3a0 0%, #ffafbd 100%);
}


</style>