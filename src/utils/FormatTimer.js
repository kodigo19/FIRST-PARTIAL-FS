function formatTimer(seconds) {
  let hs = Math.floor(seconds / 3600);
  let ms = Math.floor((seconds % 3600) / 60);
  let ss = Math.floor((seconds % 3600) % 60);

  if (hs < 10) {
    hs = `0${hs}`;
  }
  if (ms < 10) {
    ms = `0${ms}`;
  }
  if (ss < 10) {
    ss = `0${ss}`;
  }
  return `${hs}:${ms}:${ss}`;
}

export default formatTimer;
