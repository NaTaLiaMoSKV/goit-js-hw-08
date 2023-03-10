import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = "videoplayer-current-time";

onPageReload();

function onTimeUpdate(data) {
    const currentTime = data.seconds;
    console.log(currentTime);
    localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
};
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onPageReload() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedData) {
        player.setCurrentTime(savedData);
    }
}