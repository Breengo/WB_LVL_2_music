import WaveSurfer from "wavesurfer.js";
import playIcon from "../assets/images/play.svg";
import stopIcon from "../assets/images/stop.svg";

import {
  audio,
  cycleOn,
  randomOn,
  isPlaylist,
  changeAudio,
  current,
  changeCurrent,
  music,
  playList,
} from "./data";

const wavesurfer = WaveSurfer.create({
  hideScrollbar: true,
  minPxPerSec: 500,
  container: "#waveform",
  waveColor: "rgba(255,255,255,0.1)",
  progressColor: "rgb(255,255,255)",
  url: audio,
  interact: false,
});

let audioElem = wavesurfer.getMediaElement();

const renderMusic = () => {
  audioElem = wavesurfer.getMediaElement();
  document.querySelector("#play").querySelector("img").src = playIcon;
  wavesurfer.pause();
  const currentTimeElem = document.querySelector("#current_time");
  currentTimeElem.style.width = `0`;
};

const musicList = document.querySelector("#all_music");
const playlist = document.querySelector("#playlist");

const configWaveSurfer = () => {
  wavesurfer.on("finish", () => {
    let musicArr = isPlaylist ? playList : music;
    let musicContainer = isPlaylist ? playlist : musicList;
    if (randomOn) {
      let random = Math.round(Math.random() * 100);
      random = random % musicArr.length;
      while (random === current) {
        random = Math.round(Math.random() * 100);
        random = random % musicArr.length;
      }
      changeCurrent(random);
    } else if (!cycleOn) {
      changeCurrent(current < musicArr.length - 1 ? current + 1 : 0);
    }
    const pList = musicContainer.querySelectorAll("p");
    pList.forEach((p) => p.classList.remove("current"));
    pList[current].classList.add("current");
    changeAudio(musicArr[current].src);
    wavesurfer.load(audio);
    wavesurfer.on("ready", () => {
      renderMusic();
      wavesurfer.play();
      document.querySelector("#play").querySelector("img").src = stopIcon;
    });
  });
};

export { wavesurfer, renderMusic };
export default configWaveSurfer;
