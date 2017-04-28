class Artist{

  constructor(artist){
    console.log(artist);
    this.artist = artist[1].artist;
    this.bandMembers = artist[0];
    this.genre = artist[1].genre;
    this.albums = artist.splice(1,artist.length-1);


  }
}

let newArtist = new Artist(LedZeppelin);

//PlayList
let LedZeppelinPL = [];
LedZeppelinPL.push(new Artist(LedZeppelin));
