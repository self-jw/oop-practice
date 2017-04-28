class Song {

  constructor(song){


    this.title = song.title;
    //in seconds
    this.songLength = song.songLength;
    this.album  = song.album;
    this.artist = song.artist;
    this.track = song.track;
    this.genre = song.genre;
    this._isPlaying = false;
  }

  Play( ) {
      this._isPlaying = true;
      console.log('I am playing a song ' + this.title);
  }

  Pause ( ){
      this._isPlaying = false;
      console.log(this.title + ' is now paused');
  }
}

let kashmirLedZ = {
  title: 'Kashmir',
  songLength: 510,
  album: 'Physical Graffiti',
  artist: 'Led Zeppelin',
  track: 6,
  genre: 'Rock'
};

let custardPieLedZ = {
  title: 'Custard Pie',
  songLength: 260,
  album: 'Physical Graffiti',
  artist: 'Led Zeppelin',
  track: 1,
  genre: 'Rock'
};


//Album name
let Physical_Graffiti = [];

Physical_Graffiti.push(new Song (custardPieLedZ));
Physical_Graffiti.push(new Song (kashmirLedZ));

let Physical_Graffiti1 = [];

Physical_Graffiti1.push(new Song (custardPieLedZ));
Physical_Graffiti1.push(new Song (kashmirLedZ));

//Song name
let newSong = new Song(kashmirLedZ);

// class Album extends Song {
//
//   constructor(songs) {
//     super(songs[0])
//     this.tracks = songs
//     this.songCount = this.tracks.length
//
//   }
//
// }
//
// let newAlbum = new Album()
