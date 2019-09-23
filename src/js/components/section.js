export class Section {
    init() {
        this.bindElements();
    }

    bindElements() {
        document.addEventListener( 'scroll', event => {
            let v = document.querySelectorAll('.animated-copy')

            v.forEach((element, index) => {
                if(this.inViewport(element)){
                    setTimeout(function() {
                        element.classList.add('fadeInUp')
                        element.classList.add('animated')
                    }, 300)
                }
            });
        });
    }

    inViewport( element ){
        var view = element.getBoundingClientRect();
        return !(view.top > innerHeight || view.bottom < 0);
    }
}