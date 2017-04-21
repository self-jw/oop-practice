class Album {
  constructor({title, artist, songs, year}) {
    this.title = title
    this.artist = artist
    this.songs = songs
    this.year = year
  }

  get songCount() {
    return this.songs.length
  }
}

module.exports = Album
