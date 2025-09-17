window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`.key[data-key=${e.key}]`);
    if (!audio) return; // when a key without audio tag is pressed, it will return null, or else it will return that audio tag element. 
    if(key){
        key.classList.add('playing')
    }
    audio.currentTime = 0
    audio.play();
});

const keys = document.querySelectorAll('.key');
keys.forEach((key)=>{
    key.addEventListener('transitionend',(e)=>{ // if you are playing with animation, you can give animationend event
        if (e.propertyName === 'transform'){
            key.classList.remove('playing')
        }
    })
})