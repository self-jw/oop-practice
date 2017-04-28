//const Song = require ('./song.js')

class Album {
//deconstruct object
  constructor({artist, title, genre, songs, numOfTracks}){

    this.artist = artist
    this.title = title;
    this.genre = genre;
    this.songs = songs;
    this.numOfTracks = numOfTracks;
    //check later
    this.songCount = songs.length
  }
}

// albumObj ={
//   artist:
//   title:
//   genre:
//   songs: []
//   numOfTracks:
// }
