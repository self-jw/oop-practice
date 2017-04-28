//inherit from song

class PlayList {

  constructor(name){
    this.playListName = name;
    this.songListArr = [];
    this._listLength = 0
  }

  addSong(song) {
    this.songListArr.push(song);

    console.log('Song Added ' + song.title);
  }

  removeSong (song){
    for (var i = 0; i < this.songListArr.length; i++) {
      if (this.songListArr[i].title === song) {
        console.log(this.songListArr[i].title + ' has been removed');
        this.songListArr.splice(i, 1);
        break;
      };
    };
  }

  currentSong(){
    console.log("Information about current song " + this.songListArr[0]);
  }

  play( ) {
      this._isPlaying = true;
      console.log('I am playing a song ' + this.songListArr[0].title);
  }

  pause ( ){
      this._isPlaying = false;
      console.log(this.songListArr[0].title + ' is now paused');
  }
}
