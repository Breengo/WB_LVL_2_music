import "./style.css";
import configAudioElem from "./js/configAudioElem";
import { changePlaylist } from "./js/data";
import configWaveSurfer from "./js/configWaveSurfer";
import { music } from "./js/data";
import { renderMusic } from "./js/configWaveSurfer";
import renderMusicList from "./js/renderMusicList";
import configPlayer from "./js/configPlayer";
import renderPlaylist from "./js/renderPlaylist";

const storagePlayList = localStorage.getItem("playlist");
if (storagePlayList) {
  changePlaylist(JSON.parse(storagePlayList));
}

configAudioElem();
configPlayer();
configWaveSurfer();
renderMusicList();
renderPlaylist();
renderMusic();

document.querySelector("#upload_button").addEventListener("click", () => {
  const uploadInputs = document
    .querySelector("#upload")
    .querySelectorAll("input");

  let audioFile = uploadInputs[2].files[0];
  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    audioFile = e.target.result;
    music.push({
      id: music.length + 1,
      title: uploadInputs[1].value,
      author: uploadInputs[0].value,
      src: audioFile,
    });
    uploadInputs.forEach((inp) => (inp.value = ""));
    renderMusicList();
  });
  reader.readAsDataURL(audioFile);
});
