export class Anim {

    init() {
        
        this.bindElements();
    }

    bindElements() {

        document.addEventListener( 'scroll', event => {
            this.moveHelloCopy();
            this.moveScrollThumb();
        })
    }

    moveHelloCopy(){
        let posX  = 590;
        let helloView = document.querySelector('.hello');
        let posY = window.pageYOffset * -1;
        let posNew = posX + (posY * 1.3);
        if(window.pageYOffset >= 270){
            helloView.classList.add('is-highlighted')
        }else {
            helloView.classList.remove('is-highlighted')
        }

        helloView.style.transform = `translateX(${ posNew }` + 'px)'
    }

    moveScrollThumb() {
        let posThumb = 0;
        let scrollThumbView = document.getElementById('scrollThumb');
        let scrollPos = posThumb +  ( window.pageYOffset / 7)   
        scrollThumbView.style.transform = `translateY(${ scrollPos }` + 'px)' 
    }


}