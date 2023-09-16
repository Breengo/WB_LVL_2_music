import timeTransform from "./timeTransform";
import { wavesurfer } from "./configWaveSurfer";

let audioElem = wavesurfer.getMediaElement();

const configAudioElem = () => {
  audioElem.addEventListener("loadedmetadata", () => {
    const duration = audioElem.duration;

    document.querySelector("#time").innerText = `${Math.floor(
      audioElem.currentTime / 60
    )}:${timeTransform(Math.round(audioElem.currentTime % 59))}`;

    document.querySelector("#duration").innerText = `${Math.floor(
      duration / 60
    )}:${timeTransform(Math.round(duration % 60))}`;
  });

  audioElem.addEventListener("timeupdate", () => {
    const duration = audioElem.duration;
    if (!isNaN(duration)) {
      const currentTimeElem = document.querySelector("#current_time");
      currentTimeElem.style.width = `${
        audioElem.currentTime / (duration / 100)
      }%`;

      document.querySelector("#time").innerText = `${Math.floor(
        audioElem.currentTime / 60
      )}:${timeTransform(Math.round(audioElem.currentTime % 59))}`;

      document.querySelector("#duration").innerText = `${Math.floor(
        duration / 60
      )}:${timeTransform(Math.round(duration % 60))}`;
    }
  });
};

export default configAudioElem;
