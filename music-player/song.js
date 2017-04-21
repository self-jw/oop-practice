class Song {
  constructor({title, length, album, artist, track_no}) {
    this.title = title
    this.length = length
    this.album = album
    this.artist = artist
    this.track_no = track_no
    this._playing = false
  }

  play() {
    this._playing = true
  }

  pause() {
    this._playing = false
  }
}

module.exports = Song
