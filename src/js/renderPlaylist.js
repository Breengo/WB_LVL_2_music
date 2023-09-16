import { playList, music, current } from "./data";
import { wavesurfer } from "./configWaveSurfer";
import { changeIsPlaylist, changeAudio, audio, changeCurrent } from "./data";
import { renderMusic } from "./configWaveSurfer";
import renderMusicList from "./renderMusicList";

const playlistElem = document.querySelector("#playlist");
const musicList = document.querySelector("#all_music");

const renderPlaylist = () => {
  playlistElem.innerHTML = `<h2>Плейлист</h2>`;
  playList.forEach((track, index) => {
    const p = document.createElement("p");
    p.innerHTML = `${track.author} - ${track.title} 
      <span class="favorites_add inactive">
        <span></span>
        <span></span>
      </span>`;
    playlistElem.appendChild(p);
    p.addEventListener("click", () => {
      changeIsPlaylist(true);
      const pList = playlistElem.querySelectorAll("p");
      pList.forEach((p) => p.classList.remove("current"));
      musicList
        .querySelectorAll("p")
        .forEach((p) => p.classList.remove("current"));
      p.classList.add("current");
      changeAudio(music[index].src);
      wavesurfer.load(audio);
      wavesurfer.on("ready", () => renderMusic());
      changeCurrent(index);
    });
    const span = p.querySelector("span");
    span.addEventListener("click", () => {
      playList.splice(index, 1);
      renderPlaylist();
      renderMusicList();
      localStorage.setItem(
        "playlist",
        JSON.stringify(playList.filter((item) => item.id < 6))
      );
    });
  });
};

export default renderPlaylist;
