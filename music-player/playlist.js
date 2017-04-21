class Playlist {
  constructor({name, songs=[]}) {
    this.name = name
    this.songs = songs
    this._currentSongIndex = 0
  }

  addSong(song) {
    this.songs.push(song)
  }

  removeSong(song) {
    const index = this.songs.indexOf(song)
    if (index > -1) {
      this.songs.splice(index, 1)
    }
  }

  get currentSong() {
    return this.songs[this._currentSongIndex]
  }

  play() {
    this.currentSong.play()
  }

  pause() {
    this.currentSong.pause()
  }

  next() {
    this.currentSong.pause()

    if (this._currentSongIndex < this.songs.length) {
      this._currentSongIndex++
    } else {
      this._currentSongIndex = 0
    }

    this.currentSong.play()
    return this.currentSong
  }
}

module.exports = Playlist
