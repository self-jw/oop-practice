//inherit from song

class PlayList {

  constructor(name){
    console.log(name);
    this.playListName = 'My Play List';

    this.songListArr = [];
  }

  addSong( ) {
    this.songListArr.push('some song');
    console.log(this.songListArr);
    console.log('Song Added ');
  }

  removeSong ( ){
    let findSong = this.songListArr.indexOf('some song');
    this.songListArr.splice(findSong, 1);
    console.log(this.title + ' has been removed');
  }

  currentSong(){
    console.log(this.songListArr[0]);
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
 let newPlayList = new PlayList(newArtist);
