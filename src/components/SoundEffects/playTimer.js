import { sound } from "../../data/Datas";

export const playTimer = (boolean) => {
  if (boolean === true) {
    const promise = sound.play();
    if (promise !== undefined) {
      promise
        .catch((error) => {
          // Auto-play was prevented
          // Show a UI element to let the user manually start playback
          console.log(error);
        })
        .then(() => {
          console.log("good");
        });
    }
  } else {
    return;
  }
};
