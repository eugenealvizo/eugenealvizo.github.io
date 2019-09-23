export class Anim {

    init() {
        
        this.bindElements();
    }

    bindElements() {
        let posX  = 590;
        let posThumb = 0;
        document.addEventListener( 'scroll', event => {
            let hello = document.querySelector('.hello');
            let posY = window.pageYOffset * -1;
            let posNew = posX + (posY * 1.3);
            if(window.pageYOffset >= 270){
                hello.style.color = '#FF0C8D';
            }else {
                hello.style.color = '#EDEDED'; 
            }
            hello.style.transform = `translateX(${ posNew }` + 'px)' 

            let scrollThumb = document.getElementById('scrollThumb');
            let scrollPos = posThumb +  ( window.pageYOffset / 5.5)   
            scrollThumb.style.transform = `translateY(${ scrollPos }` + 'px)' 
        })
    }


}