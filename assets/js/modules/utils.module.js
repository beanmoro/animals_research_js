const soundPlayer = document.querySelector('#player');

export const playSound = (soundName ) => {

    soundPlayer.src = `../assets/sounds/${soundName}`;
    soundPlayer.load();
    soundPlayer.play();
}
