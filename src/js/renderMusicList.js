import { music, playList } from "./data";
import { renderMusic, wavesurfer } from "./configWaveSurfer";
import { changeIsPlaylist, changeAudio, audio, changeCurrent } from "./data";
import renderPlaylist from "./renderPlaylist";

const playlistElem = document.querySelector("#playlist");
const musicList = document.querySelector("#all_music");

const renderMusicList = () => {
  const playListIndexes = playList.map((track) => track.id);
  musicList.innerHTML = "<h2>Музыка</h2>";
  music.forEach((track, index) => {
    const p = document.createElement("p");
    p.innerHTML = `${track.author} - ${track.title} 
    <span class="favorites_add ${
      playListIndexes.includes(track.id) ? "inactive" : "active"
    }">
      <span></span>
      <span></span>
    </span>`;

    musicList.appendChild(p);
    if (index === 0) p.classList.add("current");
    p.addEventListener("click", () => {
      changeIsPlaylist(false);
      const pList = musicList.querySelectorAll("p");
      pList.forEach((p) => p.classList.remove("current"));
      playlistElem
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
      let trackIndex;
      if (
        playList.filter((item, index) => {
          if (item.id === track.id) {
            trackIndex = index;
            return true;
          }
          return false;
        }).length === 0
      ) {
        playList.push(track);
        span.classList.remove("active");
        span.classList.add("inactive");
      } else {
        playList.splice(index, 1);
        span.classList.remove("inactive");
        span.classList.add("active");
      }
      localStorage.setItem(
        "playlist",
        JSON.stringify(playList.filter((item) => item.id < 6))
      );
      renderPlaylist();
    });
  });
};

export default renderMusicList;
