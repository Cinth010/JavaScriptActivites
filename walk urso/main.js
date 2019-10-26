const tela = window.screen.availWidth;

var posi = 0;
var frame = 0;
const animaUrso = ['chara-1.png', 'chara-2.png', 'chara-3.png'];

setInterval(function(){
    if (posi > (tela)){
        return posi = 0;
    }

    document.getElementById("urso").src = animaUrso[frame];
    document.getElementById("urso").style.marginLeft = `${posi}px`;

    posi +=4;

    frame++;

    if(frame > 2){
        frame = 0;
    }

}
,200);