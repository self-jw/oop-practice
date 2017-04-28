//const Song = require ('./song.js')

class Album {

  constructor(album){

    this.artist = album[0].artist;
    this.title = album[0].album;
    this.genre = album[0].genre;
    this.tracks = album;
    this.songCount = Physical_Graffiti.length;
  }
}

let newAlbum = new Album(Physical_Graffiti);

//Artist name
let LedZeppelin = [['Jimmy Page', 'John Bonham', 'Robert Plant', 'John Paul Jones']];

LedZeppelin.push(new Album (Physical_Graffiti));
LedZeppelin.push(new Album (Physical_Graffiti1));
