DiscogsCSV is intended to do the following:

1) Take as input a .csv file, the first column of which contains valid discogs release IDs  
2) Look these release IDs up on discogs API https://api.discogs.com/
3) Return as output the same .csv file, with discogs release data for the following columns included:

- release_id
- artist
- format
- qty
- format descriptions
- label
- catno
- country
- year
- genres
- styles
- barcode
- tracklist
