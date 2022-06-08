'use strict';

const pusti = document.querySelector('.pusti');
const pauziraj = document.querySelector('.pauziraj');
const kugla = document.querySelector('.kugla');
const linkRadio = document.querySelector('.link-radio');
const audio = document.querySelector('.audio');
const izvor = document.querySelector('.izvor');
const viber = document.querySelector('.viber-share');

pusti.addEventListener('click', function(){
    pusti.classList.add('hidden');
    pauziraj.classList.remove('hidden');

//    audio.src = 'https://freeuk30.listen2myradio.com/live.mp3?typeportmount=s1_11732_stream_337508088';
//    audio.play();


        audio.src = "https://freeuk30.listen2myradio.com/live.mp3?typeportmount=s1_11732_stream_337508088";

    audio.play();

    kugla.trigger = 'loop';

//    console.log(audio.src)
})


pauziraj.addEventListener('click', function(){
    pusti.classList.remove('hidden');
    pauziraj.classList.add('hidden');

//    audio.pause();
//    audio.currentTime = 0;
////    audio.src = "";

    audio.pause();
    audio.currentTime = 0;
    audio.src = "";
//    izvor.src = "https://freeuk30.listen2myradio.com/live.mp3?typeportmount=s1_11732_stream_337508088";

    kugla.trigger = 'none';

})

viber.addEventListener('click', function(){
    viber.setAttribute('href', "viber://forward?text=https://una-butik.github.io/radio/")
})
