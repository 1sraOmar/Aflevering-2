//En constructor-funktion til at oprette Album-objekter
function Album(albumName, artistName, productionYear, rating) {
  this.albumName = albumName;
  this.artistName = artistName;
  this.productionYear = productionYear;
  this.rating = rating;
  
}

// Funktion der tilføjer en række (tr) med album-info til et HTML-element med et bestemt id
function addDivWithAlbum(album, parentid) {
  console.log ("adding", album) // Viser hvilket album der tilføjes

  let parentElement = document.getElementById(parentid); // Finder det element, som rækken skal tilføjes til

// HTML-streng med data fra album-objektet
  let elementToAdd =
    "<tr><td>" + album.albumName + "</td> " +
    "<td>" + album.artistName + "</td>" +
    "<td>" + album.productionYear + "</td>" +
    "<td>" + album.rating + "</td> " +
    "</tr>";

// Tilføjer den nye række til det eksisterende indhold
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

// Henter data fra en JSON-fil og behandler det
fetchContent("data/albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums);

  let albumObjects = [] // Tom liste til Album-objekter
  console.log("To be populated: ");
  console.log(albumObjects);

// Konverterer hvert JSON-album til et Album-objekt
  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].albumName,
      albums[i].artistName,
      albums[i].productionYear,
      albums[i].rating,
    );
    albumObjects.push(album); // Tilføjer det nye objekt til listen
  }

  console.log("Object Data: ");
  console.log(albumObjects);

  console.log("Test: ");
  console.log(albumObjects[7].productionYear); // Tester én værdi for fx fejl

// For hvert album i listen, kalder vi funktionen der tilføjer en HTML-række
  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content"); // Tilføjer albumdata til HTML-elementet med id "content"
  });
});

//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
