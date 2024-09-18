// Write code below 💖

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

const remove_first=musicPlaylist.shift();
console.log(remove_first);
console.log(musicPlaylist);
const add_new_last=musicPlaylist.push("Hello");
console.log(musicPlaylist);
const add_new_first_two=musicPlaylist.unshift("Hello","Ram");
console.log(musicPlaylist);


