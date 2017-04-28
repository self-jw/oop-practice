class Song {
//agrument passed as an object
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
