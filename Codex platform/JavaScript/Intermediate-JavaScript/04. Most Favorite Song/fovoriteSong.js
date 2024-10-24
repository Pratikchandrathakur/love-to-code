const fiveMostStreamedSongs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    streams: 4260000000,
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    streams: 3901000000,
  },
  {
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    streams: 3413000000,
  },
  {
    title: "Sunflower",
    artist: "Post Malone (feat. Swae Lee)",
    streams: 3345000000,
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    streams: 3278000000,
  },
];

// Iterate through each song here 💖

// Iterate through each song
for (let song of fiveMostStreamedSongs) {
  for (let key in song) {
    console.log(song[key]);
  }
  console.log(''); // To add a blank line between each song's details
}
