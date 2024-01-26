
const playSound= (e) => {
    const audio=document.querySelector(`.audio${e.keyCode}`)
    if(!audio)
        return;
    audio.currentTime=0;
    audio.play();
    const key=document.querySelector(`.key${e.keyCode}`);
    key.classList.add('playing');
    
}

const removeTransition= (e) =>{
    const targetDiv=e.target;
    targetDiv.classList.remove('playing');
}

document.addEventListener('keydown', playSound)
const keys=document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend',removeTransition);
});