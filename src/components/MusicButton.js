import { sound } from "../data/soundData";

export const MusicButton = (boolean) => {
  const promise = sound.play();
  if (boolean == true) {
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
  }
};
