class Player {
  constructor(name){
    this.name = name
    //we changed check back
    this.songs = [];

  }
}

//Artist
let lZep = {
  name: 'Led Zeppelin',
  bandMembers: ['Jimmy Page', 'John Bonham', 'Robert Plant', 'John Paul Jones'],
  genre: 'Rock'
};

const ledZep = new Artist(lZep);

//Album
let ledZepAlb ={
  artist: 'Led Zeppelin',
  title: 'Physical Graffiti',
  genre: 'rock',
  songs: [],
  numOfTracks: 2
};

const phyGra = new Album(ledZepAlb);

//Songs

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

phyGra.songs = [
  new Song(kashmirLedZ),
  new Song(custardPieLedZ)
];

//PlayerList

let newPlayList = new PlayList("Our Play List");
