function Album(albumName, artistName, productionYear, rating) {
  this.albumName = albumName;
  this.artistName = artistName;
  this.productionYear = productionYear;
  this.rating = rating;
  
}


function addDivWithAlbum(album, parentid) {
  console.log ("adding", album)
  let parentElement = document.getElementById(parentid);
  let elementToAdd =
    "<tr><td>" + album.albumName + "</td> " +
    "<td>" + album.artistName + "</td>" +
    "<td>" + album.productionYear + "</td>" +
    "<td>" + album.rating + "</td> "
    "</tr>";
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

fetchContent("data/albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums);

  let albumObjects = []
  console.log("To be populated: ");
  console.log(albumObjects);

  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].albumName,
      albums[i].artistName,
      albums[i].productionYear,
      albums[i].rating,
    );
    albumObjects.push(album);
  }

  console.log("Object Data: ");
  console.log(albumObjects);

  console.log("Test: ");
  console.log(albumObjects[7].productionYear);

  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content");
  });
});

//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
