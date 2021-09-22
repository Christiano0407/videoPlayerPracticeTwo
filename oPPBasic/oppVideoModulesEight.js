console.group("Modules Javascript");
// MODULES>>>
// <== Exportar ==>

// function>
function videoPlay(id) {
  const urlSecret = "http://platziUltraSecreta.com/" + id;
  console.log("PlayVideo" + urlSecret);
}

function videoPause(id) {
  const urlStop = "http://platziUltraSecreta.com/" + id;
  console.log("PausedVideo" + urlStop);
}
//(F)
// Instancia de clase Video>
export class VideoClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  // Methods ==>
  // Van aplicar las funciones >
  reproducir() {
    videoPlay(this.videoID);
  }

  pause() {
    videoPause(this.videoID);
  }
}

console.groupEnd();
