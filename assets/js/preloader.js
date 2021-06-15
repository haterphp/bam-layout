const initPreloaderOptions = {
    timeout: 2000,
    closeDuration: 500,
    template: `
        <div class="loader">
            <div class="loader__item" style="animation-delay: 0s"></div>
            <div class="loader__item" style="animation-delay: .5s"></div>
            <div class="loader__item" style="animation-delay: 1s"></div>
        </div>
    `
};

function Preloader(){
    this.element = null;
    this.options = initPreloaderOptions;

    function make(){
        const element = document.createElement('div');
        element.classList.add('preloader-panel');
        element.innerHTML = this.options.template;
        return element;
    }

    this.open = function (){
        this.element = make.bind(this).call();
        document.body.style="overflow: hidden";
        document.body.append(this.element);
        return this;
    }

    this.close = function () {
        const { closeDuration } = this.options;
        return this.element.animate([
            { opacity: 1 },
            { opacity: 0 },
        ], { duration: closeDuration,  fill: 'forwards' })
        .finished.then(_ => {
            document.body.style="overflow: auto";
            this.element.remove();
        });
    }
}
export default Preloader;
