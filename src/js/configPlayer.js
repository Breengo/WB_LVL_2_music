import { wavesurfer } from "./configWaveSurfer";
import { changeCycleOn, changeRandomOn, cycleOn, randomOn } from "./data";
import cycleIcon from "../assets/images/circle.svg";
import randomIcon from "../assets/images/random.svg";
import cycleActiveIcon from "../assets/images/circleActive.svg";
import randomActiveIcon from "../assets/images/randomActive.svg";
import playIcon from "../assets/images/play.svg";
import stopIcon from "../assets/images/stop.svg";

const configPlayer = () => {
  let audioElem = wavesurfer.getMediaElement();

  const volume = document.querySelector("#volume");
  volume.addEventListener("click", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newVolume = (1 / 100) * (x / (volume.clientWidth / 100));
    audioElem.volume = newVolume;
    document.querySelector("#current_volume").style.width = `${
      newVolume * 100
    }%`;
  });

  const timeLine = document.querySelector("#timeline");
  timeLine.addEventListener("click", (e) => {
    const duration = audioElem.duration;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newTime = (duration / 100) * (x / (timeLine.clientWidth / 100));
    audioElem.currentTime = newTime;
  });

  const cycleButton = document.querySelector("#cycle_button");
  cycleButton.addEventListener("click", () => {
    if (cycleOn) {
      changeCycleOn(false);
      cycleButton.src = cycleIcon;
    } else {
      changeCycleOn(true);
      cycleButton.src = cycleActiveIcon;
      changeRandomOn(false);
      randomButton.src = randomIcon;
    }
  });

  const randomButton = document.querySelector("#random_button");
  randomButton.addEventListener("click", () => {
    if (randomOn) {
      changeRandomOn(false);
      randomButton.src = randomIcon;
    } else {
      changeRandomOn(true);
      randomButton.src = randomActiveIcon;
      changeCycleOn(false);
      cycleButton.src = cycleIcon;
    }
  });

  document.querySelector("#play").addEventListener("click", () => {
    const playButtonImg = document.querySelector("#play").querySelector("img");
    if (!audioElem.paused) {
      audioElem.pause();
      playButtonImg.src = playIcon;
    } else {
      audioElem.play();
      playButtonImg.src = stopIcon;
    }
  });
};

export default configPlayer;
