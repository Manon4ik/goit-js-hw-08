import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');

if(iframe){

    const player = new Player(iframe);
    
    // player.on('timeupdate', function (data) {
    //     localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
    // });

    player.on('timeupdate', 
        throttle((data) =>
            localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
        )
    , 1000);
    
    if(localStorage.getItem("videoplayer-current-time")){
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    }

}