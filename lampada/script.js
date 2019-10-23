const lamp = document.getElementById('lampada');

let acendeApaga = false;


    lampada.addEventListener('click', ()=> {

        if(acendeApaga){
            lampada.src ='lampada.jpg';
            acendeApaga = false;
        }  else{
            lampada.src= 'lampada-on.jpg';
            acendeApaga = true;
        }

        
  
    });


const lamphover = document.getElementById('lampada-hover');

let acendeApagaHover = false;


    lamphover.addEventListener('mouseover', ()=> {

        if(acendeApagaHover){
            lamphover.src ='lampada.jpg';
            acendeApagaHover = false;
        }  else{
            lamphover.src= 'lampada-on.jpg';
            acendeApagaHover = true;
        }

        
  
    });

  

