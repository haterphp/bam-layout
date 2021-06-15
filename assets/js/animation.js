export default class Animation {
    constructor(elements) {
        this.elements = elements;
        this.isScrolling = false;
        this.init();
    }

    init(){
        this.elements.forEach(element => element.classList.add('element-anim'));
    }

    start(){
        console.log(123)
        this.animate(this.elements[0]);
        this.bindEvents();
    }

    bindEvents(){
        document.addEventListener('scroll', this.watch.bind(this), false)
    }

    animate(element){
        element.classList.add("visible");
    }

    scrolling(event){
        this.elements.forEach(element => {
            console.log(element, this.isPartiallyVisible(element))
            if (this.isPartiallyVisible(element)) {
                this.animate(element);
            }
        });
    }

    watch(e){
        if (this.isScrolling === false ) {
            requestAnimationFrame(function() {
                this.scrolling(e);
                this.isScrolling = false;
            }.bind(this));
        }
        this.isScrolling = true;
    }

    isPartiallyVisible(element){
            let elementBoundary = element.getBoundingClientRect();

            let top = elementBoundary.top;
            let bottom = elementBoundary.bottom;

            return ((top >= 0) && (bottom <= window.innerHeight));
    }
}
