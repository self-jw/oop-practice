// example player script using the various objects

const Album = require('./album.js')
const Artist = require('./artist.js')
const Playlist = require('./playlist.js')
const Song = require('./song.js')

const dAngelo = new Artist({ name: "D'Angelo", bandMembers: ["Michael Eugene Archer"], genre: "Neo-Soul" })
const brownSugar = new Album({ title: "Brown Sugar", artist: dAngelo, year: 1995 })

brownSugar.songs = [
  new Song({ title: "Brown Sugar", album: brownSugar, artist: dAngelo, length: 263, track_no: 1 }),
  new Song({ title: "Alright", album: brownSugar, artist: dAngelo, length: 313, track_no: 2 }),
  new Song({ title: "Jonz In My Bonz", album: brownSugar, artist: dAngelo, length: 356, track_no: 3 }),
  new Song({ title: "Me And Those Dreamin' Eyes Of Mine", album: brownSugar, artist: dAngelo, length: 286, track_no: 4 }),
  new Song({ title: "Shit, Damn, Motherfucker", album: brownSugar, artist: dAngelo, length: 314, track_no: 5 }),
  new Song({ title: "Smooth", album: brownSugar, artist: dAngelo, length: 259, track_no: 6 }),
  new Song({ title: "Cruisin'", album: brownSugar, artist: dAngelo, length: 384, track_no: 7 }),
  new Song({ title: "When We Get By", album: brownSugar, artist: dAngelo, length: 344, track_no: 8 }),
  new Song({ title: "Lady", album: brownSugar, artist: dAngelo, length: 346, track_no: 9 }),
  new Song({ title: "Higher", album: brownSugar, artist: dAngelo, length: 327, track_no: 10 })
]

const starred = new Playlist({ name: "Starred" })

starred.addSong(brownSugar.songs[4])
starred.addSong(brownSugar.songs[6])
starred.addSong(brownSugar.songs[9])

starred.play()
starred.next()
starred.pause()

starred.next()
starred.removeSong(brownSugar.songs[6])
