import worldMP3 from "../assets/audio/World.mp3";
import eyesMP3 from "../assets/audio/Eyes.mp3";
import hellMP3 from "../assets/audio/Hell.mp3";
import neverMP3 from "../assets/audio/Never.mp3";
import blueMP3 from "../assets/audio/Blue.mp3";

const music = [
  { id: 1, author: "Armstrong", title: "World", src: worldMP3 },
  { id: 2, author: "AC", title: "Hell", src: hellMP3 },
  { id: 3, author: "Rick", title: "Never", src: neverMP3 },
  { id: 4, author: "DVRST", title: "Eyes", src: eyesMP3 },
  { id: 5, author: "Eiffel", title: "Blue", src: blueMP3 },
];

let playList = [];

let audio = music[0].src;
let current = 0;

let isPlaylist = false;

let randomOn = false;
let cycleOn = false;

const changeAudio = (value) => {
  audio = value;
};

const changeRandomOn = (value) => {
  randomOn = value;
};
const changeCycleOn = (value) => {
  cycleOn = value;
};
const changeIsPlaylist = (value) => {
  isPlaylist = value;
};

const changeCurrent = (value) => {
  current = value;
};

const changePlaylist = (value) => {
  playList = value;
};

export {
  music,
  audio,
  cycleOn,
  randomOn,
  isPlaylist,
  current,
  playList,
  changeAudio,
  changeIsPlaylist,
  changeCycleOn,
  changeRandomOn,
  changeCurrent,
  changePlaylist,
};
